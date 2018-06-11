import React from 'react';
import { take, put, call, fork, select } from 'redux-saga/effects'
import * as types from '../actions/actionTypes';
import config from '../config';
import { registerSuccess, registerFailure } from '../actions/registerActions'

function registerCall({email, password}) {
  return new Promise((resolve, reject) => {
    fetch(`${config.url}/token`, {
      credentials: 'include',
      method: 'post',
      headers: config.formHeaders,
      body: `grant_type=password&username=${email}&password=${password}`
    })
      .then(response => response.json())
      .then((response) => {
        console.log(response)
        if(response.error) {
          reject({status: response.error_description || response.error});
        }
        else {
          resolve(response);
        }
      })
      .catch(error => {
        reject({status: 'invalid registration value.'});
      });
  })
}

function *watchRegisterRequest() {
  while(true) {
    const {
			emailAddress,
      password,
      passwordConfirm,
      firstName,
      lastName,
      phoneNumber,
		} = yield take(types.REGISTER.REQUEST);

    try {
      const payload = {
        emailAddress,
        password,
        passwordConfirm,
        firstName,
        lastName,
        phoneNumber,
      }
      const response = yield call(registerCall, payload);

      yield put(registerSuccess(response));
      console.log('SAGA REGISTER SUCCESS: ', response);
    } catch (err) {
      console.log('SAGA REGISTER ERR: ', err);
      yield put(registerFailure(err.status));
    }
  }
}


export default function* root() {
  yield fork(watchRegisterRequest);
}
