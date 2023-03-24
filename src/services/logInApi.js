import api from '../constants/api';

export default async function logIn(body){
  const response = await api.post('/user/log-in', body);

  return response.data;
}