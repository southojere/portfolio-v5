import styled from 'styled-components'

const NotificationWrapper = styled.div`
  position: fixed;
  right: -50vw;
  top: -100vh;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  background-color: white;
  margin: 1rem;
  z-index: 100;
  h4 {
    margin: 0;
  }

  .close {
    position: absolute;
    right: 10px;
    top: 0;
    cursor: pointer;
  }

  -webkit-animation: ease-in-out forwards;
  -webkit-animation-name: comeIn;
  -webkit-animation-duration: 1s;
  @keyframes comeIn {
    0% {
      right: -50vw;
      top: 0;
    }
    100% {
      right: 0;
      top: 0;
    }
  }
`

export { NotificationWrapper }
