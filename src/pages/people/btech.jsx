import { graphql } from "gatsby"
import React from "react"
import { Table } from "react-bootstrap"
import Layout from "../../components/Layout"

const BTechStudents = props => {
  let count = 1
  return (
    <Layout mainClass="students" title="Students">
      <h3 className="section-heading">B.Tech. Students</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email Address</th>
            <th>Batch</th>
            <th>Research Interests</th>
            <th>LinkedIn</th>
          </tr>
        </thead>
        <tbody>
          {props.data["allBtechCsv"]["nodes"].map(x => (
            <tr>
              <td>{count++}</td>
              <td>{x["Name"]}</td>
              <td>{x["Email_Address"]}</td>
              <td>
                {x["BTech_Batch_info"].includes("24")
                  ? 2024
                  : x["BTech_Batch_info"].includes("23")
                  ? 2023
                  : x["BTech_Batch_info"].includes("22")
                  ? 2022
                  : x["BTech_Batch_info"].includes("21")
                  ? 2021
                  : x["BTech_Batch_info"].includes("2020")
                  ? 2020
                  : x["BTech_Batch_info"].includes("19")
                  ? 2019
                  : x["BTech_Batch_info"].includes("19")
                  ? 2018
                  : x["Btech_Batch_info"]
                  ? 2017
                  : ""}
              </td>
              <td>
                {x["Research_Interests"]}
                {x[
                  "Titles_of_any_two_research_project_done__separated_by_commas_"
                ] ? (
                  <>
                    <br />
                    <br />
                    <strong>{"Projects: "}</strong>{" "}
                    {
                      x[
                        "Titles_of_any_two_research_project_done__separated_by_commas_"
                      ]
                    }
                  </>
                ) : null}
              </td>
              <td>
                <a href={x["You_LinkedIn_url"]} target="_blank">
                  {x["You_LinkedIn_url"]}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  )
}

export default BTechStudents
export const query = graphql`
  {
    allBtechCsv {
      nodes {
        BTech_Batch_info
        Email_Address
        Name
        You_LinkedIn_url
        Titles_of_any_two_research_project_done__separated_by_commas_
        Research_Interests
      }
    }
  }
`
