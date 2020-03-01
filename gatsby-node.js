const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    console.log('testing')
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const myProjects = path.resolve('./src/templates/project/index.js')
    resolve(
      graphql(
        `
          {
            allContentfulProject {
              nodes {
                title
                contentful_id
                slug
              }
            }
          }
        `
      ).then(result => {
          console.log(result)
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        console.log('creating project pages...')
        const projects = result.data.allContentfulProject.nodes
        projects.forEach((project, index) => {
            console.log('creating page for ', project.slug)
          createPage({
            path: `/project/${project.slug}/`,
            component: myProjects,
            context: {
              slug: project.slug,
            },
          })
        })
      })
    )
  })
}
