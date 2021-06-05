import { api } from 'api/axios';

async function predictC02(req) {
  const { data } = await api.post('/', req);
  return data;
}

async function predictRainfall(req) {
  const { data } = await api.post('/rainfall', req);
  return data;
}
const Api = {
  predictC02,
  predictRainfall,
};

export default Api;
