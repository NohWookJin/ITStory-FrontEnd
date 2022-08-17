import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.itstory.shop/',
});

function requestInterceptor(config: AxiosRequestConfig) {
  return {
    ...config,
    // headers: {
    //   Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    // },
  };
}

instance.interceptors.request.use(requestInterceptor);

function responseFulfilledInterceptor(res: AxiosResponse) {
  if (200 <= res.status && res.status < 300) {
    return res.data;
  }
  return Promise.reject(res.data);
}

function responseRejectedInterceptor(error: AxiosError) {
  return error;
}

instance.interceptors.response.use(responseFulfilledInterceptor, responseRejectedInterceptor);
