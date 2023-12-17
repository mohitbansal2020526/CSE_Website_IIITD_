import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import CardGrid from "../../components/Card/CardGrid"

const PhDStudents = props => {
  const cards = props.data["allPhdCsv"]["nodes"].map(x => ({
    name: x["Name"],
    website: x["Your_Personal_Website_Link"]
      ? x["Your_Personal_Website_Link"]
      : x["You_LinkedIn_url"],
    image: x["Photo"] ? x["Photo"].replace("open", "uc") : null,
    // image: "https://iiitd.ac.in/sites/default/files/images/admin/staff/pritipat.jpg",
    jobTitle: x["Research_Interests"],
    additionalInfo:
      "Advisor: " +
      x["Research_Advisor_Name"] +
      "\n\nEmail: " +
      x["Email_Address"], // + "\nProjects: " + x["Titles_of_any_two_research_project_done__seperate_them_by_semicolon_"]
  }))
  return (
    <Layout mainClass="faculty" title="Ph.D. Students">
      <h3 className="section-heading">Ph.D. Students</h3>
      <CardGrid data={cards} type="staff" />
    </Layout>
  )
}

export default PhDStudents
export const query = graphql`
  {
    allPhdCsv(sort: { fields: Name }) {
      nodes {
        Email_Address
        Name
        You_LinkedIn_url
        Titles_of_any_two_research_project_done__seperate_them_by_semicolon_
        Research_Advisor_Name
        Photo
        Your_Personal_Website_Link
        Research_Interests
      }
    }
  }
`
