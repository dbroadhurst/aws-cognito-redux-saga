import {
  authRegister,
  confirmation,
  authSignIn,
  getLocalUser,
  authSignOut,
  getSession,
  config
} from 'aws-cognito-promises'

import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import * as states from './states'

// auth is stateless. Each call to a auth action resets all state
let defaultState = {
  info: {},
  error: {},
  isSignedIn: states.AUTH_UNKNOWN,
  isConfirmed: states.AUTH_UNKNOWN,
  hasSignedUp: states.AUTH_UNKNOWN
}

function* signedIn() {
  try {
    yield call(getSession)
    let user = config.getUser()
    yield put({
      type: actions.AUTH_SET_STATE,
      payload: {
        ...defaultState,
        isSignedIn: states.AUTH_SUCCESS,
        isConfirmed: states.AUTH_SUCCESS,
        info: user
      }
    })
  } catch (e) {
    yield put({
      type: actions.AUTH_SET_STATE,
      payload: {
        ...defaultState,
        error: {}
      }
    })
  }
}

function* signUp(action) {
  try {
    yield call(authRegister, action.payload.username, action.payload.password)
    yield put({
      type: actions.AUTH_SET_STATE,
      payload: {
        ...defaultState,
        hasSignedUp: states.AUTH_SUCCESS
      }
    })
  } catch (e) {
    yield put({
      type: actions.AUTH_SET_STATE,
      payload: {
        ...defaultState,
        error: e
      }
    })
  }
}

function* signOut() {
  try {
    yield call(authSignOut)
    yield put({
      type: actions.AUTH_SET_STATE,
      payload: { isSignedIn: states.AUTH_FAIL }
    })
  } catch (e) {
    yield put({
      type: actions.AUTH_SET_STATE,
      payload: { error: e, isSignedIn: states.AUTH_FAIL }
    })
  }
}

function* signIn(action) {
  try {
    const { username, password, code } = action.payload

    if (code) {
      yield call(confirmation, username, code)
    }
    let user = yield call(authSignIn, username, password)
    user = yield call(getLocalUser)
    yield put({
      type: actions.AUTH_SET_STATE,
      payload: {
        isSignedIn: states.AUTH_SUCCESS,
        isConfirmed: states.AUTH_SUCCESS,
        info: user
      }
    })
  } catch (e) {
    if (e.code === 'UserNotConfirmedException') {
      yield put({
        type: actions.AUTH_SET_STATE,
        payload: { isConfirmed: states.AUTH_FAIL, error: e }
      })
    } else {
      yield put({
        type: actions.AUTH_SET_STATE,
        payload: { isConfirmed: states.AUTH_SUCCESS, error: e }
      })
    }
  }
}

function* init(action) {
  yield put({
    type: actions.AUTH_SET_STATE,
    payload: {
      ...defaultState
    }
  })
}

export default function* sagas() {
  yield takeLatest(actions.AUTH_SIGN_UP, signUp)
  yield takeLatest(actions.AUTH_SIGN_IN, signIn)
  yield takeLatest(actions.AUTH_SIGN_OUT, signOut)
  yield takeLatest(actions.AUTH_SIGNED_IN, signedIn)
  yield takeLatest(actions.AUTH_INIT, init)
}
