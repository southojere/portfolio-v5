import React from 'react'
import PropTypes from 'prop-types'
import { NotificationWrapper } from './styles'

export const Notification = props => {
  if (!props.visible) return null
  return (
    <NotificationWrapper>
      <span className="close" onClick={props.onClick}>
        x
      </span>
      <h4>Contact:</h4>
      <span>Email: southon55@gmail.com</span>
    </NotificationWrapper>
  )
}

Notification.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
}
Notification.defaultProps = {
  onClick: () => {},
}
