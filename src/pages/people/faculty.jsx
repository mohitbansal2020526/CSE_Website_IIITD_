import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import CardGrid from "../../components/Card/CardGrid"
import { filterByType } from "../../helpers/categorize"

const Faculty = ({ data }) => {
  data = data.allStaffCsv.nodes
  return (
    <Layout mainClass="faculty" title="Faculty">
      <h3 className="section-heading">Faculty</h3>
      <CardGrid data={filterByType(data, "Faculty")} type="staff" />
      <h3 className="section-heading">Visiting Faculty</h3>
      <CardGrid data={filterByType(data, "Visiting Faculty")} type="staff" />
    </Layout>
  )
}

export const query = graphql`
  {
    allStaffCsv(sort: { fields: name }) {
      nodes {
        additionalInfo
        education
        id
        image
        jobTitle
        name
        type
        website
        GoogleScholar
        DBLP
      }
    }
  }
`
export default Faculty

// export default function About() {
//   return (
//     <Layout mainClass="about" title="About">
//       <p className="section-text">
//       <a href="https://lh3.googleusercontent.com/drive-viewer/AAOQEOQqYSIaQ1m2I9oXxpuSdsrQayT3-kpnumYYPJqpFz4xhCTIw-5C1zg0P1ftMCR9S4l8c8WK--qPNd_siZhFZbP0gDU0UA=s1600">Click here</a> to download the list of all the faculty members for AY 2022-2023.
//       </p>
//     </Layout>
//   )
// }
