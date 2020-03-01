import React from 'react'
import styled from 'styled-components'

const HeroWrapper = styled.div`
  width: calc(100% - 10vmin);
  margin: 0 auto;
  padding: 5vmin 0;
  display: flex;
  font-size:1.5rem;
`

export default ({ data }) => (
  <HeroWrapper>
    <div>
      <p>{data.shortBio  && data.shortBio.shortBio}</p>
    </div>
  </HeroWrapper>
)
