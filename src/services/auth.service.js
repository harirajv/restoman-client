import axios from 'axios';

const API_URL = 'http://localhost:3000';

class AuthService {
  login(email, password) {
    return axios.post(API_URL + '/login', {
      email,
      password
    })
    .then(response => {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    });
  }

  logout() {
    return axios.delete(API_URL + '/logout')
      .then(() => {
        localStorage.clear();
        window.location.href = '';
      });
  }

  signup() {
    // PENDING TODO
  }
}

export default new AuthService();
