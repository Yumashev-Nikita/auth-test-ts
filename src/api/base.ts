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
    console.log('REQUEST ERROR', error);
    return error;
  }
)

MainApi.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (response: any) => {
    return response;
  },
  (error) => {
    console.log('RESPONSE ERROR', error.response.status);
    if (error.response.status === 404) {
      console.log('s');
      router.push('/restore/commit/xxxx'); 
    } else if (error.response.status === 409 || error.response.status === 408) {
      router.push('/register');
    } else {
      router.push('/auth');
    }
    return error.response;
  }
)
