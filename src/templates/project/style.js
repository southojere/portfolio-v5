import styled from 'styled-components'
import Img from 'gatsby-image'

const ProjectPageWrapper = styled.div`
  position: relative;
  width: calc(100% - 10vmin);
  margin: 0 auto;
  padding: 5vmin 0;
`

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ProjectDescWrapper = styled.div`
  width: 50%;
  margin-right: 3rem;
  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
  }
`

const ProjectImageWrapper = styled.div`
  /* position: absolute;
  right: 0; */
  width: 50%;
  @media (max-width: 768px) {
    /* position: relative; */
    width: 100%;
  }
`
const Headline = styled.h2`
  padding: 0 0 0.4em 0;
  margin: 0 0 0 0;
  border-bottom: 1px solid #ddd;
`

const Tag = styled.p`
  color: #a0a0a0;
  text-decoration: none;
  display: inline-block;
  padding: 0.33333rem 0.5rem;
  line-height: 1;
  border-radius: 2px;
  border: 1px solid #a0a0a0;
  margin-right: 0.5em;
  margin-bottom: 0px;
`

const Image = styled(Img)`
  margin-top: 1rem;
`

const Links = styled.div`
  margin: 1rem 0;
`

export {
    ProjectPageWrapper,
    ProjectDescWrapper,
    ProjectImageWrapper,
    FlexWrapper,
    Headline,
    Tag,
    Image,
    Links,
}