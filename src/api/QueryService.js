import axios from 'axios';
import { ALL_NEWS, ALL_PROFILEDATA, ALL_USERS } from './constantsApi';

export class QueryService {
  static getNews({ limit, start, userId }) {
    return axios.get(ALL_NEWS, {
      params: {
        userId,
        _limit: limit,
        _start: start
      }
    });
  }

  static getUsers() {
    return axios.get(ALL_USERS);
  }

  static getProfile() {
    return axios.get(ALL_PROFILEDATA);
  }
}
