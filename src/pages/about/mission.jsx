import React from "react"
import { Image } from "react-bootstrap"
import Layout from "../../components/Layout"
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"
export default function mission() {
  return (
    <Layout mainClass="mission-vision" title="Mission and Vision">
      <h1 className="section-heading mx-1 mx-md-5 px-0 px-md-3">
        Mission and Vision
      </h1>
      <div className="mx-2 mx-md-5 px-0 px-md-5">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <Image
              className="zoom col-12 col-md-9 mx-auto d-flex"
              src={img1}
              rounded
              alt="Mission"
              fluid
            />
          </div>
          <div className="col-12 col-md-6 h-100 my-auto">
            <h3 style={{ color: "#3fada8" }}>Mission</h3>
            The Mission of the department is to be a world class department
            which:
            <ol>
              <li>
                To carry out advanced research and development in various areas
                of computer science as well as the application of computer and
                software technologies in different domain areas.
              </li>
              <li>
                To train and educate, at both undergraduate and postgraduate
                levels, engineers of outstanding ability who can become
                innovators and new product creators.
              </li>
            </ol>
          </div>
        </div>

        <hr />

        <div className="row my-2 py-2">
          <div className="col-12 col-md-6 mx-auto">
            <Image
              className="zoom col-12 col-md-9 mx-auto d-flex"
              src={img2}
              rounded
              alt="Mission"
              fluid
            />
          </div>
          <div className="col-12 col-md-6 h-100 my-auto">
            <h3 style={{ color: "#3fada8" }}>Vision</h3>
            The vision of the department is to be a world class department
            which:
            <ol>
              <li>
                Is globally respected for its research capability, with some
                research groups being considered as among the leaders globally
                and within the country.
              </li>
              <li>Has thriving UG and PG programs.</li>
              <li>Is socially relevant, globally linked and industry-facing</li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  )
}
