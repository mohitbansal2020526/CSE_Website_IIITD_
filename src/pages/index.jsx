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
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import banner3 from "../assets/images/banner3.png"
import "./styles.css"
import iiitdlogo from "../assets/images/iiitd_footer_color.png"
import CardHGrid from "../components/Card/CardHGrid"
//import { filterByType } from "../helpers/categorize"
import dblpDataFiltered from "../../data.json"

import axios from "axios"
//import React from "react"
import { ProgressBar, Tab, Tabs } from "react-bootstrap"
import CountUp from "react-countup"
//import {graphql} from "gatsby";
//import Layout from "../../components/Layout"
//import MasonryCardGrid from "../../components/Card/MasonryCardGrid"
import { heading } from "./research/publications.module.css"

import Rightcomponent from "./news-and-events/Rightcomponent"
import { Link } from "react-router-dom"

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
    //         this.setState((prevState) => ({
    //                                     data: [
    //                                         ...prevState.home,
    //                                         ...prevState.data
    //                                     ],
    //                                     loadedCount: prevState.loadedCount + 1
    //                                 }))

    // for (const prof of this.state.professors) {
    //     let joinDate=prof["DOJ"]
    //     let leaveDate=prof["DOR"]
    //      joinDate = joinDate.toString()
    // if (joinDate.length < 4)
    //     joinDate = "20" + joinDate.split("-")[2]
    // if (leaveDate && leaveDate !== "")
    //     leaveDate = "20" + leaveDate.split("-")[2]
    // else
    //     leaveDate = (this.year + 10).toString()

    // joinDate = "20" + (joinDate.split("-")[2])

    //         axios.get("https://dblp.org/pid/" + prof["DBLP"] + ".xml").
    //             then(res => {
    //                 const parser = require("xml2js");
    //                 parser.parseString(res.data,
    //                     (err, rest) => {
    //                         rest = rest["dblpperson"]["r"]

    //                    rest = rest.map(x => this.parse(x, joinDate, leaveDate, this.state.professors, prof["name"])).

    //                                 filter(x => {
    //                                     return x !== {}
    //                                 })

    //                         this.setState((prevState) => ({
    //                             data: [
    //                                 ...rest,
    //                                 ...prevState.data
    //                             ],
    //                             loadedCount: prevState.loadedCount + 1
    //                         }))
    //                     })
    //             })
    // }
    this.setState(prevState => ({
      data: [...prevState.home, ...prevState.data, ...dblpDataFiltered],
      loadedCount: prevState.professors.length,
    }))
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
        <Layout title="Homepage">
          <Row className="landingpage">
            <Col className="landingpage-left">
              <div
                id="carouselIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src={banner1}
                      class=" carousel-image d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={banner2}
                      class="carousel-image d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={banner3}
                      class="carousel-image d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <Row className="my-3">
                <Col className="d-flex align-items-stretch">
                  <div className="indexcard-container d-flex flex-column">
                    <img
                      className="d-block w-100 indexcard-image"
                      src={img1}
                      alt="img1"
                    />
                    <div className="indexcard-text">
                      <h4>
                        {" "}
                        <a href="/about/mission" style={{ color: "#42aea8" }}>
                          {" "}
                          Mission & Vision{" "}
                        </a>
                      </h4>
                      <p>
                        The department strives for global excellence through
                        advanced computer science research, applying technology
                        across domains. We're committed to cultivating standout
                        engineers, fostering innovation, and inspiring new
                        product creation.{" "}
                        <a href="/about/mission" className="readmore">
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>

                {/* Left Component 2 */}
                <Col className="d-flex align-items-stretch">
                  <div className="indexcard-container d-flex flex-column">
                    <img
                      className="d-block w-100 indexcard-image"
                      src={img2}
                      alt="img1"
                    />
                    <div className="indexcard-text">
                      <h4>
                        {" "}
                        <a href="/about/details" style={{ color: "#42aea8" }}>
                          {" "}
                          PEOs, POs & PSOs{" "}
                        </a>{" "}
                      </h4>
                      <p>
                        The BTech program cultivates engineering expertise by
                        emphasizing problem-solving, design proficiency, and
                        effective communication.
                        The curriculum integrates modern tools for research and
                        communication, fostering an understanding of
                        engineering principles. Graduates are prepared to
                        contribute meaningfully across diverse fields.{" "}
                        <a href="/about/details" className="readmore">
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="landingpage-right">
              <Rightcomponent />
            </Col>
          </Row>

          {/* <Tabs defaultActiveKey={"Recent News & Events"} className="mb-3">
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
          </Tabs> */}
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
