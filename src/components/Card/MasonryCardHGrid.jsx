import React from "react"
import { Slide } from "react-awesome-reveal"
import Masonry from "react-masonry-css"
import Card from "./Card"
import StaffCard from "./StaffCard"
import HomeCard from "./HomeCard"
import {
  my_masonry_grid,
  my_masonry_grid_column,
} from "./MasonryCardGrid.module.css"

const MasonryCardGrid = ({ data, type, temp }) => {
  const breakpointColumnsObj = {
    default: 5,
    2000: 7,
    1520: 6,
    1200: 5,
    1024: 3,
    500: 2,
  }
  return (
    <>
      <Slide triggerOnce direction={"up"}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={my_masonry_grid}
          columnClassName={my_masonry_grid_column}
        >
          {data.map((element, id) =>
            type === "staff" ? (
              <StaffCard {...element} key={id} />
            ) : (
              <Card {...element} key={id} />
            )
          )}
        </Masonry>
      </Slide>
    </>
  )
}

export default MasonryCardGrid
