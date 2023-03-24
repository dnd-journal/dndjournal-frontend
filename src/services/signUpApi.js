import api from '../constants/api';

export async function signUp(body){
  const response = await api.post('/user/sign-up', body)

  return response.data;
}