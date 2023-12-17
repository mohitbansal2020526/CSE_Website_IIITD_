import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import MasonryCardGrid from "../../components/Card/MasonryCardGrid"
import { filterByType } from "../../helpers/categorize"

const Staff = ({ data }) => {
  data = data.allStaffCsv.nodes
  return (
    <Layout mainClass="staff" title="Staff">
      <h3 className="section-heading">Staff</h3>
      <MasonryCardGrid data={filterByType(data, "Staff")} type="staff" />
    </Layout>
  )
}
export const query = graphql`
  {
    allStaffCsv {
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
export default Staff
