export default class NeedsLoginError extends Error {
  constructor () {
    super('The request needs further authentication');
    return this
  }
}
