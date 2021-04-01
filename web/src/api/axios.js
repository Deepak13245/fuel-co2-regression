import Axios from 'axios';
import CONFIG from 'config';
import { loaderInterceptor } from 'api/interceptors';

export const api = Axios.create({
  baseURL: CONFIG.HOST,
  timeout: 60000,
});

loaderInterceptor(api);
