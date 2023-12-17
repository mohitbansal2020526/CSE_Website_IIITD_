import React from "react"
import { Carousel, Col, Image, Row } from "react-bootstrap"
import Layout from "../components/Layout"
import MasonryCardGrid from "../components/Card/MasonryCardGrid"
import { getDataByCategory } from "../helpers/categorize"
import { graphql } from "gatsby"
import banner1 from "../assets/images/banner1.jpg"
import banner2 from "../assets/images/banner2.png"
import banner3 from "../assets/images/banner3.png"
import "./styles.css"
import iiitdlogo from "../assets/images/iiitd_footer_color.png"

export default function Home({ data }) {
  data = data.allCardsJson.edges.map(element => element.node)
  return (
    <Layout mainClass="homepage" title="Homepage">
      <Row>
        <Col>
          <h1 className="main-heading">
            Department of
            <br />
            <p className="emphasis"> C</p>
            omputer <p className="emphasis">S</p>
            cience and <p className="emphasis">E</p>
            ngineering
          </h1>
          <Image src={iiitdlogo} width="95%" />
        </Col>

        <Col>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={banner1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={banner2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={banner3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <MasonryCardGrid data={getDataByCategory(["Homepage"], data)} />
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
