import * as action from './actions'
import * as state from './states'

export const init = () => {
  return {
    type: action.AUTH_INIT,
    payload: {}
  }
}

export const getUser = () => {
  return {
    type: action.AUTH_GET_USER
  }
}

export const signUp = (username, password) => {
  return {
    type: action.AUTH_SIGN_UP,
    payload: {
      username,
      password
    }
  }
}

export const signIn = (username, password, code) => {
  return {
    type: action.AUTH_SIGN_IN,
    payload: {
      username,
      password,
      code
    }
  }
}

export const signOut = () => {
  return {
    type: action.AUTH_SIGN_OUT
  }
}

export const forgotPassword = username => {
  return {
    type: action.AUTH_FORGOT_PASSWORD,
    payload: {
      username
    }
  }
}

export const changePassword = (username, code, password) => {
  return {
    type: action.AUTH_CHANGE_PASSWORD,
    payload: {
      username,
      code,
      password
    }
  }
}

export const completeNewPassword = (username, password) => {
  return {
    type: action.AUTH_COMPLETE_NEW_PASSWORD,
    payload: {
      username,
      password
    }
  }
}

const ACTION_HANDLERS = {
  [action.AUTH_SET_STATE]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.AUTH_INIT]: (state, action) => {
    return { ...state, ...action.payload }
  }
}

let defaultState = {
  isSignedIn: state.AUTH_UNKNOWN
}

export const reducer = (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
