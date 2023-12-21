import React from "react"
import "../../components/Layout.css"
import Publicationcard from "../../components/Card/Publicationcard"
import Eventscard from "../../components/Card/Eventscard"
import { graphql, Link } from "gatsby"
import { useStaticQuery } from "gatsby"

const month_num_to_name = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sept",
  10: "Oct",
  11: "Nov",
  12: "Dec",
}

const rightcomponent = () => {
  const recent_events = useStaticQuery(graphql`
    query MyQuery {
      allCardsJson(
        filter: { category: { in: ["Events", "Publications"] } }
        sort: { fields: date, order: DESC }
      ) {
        nodes {
          description
          date
          title
          subtitle
          category
        }
      }
    }
  `)


  const recentEventsList = recent_events.allCardsJson.nodes
    .filter(item => item.category[0] === "Events")
    .slice(0, 3)
    .map(item => {
      return {
        month: item.date.split("-")[1],
        date: item.date.split("-")[2],
        title: item.title,
        description: item.description,
        link: item.link,
      }
    })

  const recentPublicationsList = recent_events.allCardsJson.nodes
    .filter(item => item.category[0] === "Publications")
    .slice(0, 3)

  // const Publications = [
  //   {
  //     date: "2021-02-02",
  //     subtitle: "IEEE Trans. Multim. 2021 ",
  //     description: "Vinayak Abrol, Pulkit Sharma, Arijit Patra",
  //     title: "Improving Generative Modelling in VAEs Using Multimodal Prior.",
  //     link: "https://doi.org/10.1109/TMM.2020.3008053",
  //     category: ["Publications"],
  //   },
  //   {
  //     date: "2021-02-02",
  //     subtitle: "IEEE Trans. Multim. 2021 ",
  //     description: "Vinayak Abrol, Pulkit Sharma, Arijit Patra",
  //     title: "Improving Generative Modelling in VAEs Using Multimodal Prior.",
  //     link: "https://doi.org/10.1109/TMM.2020.3008053",
  //     category: ["Publications"],
  //   },
  //   {
  //     date: "2021-02-02",
  //     subtitle: "IEEE Trans. Multim. 2021 ",
  //     description: "Vinayak Abrol, Pulkit Sharma, Arijit Patra",
  //     title: "Improving Generative Modelling in VAEs Using Multimodal Prior.",
  //     link: "https://doi.org/10.1109/TMM.2020.3008053",
  //     category: ["Publications"],
  //   },
  // ]

  return (
    <div className="right-container">
      <div className="eventscard-container right-item">
        <h3 className="margintopbot prevent_overflow">
          <Link
            className="title-link events-title"
            to="/news-and-events/events"
          >
            Upcoming Events
          </Link>
        </h3>
        {recentEventsList.map((item, index) => {
          return (
            <Eventscard
              month={month_num_to_name[item.month]}
              day={item.date}
              link={item.link}
              title={item.title}
              description={item.description}
            />
          )
        })}
      </div>

      <div className="right-item">
        <h3 className="margintopbot prevent_overflow">
          <Link className="title-link publications-title" to="/research/pubs2">
            Publications
          </Link>
        </h3>
        {recentPublicationsList.map((item, index) => {
          return (
            <Publicationcard
              title={item.title}
              authors={item.authors}
              description={item.description}
              link={item.link}
              venue={item.venue}
              year={item.year}
            />
          )
        })}
      </div>
    </div>
  )
}

export default rightcomponent
