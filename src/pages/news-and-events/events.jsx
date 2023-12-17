import React from "react"
import { Tab, Tabs } from "react-bootstrap"
import Layout from "../../components/Layout"
import MasonryCardGrid from "../../components/Card/MasonryCardGrid"
import { graphql } from "gatsby"

const year = new Date().getFullYear()

const year_list = [
  year.toString(),
  (year - 1).toString(),
  (year - 2).toString(),
  (year - 3).toString(),
  (year - 4).toString(),
  (year - 5).toString(),
]

const Events = ({ data }) => {
  console.log(data)
  data = data.allCardsJson.edges.map(element => element.node)
  return (
    <Layout mainClass="events" title="Events">
      <h3 className="section-heading">Events</h3>

      <Tabs defaultActiveKey={year_list[0]} className="mb-3">
        <Tab eventKey={year_list[0]} title={year_list[0]}>
          <MasonryCardGrid
            data={data.filter(x => {
              return (
                x.date &&
                x.date.split("-")[0] === year_list[0] &&
                x["category"] &&
                x["category"].includes("Events")
              )
            })}
          />
        </Tab>
        <Tab eventKey={year_list[1]} title={year_list[1]}>
          <MasonryCardGrid
            data={data.filter(x => {
              return (
                x.date &&
                x.date.split("-")[0] === year_list[1] &&
                x["category"] &&
                x["category"].includes("Events")
              )
            })}
          />
        </Tab>
        <Tab eventKey={year_list[2]} title={year_list[2]}>
          <MasonryCardGrid
            data={data.filter(x => {
              return (
                x.date &&
                x.date.split("-")[0] === year_list[2] &&
                x["category"] &&
                x["category"].includes("Events")
              )
            })}
          />
        </Tab>
        <Tab eventKey={year_list[3]} title={year_list[3]}>
          <MasonryCardGrid
            data={data.filter(x => {
              return (
                x.date &&
                x.date.split("-")[0] === year_list[3] &&
                x["category"] &&
                x["category"].includes("Events")
              )
            })}
          />
        </Tab>
      </Tabs>
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
          date
          link
          image
        }
      }
    }
  }
`
export default Events
