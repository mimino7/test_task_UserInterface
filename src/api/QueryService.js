import axios from 'axios';
import { authUserApiMock } from '../mock/authUserApiMock';

console.log(process.env);
const client = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
  timeout: 8000
});

export class QueryService {
  static getNews({ limit, start, userId }) {
    return client.get('/posts', {
      params: {
        userId,
        _limit: limit,
        _start: start
      }
    });
  }

  static getPhotos({ limit, start, userId }) {
    return client.get('/photos', {
      params: {
        userId,
        _limit: limit,
        _start: start
      }
    });
  }

  static getUsers() {
    return client.get('/users');
  }

  static getProfile() {
    return client.get('/users/1');
  }

  static changeProfile(params) {
    return client.put('/users/1', params);
  }

  static authUser({ email, password }) {
    return authUserApiMock(email, password);
  }
}
