import {
  authRegister,
  confirmation,
  authSignIn,
  authSignOut,
  getSession,
  authForgotPassword,
  authChangePassword,
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
  hasSignedUp: states.AUTH_UNKNOWN,
  hasSentCode: states.AUTH_UNKNOWN,
  hasChangedPassword: states.AUTH_UNKNOWN
}

function* init(action) {
  yield put({
    type: actions.AUTH_SET_STATE,
    payload: {
      ...defaultState
    }
  })
}

function* getUser() {
  try {
    let user = config.getUser()
    let session = yield call(getSession)
    yield put({
      type: actions.AUTH_SET_STATE,
      payload: {
        ...defaultState,
        isSignedIn: states.AUTH_SUCCESS,
        isConfirmed: states.AUTH_SUCCESS,
        info: { username: user.username, ...session }
      }
    })
  } catch (e) {
    yield put({
      type: actions.AUTH_SET_STATE,
      payload: {
        ...defaultState,
        isSignedIn: states.AUTH_FAIL,
        error: e
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
    yield call(authSignIn, username, password)
    let user = config.getUser()
    let session = yield call(getSession)

    yield put({
      type: actions.AUTH_SET_STATE,
      payload: {
        isSignedIn: states.AUTH_SUCCESS,
        isConfirmed: states.AUTH_SUCCESS,
        info: { username: user.username, ...session }
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

function* forgotPassword(action) {
  try {
    const { username } = action.payload
    yield call(authForgotPassword, username)
    yield put({
      type: actions.AUTH_SET_STATE,
      payload: {
        ...defaultState,
        hasSentCode: states.AUTH_SUCCESS
      }
    })
  } catch (e) {
    yield put({
      type: actions.AUTH_SET_STATE,
      payload: {
        ...defaultState,
        error: e,
        isSignedIn: states.AUTH_FAIL
      }
    })
  }
}

function* changePassword(action) {
  try {
    const { username, code, password } = action.payload
    yield call(authChangePassword, username, code, password)
    yield put({
      type: actions.AUTH_SET_STATE,
      payload: {
        ...defaultState,
        hasChangedPassword: states.AUTH_SUCCESS
      }
    })
  } catch (e) {
    yield put({
      type: actions.AUTH_SET_STATE,
      payload: {
        ...defaultState,
        error: e,
        isSignedIn: states.AUTH_FAIL
      }
    })
  }
}

export default function* sagas() {
  yield takeLatest(actions.AUTH_INIT, init)
  yield takeLatest(actions.AUTH_GET_USER, getUser)
  yield takeLatest(actions.AUTH_SIGN_UP, signUp)
  yield takeLatest(actions.AUTH_SIGN_IN, signIn)
  yield takeLatest(actions.AUTH_SIGN_OUT, signOut)
  yield takeLatest(actions.AUTH_FORGOT_PASSWORD, forgotPassword)
  yield takeLatest(actions.AUTH_CHANGE_PASSWORD, changePassword)
}
