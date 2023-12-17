import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import MasonryCardGrid from "../../components/Card/MasonryCardGrid"
import { filterByType } from "../../helpers/categorize"

const Alumni = ({ data }) => {
  data = data.allAlumniCsv.nodes
  //       mainClass for css, and title for page title
  return (
    <Layout mainClass="staff" title="Alumni">
      <h3 className="section-heading">Alumni</h3>
      Our esteemed Alumni
      <MasonryCardGrid data={filterByType(data, "Staff")} type="staff" />
    </Layout>
  )
}
export const query = graphql`
  {
    allAlumniCsv {
      nodes {
        DBLP
        DOJ
        DOR
        GoogleScholar
        additionalInfo
        education
        id
        image
        jobTitle
        name
        type
        website
      }
    }
  }
`
export default Alumni
