import * as action from './actions'

export const init = () => {
  return {
    type: action.AUTH_INIT,
    payload: {}
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

export const signedIn = () => {
  return {
    type: action.AUTH_SIGNED_IN
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

let defaultState = {}

export const reducer = (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
