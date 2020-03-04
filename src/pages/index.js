import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Project from '../components/project-preview'
import styled from 'styled-components'
const Wrapper = styled.div`
  width: calc(100% - 10vmin);
  margin: 0 auto;
  padding: 5vmin 0;
`

const ProjectList = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5vmin;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
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

  filter: ${props => (props.active ? 'brightness(0.5)' : 'none')};

  :hover {
    filter: brightness(0.5);
  }
`

class RootIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFilter: 'featured',
    }
  }

  render() {
    const { selectedFilter } = this.state
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.nodes', [])
    const projectFilters = get(
      this,
      'props.data.contentfulFilters.filters.filters',
      []
    )
    const me = get(this, 'props.data.contentfulPerson', {})

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <Hero data={me} />
          <Wrapper>
            <Headline>My Projects</Headline>
            <div>
              {projectFilters.map(tag => (
                <Tag
                  key={tag}
                  onClick={() => this.setState({ selectedFilter: tag })}
                  active={selectedFilter === tag}
                >
                  {tag}
                </Tag>
              ))}
            </div>
            <ProjectList>
              {projects
                .filter(project => {
                  if (selectedFilter.toLowerCase() == 'all') return true
                  const projectFilters = project.metaData
                  if (projectFilters && projectFilters.filters) {
                    for (const filter of projectFilters.filters) {
                      if (filter.toLowerCase() === selectedFilter.toLowerCase())
                        return true
                    }
                    return false
                  }
                })
                .map(project => {
                  return (
                    <li key={project.title}>
                      <Project project={project} />
                    </li>
                  )
                })}
            </ProjectList>
          </Wrapper>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulFilters {
      filters {
        filters
      }
    }
    contentfulPerson {
      id
      name
      shortBio {
        shortBio
      }
    }
    allContentfulProject {
      nodes {
        id
        title
        slug
        metaData {
          filters
        }
        desc {
          desc
        }
        metaData {
          filters
        }
        thumbnail {
          fluid(maxWidth: 2196, maxHeight: 1270, resizingBehavior: FILL) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        images {
          fluid(maxWidth: 400, maxHeight: 210, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`
