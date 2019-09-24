import React from 'react'
import { connect } from 'react-redux'


const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (props.notification.status === 'on') {
  return (
    <div style={style}>
        {props.notification.message}
    </div>
  )
} 
 else {
  return (
    <div></div>
  )
}
}

const mapStateToProps = state => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(
  mapStateToProps,
)(Notification)

export default ConnectedNotification