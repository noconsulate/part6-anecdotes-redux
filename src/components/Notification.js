import React from 'react'



const Notification = ({store}) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (store.getState().notification.status === 'on') {
  return (
    <div style={style}>
        {store.getState().notification.message}
    </div>
  )
} 
 else {
  return (
    <div></div>
  )
}
}



export default Notification