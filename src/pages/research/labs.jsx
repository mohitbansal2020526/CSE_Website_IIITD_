import React from "react"
import CardGrid from "../../components/Card/CardGrid"
import Layout from "../../components/Layout"
import { getDataByCategory } from "../../helpers/categorize"
import { graphql } from "gatsby"

const Labs = ({ data }) => {
  data = data.allCardsJson.nodes
  return (
    <>
      <Layout mainClass="labs" title="Labs">
        <h3 className="section-heading">Labs</h3>
        <CardGrid temp data={getDataByCategory(["Labs"], data)} />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allCardsJson(
      sort: { fields: title }
      filter: { category: { in: "Labs" } }
    ) {
      nodes {
        category
        description
        title
        subtitle
        link
        image
      }
    }
  }
`

export default Labs
