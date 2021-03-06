const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const INIT 		= 'INIT';

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, INIT].forEach(type => res[type] = `${base}_${type}`);
  return res;
}

// Login events
export const LOGIN = createRequestTypes('LOGIN');
export const REGISTER = createRequestTypes('REGISTER');
export const LOGOUT = 'LOGOUT'; // logout is always success

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
