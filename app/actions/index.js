import { LOGIN, LOG_OUT, REGISTER } from './login'
import { UPDATE_ACTIVE_VIEW } from './currentPage'

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

function updateActiveView (activeView) {
  return {
    type: UPDATE_ACTIVE_VIEW,
    activeView
  }
}

export {
  login,
  logout,
  register,
  updateActiveView,
  LOGIN,
  LOG_OUT,
  REGISTER,
  UPDATE_ACTIVE_VIEW
}
