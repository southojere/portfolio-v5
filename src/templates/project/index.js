import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from '../../components/layout'

import {
    ProjectPageWrapper,
    FlexWrapper,
    ProjectDescWrapper,
    ProjectImageWrapper,
    Headline,
    Links,
    Image,
    Tag,
} from './style'

class ProjectTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    const techUsed = project.techUsed ? project.techUsed : []

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={`${project.title} | ${siteTitle}`} />
          <ProjectPageWrapper>
            <div>
              <Headline>{project.title}</Headline>
              <div>
                {techUsed.map(tech => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
            <FlexWrapper>
              <ProjectDescWrapper>
                {project.desc && <p>{project.desc.desc}</p>}
                <Links>
                  {project.websiteUrl && (
                    <a href={project.websiteUrl} target={'__blank'}>
                      View Project
                    </a>
                  )}
                  <br />
                  {project.githubUrl && (
                    <a href={project.githubUrl} target={'__blank'}>
                      View Repo
                    </a>
                  )}
                </Links>
              </ProjectDescWrapper>
              <ProjectImageWrapper>
                {project.images.map(img => (
                  <Image key={img.title} alt={img.title} fluid={img.fluid} />
                ))}
              </ProjectImageWrapper>
            </FlexWrapper>
          </ProjectPageWrapper>
        </div>
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      websiteUrl
      githubUrl
      desc {
        desc
      }
      techUsed
      images {
        fluid(maxWidth: 2196, maxHeight: 1270, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
