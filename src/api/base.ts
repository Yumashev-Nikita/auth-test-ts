import axios from 'axios';
import router from '../router'

export const MainApi = axios.create({
  baseURL: 'https://test.atwinta.online/api/v1',
  headers: {
    'Content-Type': 'application/json',
  }
})

MainApi.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (request: any) => {
    if (localStorage.getItem('authToken') !== null) {
      request.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`;
    }
    return request;
  },
  (error) => {
    return error;
  }
)

MainApi.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (response: any) => {
    return response;
  },
  (error) => {
    const url = error.config.url;
    if (url === '/auth/register') {
      router.push('/register');
    } else if (url === '/auth/restore/confirm') {
      router.push('/restore/commit/xxxx'); 
    } else {
      router.push('/auth');
    }
    return error.response;
  }
)
