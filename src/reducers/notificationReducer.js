const initialNotification = {
  message: "This is a notification"
}

const notificationReducer = (state = initialNotification, action) => {
  switch(action.type) {
    case 'SET-NOTIFICATION':
      return {
        message: action.message,
        status: 'on'
      }
    case 'STOP-NOTIFICATION':
      return {
        status: 'off'
      }
    default:
      return state
  }
}

export default notificationReducer
