import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


const Project = ({ project }) => {
  return (
    <div>
      <h3 style={{fontSize: '1.5em'}}>
        <Link to={`/project/${project.slug}`}>{project.title}</Link>
      </h3>
      {project.images && (
        <Img alt={project.title} fluid={project.thumbnail.fluid} />
      )}
    </div>
  )
}

export default Project
