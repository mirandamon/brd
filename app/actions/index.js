import { LOGIN, LOG_OUT, REGISTER } from './actions'

function login (authProvider) {
  return {
    type: LOGIN,
    authProvider
  }
}

function logout (authProvider) {
  return {
    type: LOG_OUT,
    authProvider
  }
}

function register (authProvider) {
  return {
    type: REGISTER,
    authProvider
  }
}

export {
  login,
  logout,
  register,
  LOGIN,
  LOG_OUT,
  REGISTER
}
