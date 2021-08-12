import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
  timeout: 5000,
});

export default axiosInstance;
