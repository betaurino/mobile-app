import { URL } from '../constants/api';

export const login = (data) => {
  const LOGIN = `${URL}/login`;

  const { email, password } = data;

  return fetch(LOGIN, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }).then(res => res.json())
    .catch(err => console.log(err));
}

export const create = (data) => {
  const CREATE = `${URL}/user`;

  const { name, email, password } = data;

  return fetch(CREATE, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  }).then(res => res.json())
    .catch(err => console.log(err));
}
