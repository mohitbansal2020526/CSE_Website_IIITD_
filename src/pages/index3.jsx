import React from "react"
import { Carousel, Col, Image, Row } from "react-bootstrap"
import Layout from "../components/Layout"
import MasonryCardGrid from "../components/Card/MasonryCardGrid"
import { getDataByCategory } from "../helpers/categorize"
import { getPaperDataByYear } from "../helpers/categorize"
import { getPaperDataByYear2 } from "../helpers/categorize"
//import { getDataByType } from "../helpers/categorize"
import { graphql } from "gatsby"
import banner1 from "../assets/images/banner1.jpg"
import banner2 from "../assets/images/banner2.png"
import banner3 from "../assets/images/banner3.png"
import "./styles.css"
import iiitdlogo from "../assets/images/iiitd_footer_color.png"
import CardHGrid from "../components/Card/CardHGrid"
//import { filterByType } from "../helpers/categorize"

import axios from "axios"
//import React from "react"
import { ProgressBar, Tab, Tabs } from "react-bootstrap"
import CountUp from "react-countup"
//import {graphql} from "gatsby";
//import Layout from "../../components/Layout"
//import MasonryCardGrid from "../../components/Card/MasonryCardGrid"
import { heading } from "./research/publications.module.css"

class Publications extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data.allCardsJson.edges.map(element => element.node),
      home: props.data.allHomexCsv.edges.map(element => element.node),
      professors: props.data["allStaffCsv"]["nodes"],
      loadedCount: 1,
      conferences: 0,
      journals: 0,
    }
    this.year = new Date().getFullYear()
  }

  componentDidMount() {
    this.setState(prevState => ({
      data: [...prevState.home, ...prevState.data],
      loadedCount: prevState.loadedCount + 1,
    }))

    for (const prof of this.state.professors) {
      let joinDate = prof["DOJ"]
      let leaveDate = prof["DOR"]
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
    if (element.booktitle) result["subtitle"] += " " + element.booktitle + " "
    if (element.year) result["subtitle"] += element.year + " "

    if (
      result["subtitle"].includes("CoRR") ||
      result["subtitle"].includes("ePrint")
    )
      return {}

    if (type === "inproceedings")
      this.setState(prevState => ({ conferences: prevState.conferences + 1 }))

    if (type === "article")
      this.setState(prevState => ({ journals: prevState.journals + 1 }))

    if (
      result["subtitle"].includes(" AAAI ") ||
      result["subtitle"].includes(" IJCAI ") ||
      result["subtitle"].includes(" CVPR ") ||
      result["subtitle"].includes(" ICCV ") ||
      result["subtitle"].includes(" ECCV ") ||
      result["subtitle"].includes(" ICML ") ||
      result["subtitle"].includes(" KDD ") ||
      result["subtitle"].includes(" NeurIPS ") ||
      result["subtitle"].includes(" NIPS ") ||
      result["subtitle"].includes(" ACL ") ||
      result["subtitle"].includes(" EMNLP ") ||
      result["subtitle"].includes(" SIGIR ") ||
      result["subtitle"].includes(" NAACL ") ||
      result["subtitle"].includes(" WWW ") ||
      result["subtitle"].includes(" FOCS ") ||
      result["subtitle"].includes(" STOC ") ||
      result["subtitle"].includes(" SODA ") ||
      result["subtitle"].includes(" CRYPTO ") ||
      result["subtitle"].includes(" EuroCrypt ") ||
      result["subtitle"].includes(" CAV ") ||
      result["subtitle"].includes(" LICS ") ||
      result["subtitle"].includes(" APLOS ") ||
      result["subtitle"].includes(" ISCA ") ||
      result["subtitle"].includes(" HPCA ") ||
      result["subtitle"].includes(" MICRO ") ||
      result["subtitle"].includes(" SIGCOMM ") ||
      result["subtitle"].includes(" NSDI ") ||
      result["subtitle"].includes(" CCS ") ||
      result["subtitle"].includes(" SP ") ||
      result["subtitle"].includes(" USENIX Security ") ||
      result["subtitle"].includes(" NDSS ") ||
      result["subtitle"].includes(" SIGMOD ") ||
      result["subtitle"].includes(" VLDB ") ||
      result["subtitle"].includes(" ICDE ") ||
      result["subtitle"].includes(" PODS ") ||
      result["subtitle"].includes(" DAC ") ||
      result["subtitle"].includes(" ICCAD ") ||
      result["subtitle"].includes(" EMSOFT ") ||
      result["subtitle"].includes(" RTAS ") ||
      result["subtitle"].includes(" RTSS ") ||
      result["subtitle"].includes(" HPDC ") ||
      result["subtitle"].includes(" ICS ") ||
      result["subtitle"].includes(" SC ") ||
      result["subtitle"].includes(" MobiCom ") ||
      result["subtitle"].includes(" MobiSys ") ||
      result["subtitle"].includes(" SenSys ") ||
      result["subtitle"].includes(" IMC ") ||
      result["subtitle"].includes(" SIGMETRICS ") ||
      result["subtitle"].includes(" OSDI ") ||
      result["subtitle"].includes(" SOSP ") ||
      result["subtitle"].includes(" OSDI ") ||
      result["subtitle"].includes(" EuroSys ") ||
      result["subtitle"].includes(" FAST ") ||
      result["subtitle"].includes(" PLDI ") ||
      result["subtitle"].includes(" POPL ") ||
      result["subtitle"].includes(" ICFP ") ||
      result["subtitle"].includes(" OOPSLA ") ||
      result["subtitle"].includes(" FSE ") ||
      result["subtitle"].includes(" ICSE ") ||
      result["subtitle"].includes(" ASE ") ||
      result["subtitle"].includes(" ISSTA ") ||
      result["subtitle"].includes(" ISMB ") ||
      result["subtitle"].includes(" RECOMB ") ||
      result["subtitle"].includes(" SIGGRAPH ") ||
      result["subtitle"].includes(" SIGGRAPH Asia ") ||
      result["subtitle"].includes(" EC ") ||
      result["subtitle"].includes(" WINE ") ||
      result["subtitle"].includes(" CHI ") ||
      result["subtitle"].includes(" UbiComp ") ||
      result["subtitle"].includes(" Pervasive ") ||
      result["subtitle"].includes(" IMWUT ") ||
      result["subtitle"].includes(" UIST ") ||
      result["subtitle"].includes(" ICRA ") ||
      result["subtitle"].includes(" IROS ") ||
      result["subtitle"].includes(" RSS ") ||
      result["subtitle"].includes(" VIS ") ||
      result["subtitle"].includes(" VR ")
    ) {
      if (
        result["subtitle"].includes("Workshop") ||
        result["subtitle"].includes("Companion") ||
        result["subtitle"].includes("Findings") ||
        result["subtitle"].includes("@") ||
        result["subtitle"].includes("Forum") ||
        result["subtitle"].includes("Poster") ||
        result["subtitle"].includes("Extended") ||
        result["subtitle"].includes("Abstracts") ||
        result["subtitle"].includes("Short") ||
        result["subtitle"].includes("Student")
      )
        return {}

      return result
    }

    if (result["subtitle"].includes(" Trans")) {
      if (
        result["subtitle"].includes("IEEE") ||
        result["subtitle"].includes("ACM")
      ) {
        return result
      }
    }

    return {}
  }

  render() {
    if (this.state.loadedCount < this.state.professors.length)
      return (
        <Layout mainClass="publications" title="Homepage">
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
        (this.year - 1).toString(),
        this.year.toString(),
        (this.year + 1).toString(),
      ]
      return (
        <Layout mainClass="publications" title="Homepage">
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
              <div className={"float-right text-end"}>
                <br />
                <div className={heading}></div>
              </div>
            </Col>

            <Col>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>

          <Tabs defaultActiveKey={"Recent News & Events"} className="mb-3">
            <Tab
              eventKey={"Recent News & Events"}
              title={"Recent News & Events"}
            >
              <MasonryCardGrid
                data={getPaperDataByYear2(
                  ["News", "Events", "Media"],
                  this.state.data,
                  [year_list[0], year_list[1]]
                )}
              />
            </Tab>
            <Tab
              eventKey={"Publication Highlights"}
              title={"Publication Highlights"}
            >
              <MasonryCardGrid
                data={getPaperDataByYear2(["Publications"], this.state.data, [
                  year_list[0],
                  year_list[1],
                ])}
              />
            </Tab>
            <Tab
              eventKey={"Research & Consultancy Projects"}
              title={"Research & Consultancy Projects"}
            >
              <MasonryCardGrid
                data={getPaperDataByYear2(
                  ["Projects", "Consultancy"],
                  this.state.data,
                  [year_list[0], year_list[1]]
                )}
              />
            </Tab>
          </Tabs>
        </Layout>
      )
    }
  }
}

export default Publications

// export default function Home({data}) {
//     data = data.allHomeCsv.edges.map(element => element.node)
//   return (
//     <Layout mainClass="homepage" title="Homepage">
//         <Row>
//             <Col>
//               <h1 className="main-heading">
//                 Dept. of
//                 <br />
//                 <p className="emphasis"> C</p>
//                 omputer <p className="emphasis">S</p>
//                 cience and <p className="emphasis">E</p>
//                 ngineering
//               </h1>
//               <Image src={iiitdlogo} width="95%"/>
//             </Col>

//             <Col>
//         <Carousel>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src={banner1}
//                     alt="First slide"
//                 />
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src={banner2}
//                     alt="Second slide"
//                 />

//             </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src={banner3}
//                     alt="Third slide"
//                 />

//             </Carousel.Item>
//         </Carousel>
//             </Col>
//         </Row>
//             <MasonryCardGrid data={getDataByType(["Homepage"], data, "Visiting Faculty")}  />
//     </Layout>
//   )
// }

export const query = graphql`
  {
    allHomexCsv {
      edges {
        node {
          additionalInfo
          category
          description
          title
          subtitle
          link
          image
        }
      }
    }
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
