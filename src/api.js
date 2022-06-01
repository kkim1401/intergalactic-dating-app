import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';
const api = axios.create({
  baseURL: BASE_URL,
});

function list() {
  return api.get('/character').then((res) => res.data);
}
list.queryKey = 'list';

function pick({ id }) {
  return api.get(`/character/${id}`).then((res) => res.data);
}
pick.queryKey = 'pick';

export { list, pick };
