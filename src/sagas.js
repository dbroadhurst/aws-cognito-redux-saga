import * as auth from 'aws-cognito-promises'

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
  hasChangedPassword: states.AUTH_UNKNOWN,
  passwordResetRequired: states.AUTH_UNKNOWN
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
    let user = auth.config.getUser()
    let session = yield call(auth.getSession)
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
    yield call(auth.register, action.payload.username, action.payload.password)
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
    yield call(auth.signOut)
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
      yield call(auth.confirmation, username, code)
    }
    yield call(auth.signIn, username, password)
    let user = auth.config.getUser()
    let session = yield call(auth.getSession)

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
    } else if (e.code === 'PasswordResetRequiredException') {
      yield put({
        type: actions.AUTH_SET_STATE,
        payload: { passwordResetRequired: states.AUTH_SUCCESS, error: e }
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
    yield call(auth.forgotPassword, username)
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
    yield call(auth.changePassword, username, code, password)
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

function* completeNewPassword(action) {
  try {
    console.log(action)
    const { username, password } = action.payload
    yield call(auth.completeNewPassword, username, password)
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
  yield takeLatest(actions.AUTH_COMPLETE_NEW_PASSWORD, completeNewPassword)
}
