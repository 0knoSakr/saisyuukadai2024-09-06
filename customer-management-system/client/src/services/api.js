import Axios from 'axios';
const api = Axios.cleate({
  baseURL: 'http://localhost:3001/api',
});

export default api;
