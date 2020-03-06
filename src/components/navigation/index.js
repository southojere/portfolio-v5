import React from 'react'
import { Link } from 'gatsby'
import {
  FlexWrapper,
  MenuContainer,
  MenuItem,
  ArrowWrapper,
  SLink,
} from './style'
import { Notification } from '../notification';

const Arrow = () => (
  <ArrowWrapper>
    <span className="line"></span>
    <span className="head"></span>
  </ArrowWrapper>
)
export default ({ location }) => {
  const [visible, setVisible] = React.useState(false)
  const pathname = location.pathname
  console.log(pathname.includes('project'))
  return (
    <nav role="navigation">
    <Notification visible={visible} onClick={() => setVisible(!visible)}/>
      <FlexWrapper>
        <h2>
          <Link to={'/'}>Jeremy Southon</Link>
        </h2>
        <MenuContainer>
          <MenuItem>
            {pathname == '/' && <Arrow />}
            <SLink to={'/'}>home</SLink>
          </MenuItem>
          {pathname.includes('project') && (
            <MenuItem>
              <Arrow />
              work
            </MenuItem>
          )}
           <MenuItem onClick={() => setVisible(!visible)}>
              contact
            </MenuItem>
        </MenuContainer>
      </FlexWrapper>
    </nav>
  )
}
