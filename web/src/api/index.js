import { api } from 'api/axios';

async function predictC02(req) {
  const { data } = await api.post('/', req);
  return data;
}
const Api = {
  predictC02,
};

export default Api;
