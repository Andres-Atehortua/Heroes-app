import { authTypes } from '../types/types';

export const authReducer = (user = {}, action) => {
  switch (action.type) {
    case authTypes.LOGIN:
      return { ...action.payload, logged: true };

    case authTypes.LOGOUT:
      return { logged: false };

    default:
      return user;
  }
};
