import React from "react"
import Card from "./Card"
import StaffCard from "./HomeCard"
import StaticCard from "./StaticCard"

const CardHGrid = ({ data, type }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "0 -10px",
        marginBottom: "50px",
        "row-gap": "20px",
      }}
    >
      {data.map((element, id) =>
        type === "staff" ? (
          <StaffCard {...element} key={id} />
        ) : (
          <StaticCard {...element} key={id} />
        )
      )}
    </div>
  )
}

export default CardHGrid
