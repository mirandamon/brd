import { UPDATE_ACTIVE_VIEW } from 'actions'

const currentPageReducer = (state = 'EXPLORE', action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_VIEW:
      return action.activeView
    default:
      return state
  }
}

export { currentPageReducer }
