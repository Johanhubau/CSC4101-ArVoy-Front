import SubmissionError from '../error/SubmissionError'
import { ENTRYPOINT } from '../config/entrypoint';
import UnauthorizedError from "../error/NeedsLoginError";

const MIME_TYPE = 'application/ld+json'

export default function (id, options = {}) {
  if (typeof options.headers === 'undefined') Object.assign(options, { headers: new Headers() })

  if (options.headers.get('Accept') === null) options.headers.set('Accept', MIME_TYPE)

  if (options.body !== undefined && !(options.body instanceof FormData) && options.headers.get('Content-Type') === null) {
    options.headers.set('Content-Type', MIME_TYPE)
  }
  options.withCredentials = true;
  options.credentials = 'include';
  if (!("redirect401" in options)) options.redirect401 = true;
  const entryPoint = ENTRYPOINT + (ENTRYPOINT.endsWith('/') ? '' : '/');
  let url = new URL(id, entryPoint);
  if ("filters" in options) Object.keys(options.filters).forEach(key => url.searchParams.append(key, options.filters[key]));
  return fetch(url, options).then((response) => {
    if (response.ok) return response;

    if (response.status === 401 && options.redirect401) throw new UnauthorizedError();

    return response
      .json()
      .then((json) => {
        const error = json ? json : response.statusText
        if (!json.violations) throw Error(error)

        const errors = { _error: error }
        json.violations.map(violation =>
          Object.assign(errors, { [violation.propertyPath]: violation.message }))

        throw new SubmissionError(errors)
      })
  })
}
