import * as types from '../config/types';

export const PUTO = 'PUTO';

export const loginUser = (email, password) => ({
  type: types.USER_LOGIN,
  email,
  password,
});

export const registerUser = (email, password, genre) => ({
  type: types.USER_REGISTER,
  email,
  password,
  genre,
});
