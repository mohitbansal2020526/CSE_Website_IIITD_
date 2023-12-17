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
            <th>Roll No.</th>
            <th>Name</th>
            <th>Joining Year</th>
          </tr>
        </thead>
        <tbody>
          {props.data["allBtech2Csv"]["nodes"].map(x => (
            <tr>
              <td>{count++}</td>
              <td>{x["Roll_No"]}</td>
              <td>{x["Name"]}</td>
              <td>{x["Joining_Year"]}</td>
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
    allBtech2Csv {
      nodes {
        Joining_Year
        Name
        Roll_No
      }
    }
  }
`
