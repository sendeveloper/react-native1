import * as types from './actionTypes';

export function registerRequest(email, password) {
  return {
    type: types.REGISTER.REQUEST,
		emailAddress,
    password,
    passwordConfirm,
    firstName,
    lastName,
    phoneNumber,
  }
}

export function registerSuccess(payload) {
  return {
    type: types.REGISTER.SUCCESS,
    ...payload
  }
}

export function registerFailure(err) {
  return {
    type: types.REGISTER.FAILURE,
    err,
  }
}
