import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
  timeout: 5000,
});

const headersConfig = {
  Accept: 'application/json',
  Authorization: `${process.env.REACT_APP_API_KEY}`,
};

export default class ApiService {
  static async getAll(request) {
    try {
      const response = await axiosInstance.get(request, {
        headers: headersConfig,
      });
      return response.data.docs;
    } catch (e) {
      console.error(e);
    }
    return request;
  }
}
