import React from 'react'
import PropTypes from 'prop-types'
import { NotificationWrapper, FlexWrapper, SocialMediaWrapper } from './styles'

export const Notification = props => {
  if (!props.visible) return null
  return (
    <NotificationWrapper>
      <span className="close" onClick={props.onClick}>
        x
      </span>
      <h4>Contact Info:</h4>
      <FlexWrapper direction={'column'}>
        <span>Email: southon55@gmail.com</span>
        <br />
        <SocialMediaWrapper>
          <div>
            <a href="https://github.com/southojere" target="_blank">
              Github{' '}
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/jeremy-southon-559a93176/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </SocialMediaWrapper>
      </FlexWrapper>
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
