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

export const changeNotification = notification => {
  return {
    type: 'SET-NOTIFICATION',
    message: 'you voted ' + notification
  }
}

export const stopNotification = () => {
  return {
    type: 'STOP-NOTIFICATION'
  }
}

export default notificationReducer

/*
const Anecdotes = ( {store} ) => {
  const handleVote = id => {
    store.dispatch(voteFor(id))
    const anecdote = store.getState().anecdotes.find(a => a.id === id)
    .content
    store.dispatch(changeNotification(anecdote))
    
  }*/