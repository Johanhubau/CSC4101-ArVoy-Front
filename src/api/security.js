import fetch from '../utils/fetch'

export default {
  async login(login, password) {
    let response = await fetch('login', { redirect401: false, method: 'POST', body: JSON.stringify({
      username: login,
      password: password
    })});
    return await response.json();
  },
  async checkLogin() {
    const response = await fetch('/api/login', {redirect401: false});
    const json = await response.json();
    return { isAuthenticated: json.is_authenticated, user: json.user };
  }
}
