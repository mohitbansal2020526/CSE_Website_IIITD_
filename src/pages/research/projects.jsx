import React from "react"
import Layout from "../../components/Layout"
import MasonryCardGrid from "../../components/Card/MasonryCardGrid"
import { getDataByCategory } from "../../helpers/categorize"
import { graphql } from "gatsby"

const Projects = ({ data }) => {
  data = data.allCardsJson.edges.map(element => element.node)
  return (
    <Layout mainClass="projects" title="Projects">
      <h3 className="section-heading">Projects</h3>
      <MasonryCardGrid data={getDataByCategory(["Projects"], data)} />
    </Layout>
  )
}

export const query = graphql`
  {
    allCardsJson {
      edges {
        node {
          category
          description
          title
          subtitle
          link
          image
        }
      }
    }
  }
`

export default Projects
