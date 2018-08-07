import * as types from '../config/types';

const initialState = {
  email: null,
  password: null,
  name: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        email: action.email,
        password: action.password,
      };

    case types.USER_REGISTER:
      return {
        ...state,
        email: action.email,
        password: action.password,
        name: action.name,
      };

    default:
      return state;
  }
};

export default reducer;
