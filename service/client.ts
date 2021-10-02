import axios from 'axios';
import ApiConfig from '../config/api-config';

const apiClient = axios.create({
  baseURL: ApiConfig.BASE_URL,
});

export { apiClient };