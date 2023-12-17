import axios from "axios"
import React from "react"
import { ProgressBar, Tab, Tabs } from "react-bootstrap"
import CountUp from "react-countup"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import MasonryCardGrid from "../../components/Card/MasonryCardGrid"
import { heading } from "./publications.module.css"

class Publications extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data.allCardsJson.nodes,
      professors: props.data["allStaffCsv"]["nodes"],
      loadedCount: 1,
      conferences: 0,
      journals: 0,
    }
    this.year = new Date().getFullYear()
  }

  componentDidMount() {
    for (const prof of this.state.professors) {
      const joinDate = prof["DOJ"]
      const leaveDate = prof["DOR"]

      joinDate = joinDate.toString()
      if (joinDate.length < 4) joinDate = "20" + joinDate.split("-")[2]
      if (leaveDate && leaveDate !== "")
        leaveDate = "20" + leaveDate.split("-")[2]
      else leaveDate = (this.year + 10).toString()

      joinDate = "20" + joinDate.split("-")[2]

      axios.get("https://dblp.org/pid/" + prof["DBLP"] + ".xml").then(res => {
        const parser = require("xml2js")
        parser.parseString(res.data, (err, rest) => {
          rest = rest["dblpperson"]["r"]

          rest = rest
            .map(x =>
              this.parse(
                x,
                joinDate,
                leaveDate,
                this.state.professors,
                prof["name"]
              )
            )
            .filter(x => {
              return x !== {}
            })

          this.setState(prevState => ({
            data: [...rest, ...prevState.data],
            loadedCount: prevState.loadedCount + 1,
          }))
        })
      })
    }
  }

  parse(element, joinDate, leaveDate, pl, nm) {
    const type = Object.keys(element)[0]

    element = element[type][0]

    if (element["year"][0] < joinDate || element["year"][0] > leaveDate)
      return {}

    if (type !== "inproceedings" && type !== "article") return {}

    const result = {}
    result["date"] = element["year"][0] + "-02-02"
    result["subtitle"] = ""

    let author_final = ""
    if (element.author !== undefined)
      for (const temp of element.author)
        author_final = author_final + temp["_"] + ", "

    for (const pln of pl) {
      if (author_final.includes(pln["name"])) {
        if (pln["name"] != nm) return {}
        else break
      }
    }

    author_final = author_final.slice(0, author_final.length - 2)

    result["description"] = author_final.replace(/[0-9]/g, "")
    result["title"] = element.title[0]

    if (typeof result["title"] !== "string") return {}

    if (element["ee"]) {
      if (element["ee"][0]["_"]) result["link"] = element["ee"][0]["_"]
      else result["link"] = element["ee"][0]
    } else if (element.url)
      result["link"] = "https://dblp.org/" + element.url[0]
    else if (element["$"].key)
      result["link"] = "https://dblp.org/rec/" + element["$"].key

    result["category"] = ["Publications"]
    if (element.journal) result["subtitle"] += element.journal + " "
    if (element.booktitle) result["subtitle"] += element.booktitle + " "
    if (element.year) result["subtitle"] += element.year + " "

    if (
      result["subtitle"].includes("CoRR") ||
      result["subtitle"].includes("ePrint") ||
      result["subtitle"].includes("Editor") ||
      result["subtitle"].includes("editor")
    )
      return {}

    if (type === "inproceedings")
      this.setState(prevState => ({
        conferences: prevState.conferences + 1,
      }))

    if (type === "article")
      this.setState(prevState => ({
        journals: prevState.journals + 1,
      }))

    return result
  }

  render() {
    if (this.state.loadedCount < this.state.professors.length)
      return (
        <Layout mainClass="publications" title="Publications">
          {"Loading"}
          <ProgressBar
            animated
            label={Math.floor(
              ((this.state.loadedCount + 1) * 100) /
                this.state.professors.length
            )}
            now={
              ((this.state.loadedCount + 1) * 100) /
              this.state.professors.length
            }
          />
        </Layout>
      )
    else {
      const year_list = [
        this.year.toString(),
        (this.year - 1).toString(),
        (this.year - 2).toString(),
        (this.year - 3).toString(),
        (this.year - 4).toString(),
        (this.year - 5).toString(),
        (this.year - 6).toString(),
        (this.year - 7).toString(),
        (this.year - 8).toString(),
        (this.year - 9).toString(),
        (this.year - 10).toString(),
      ]
      return (
        <Layout mainClass="publications" title="Publications">
          <h1 className="section-heading">Publications</h1>
          <div className={"float-right text-end"}>
            <div className="h4" style={{ color: "#3fada8" }}>
              <strong>Statistics</strong>
            </div>{" "}
            <br />
            <div className={heading}>
              Conference Papers:{" "}
              <CountUp
                duration={4}
                end={this.state.conferences}
                useEasing={true}
              />
              <br />
              Journal Articles:{" "}
              <CountUp
                duration={4}
                end={this.state.journals}
                useEasing={true}
              />
            </div>
          </div>

          <Tabs defaultActiveKey={year_list[0]} className="mb-3">
            <Tab eventKey={year_list[0]} title={year_list[0]}>
              <MasonryCardGrid
                data={this.state.data.filter(x => {
                  return (
                    x.date &&
                    x.date.split("-")[0] === year_list[0] &&
                    x["category"].includes("Publications")
                  )
                })}
              />
            </Tab>
            <Tab eventKey={year_list[1]} title={year_list[1]}>
              <MasonryCardGrid
                data={this.state.data.filter(x => {
                  return (
                    x.date &&
                    x.date.split("-")[0] === year_list[1] &&
                    x["category"].includes("Publications")
                  )
                })}
              />
            </Tab>
            <Tab eventKey={year_list[2]} title={year_list[2]}>
              <MasonryCardGrid
                data={this.state.data.filter(x => {
                  return (
                    x.date &&
                    x.date.split("-")[0] === year_list[2] &&
                    x["category"].includes("Publications")
                  )
                })}
              />
            </Tab>
            <Tab eventKey={year_list[3]} title={year_list[3]}>
              <MasonryCardGrid
                data={this.state.data.filter(x => {
                  return (
                    x.date &&
                    x.date.split("-")[0] === year_list[3] &&
                    x["category"].includes("Publications")
                  )
                })}
              />
            </Tab>
            <Tab eventKey={year_list[4]} title={year_list[4]}>
              <MasonryCardGrid
                data={this.state.data.filter(x => {
                  return (
                    x.date &&
                    x.date.split("-")[0] === year_list[4] &&
                    x["category"].includes("Publications")
                  )
                })}
              />
            </Tab>
            <Tab eventKey={year_list[5]} title={year_list[5]}>
              <MasonryCardGrid
                data={this.state.data.filter(x => {
                  return (
                    x.date &&
                    x.date.split("-")[0] === year_list[5] &&
                    x["category"].includes("Publications")
                  )
                })}
              />
            </Tab>
            <Tab eventKey={year_list[6]} title={year_list[6]}>
              <MasonryCardGrid
                data={this.state.data.filter(x => {
                  return (
                    x.date &&
                    x.date.split("-")[0] === year_list[6] &&
                    x["category"].includes("Publications")
                  )
                })}
              />
            </Tab>
            <Tab eventKey={year_list[7]} title={year_list[7]}>
              <MasonryCardGrid
                data={this.state.data.filter(x => {
                  return (
                    x.date &&
                    x.date.split("-")[0] === year_list[7] &&
                    x["category"].includes("Publications")
                  )
                })}
              />
            </Tab>
            <Tab eventKey={year_list[8]} title={year_list[8]}>
              <MasonryCardGrid
                data={this.state.data.filter(x => {
                  return (
                    x.date &&
                    x.date.split("-")[0] === year_list[8] &&
                    x["category"].includes("Publications")
                  )
                })}
              />
            </Tab>
            <Tab eventKey={year_list[9]} title={year_list[9]}>
              <MasonryCardGrid
                data={this.state.data.filter(x => {
                  return (
                    x.date &&
                    x.date.split("-")[0] === year_list[9] &&
                    x["category"].includes("Publications")
                  )
                })}
              />
            </Tab>
            <Tab eventKey={year_list[10]} title={year_list[10]}>
              <MasonryCardGrid
                data={this.state.data.filter(x => {
                  return (
                    x.date &&
                    x.date.split("-")[0] === year_list[10] &&
                    x["category"].includes("Publications")
                  )
                })}
              />
            </Tab>
          </Tabs>
        </Layout>
      )
    }
  }
}

export default Publications
export const query = graphql`
  {
    allCardsJson(filter: {}) {
      nodes {
        category
        description
        title
        subtitle
        link
        image
      }
    }
    allStaffCsv(filter: { DBLP: { ne: "" } }) {
      nodes {
        name
        DBLP
        DOJ
        DOR
      }
    }
  }
`
