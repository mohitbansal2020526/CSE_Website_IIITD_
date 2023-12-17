import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const ProspectiveStudents = () => {
  return (
    <Layout title="Prospective Students">
      <h3 className="section-heading">Prospective Students</h3>

      <h4>Admissions</h4>
      <ul>
        <li>
          <Link to={"https://www.iiitd.ac.in/admission/btech/2022"}>
            B.Tech. Admissions
          </Link>
        </li>
        <li>
          <Link to={"https://www.iiitd.ac.in/admission/mtech/2023"}>
            M.Tech. Admissions
          </Link>
        </li>
        <li>
          <Link
            to={
              "https://www.iiitd.ac.in/admission/mtech/2023/cse-research-details"
            }
          >
            M.Tech.(Research) Admissions
          </Link>
        </li>
        <li>
          <Link to={"https://www.iiitd.ac.in/admission/phd"}>
            Ph.D. Admissions
          </Link>
        </li>
      </ul>

      <h4>Current Students</h4>
      <ul>
        <li>
          <Link to={"/people/btech2"}>B.Tech. Students</Link>
        </li>
        <li>
          <Link to={"/people/mtech"}>M.Tech. Students</Link>
        </li>
        <li>
          <Link to={"/people/phd"}>Ph.D. Students</Link>
        </li>
      </ul>
    </Layout>
  )
}

export default ProspectiveStudents
