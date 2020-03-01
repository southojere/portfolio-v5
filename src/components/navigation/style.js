
import styled from 'styled-components'

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 10vmin);
  margin: 0 auto;
  h2 {
    text-decoration: underline;
    line-height: 34px;
  }

`

const MenuContainer = styled.ul`
  display: flex;
  flex: wrap row;
  list-style: none;

  > :not(:last-child) {
    margin-right: 1rem;
  }
`

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size:21px;
  :hover {
      text-decoration: underline;
  }
`

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 6px;

  .line {
    display: block;
    width: 10px;
    height: 2px;
    background-color: black;
  }

  .head {
    display: block;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 10px solid #ff4c5a;

    animation: example 0.5s ease infinite alternate;

    @keyframes example {
      from {
        transform: translateX(-3px);
      }
      to {
        transform: translateX(2px);
      }
    }
  }
`

export {
    FlexWrapper,
    MenuContainer,
    MenuItem,
    ArrowWrapper,
}