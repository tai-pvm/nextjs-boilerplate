import Axios, { type AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

const axios = Axios.create({
  baseURL: process.env.BASE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

function interceptRequestData(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    const accessToken: string = localStorage.get('access_token');
    if (accessToken) {
      config.headers.set('X-Access-Token', `Bearer ${accessToken}`);
    }
  }
  return config;
}

function interceptRequestError(error: AxiosError) {
  return Promise.reject(error);
}

function interceptResponseData(response: AxiosResponse) {
  return response;
}

function interceptResponseError(error: AxiosError) {
  if (error.response?.status === 401) {
    // redirect login
  }
  return Promise.reject(error);
}

axios.interceptors.request.use(interceptRequestData, interceptRequestError);
axios.interceptors.response.use(interceptResponseData, interceptResponseError);

export default axios;
