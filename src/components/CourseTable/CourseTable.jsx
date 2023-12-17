import React from "react"
import { IoOpenOutline } from "react-icons/io5"
import "./CourseTable.css"

const CourseTable = ({ courseList }) => {
  let count = 0

  const tagColors = [
    "#4D8EC75d",
    "#687BBE5d",
    "#DF60645d",
    "#9E396C5d",
    "#8266AB5d",
    "#00927C5d",
  ]
  const noneColor = "#c7c7cc"

  const getRandomColor = () => tagColors[count++ % tagColors.length]

  return (
    <table className="course-table">
      <thead>
        <tr>
          <th>Course Code</th>
          <th>Course Name</th>
          <th>Course Acronym</th>
          <th>Credits</th>
          <th>Semester</th>
          <th>Prerequisites</th>
          <th>Antirequisites</th>
        </tr>
      </thead>
      <tbody>
        {courseList.map((course, id) => {
          return (
            <tr key={id}>
              <td>
                {course.courseCode.map((item, i) => (
                  <p
                    key={i}
                    className="tag course-code"
                    style={{
                      background:
                        item === "None" ? noneColor : getRandomColor(),
                    }}
                  >
                    {item}
                  </p>
                ))}
              </td>
              <td className="course-name">
                <a
                  href={course.link}
                  className="course-link"
                  target="_blank"
                  rel="no-referrer"
                >
                  {course.courseName}{" "}
                  <IoOpenOutline style={{ marginLeft: 5, color: "#1c1d1f" }} />
                </a>
              </td>
              <td>{course.courseAcronym}</td>
              <td>{course.credits}</td>
              <td>{course.semester.join(", ")}</td>
              <td>
                <div className="tag-cell">
                  {course.prerequisites.map((item, i) => {
                    if (!item.includes("or"))
                      return (
                        <p
                          key={i}
                          className="tag course-code"
                          style={{
                            background:
                              item === "None" ? noneColor : getRandomColor(),
                          }}
                        >
                          {item.split("/")[0]}
                        </p>
                      )
                    else {
                      item = item.split(" or ")
                      return item.map((it, i) => (
                        <>
                          <p
                            key={i}
                            className="tag course-code"
                            style={{
                              background: getRandomColor(),
                            }}
                          >
                            {it.split("/")[0]}
                          </p>
                          {i !== item.length - 1 ? <em>or</em> : <></>}
                        </>
                      ))
                    }
                  })}
                </div>
              </td>
              <td>
                {course.antirequisites.map((item, i) => {
                  if (!item.includes("or"))
                    return (
                      <p
                        key={i}
                        className="tag course-code"
                        style={{
                          background:
                            item === "None" ? noneColor : getRandomColor(),
                        }}
                      >
                        {item.split("/")[0]}
                      </p>
                    )
                  else {
                    item = item.split(" or ")
                    return item.map((it, i) => (
                      <>
                        <p
                          key={i}
                          className="tag course-code"
                          style={{
                            background: getRandomColor(),
                          }}
                        >
                          {it.split("/")[0]}
                        </p>
                        {i !== item.length - 1 ? <em>or</em> : <></>}
                      </>
                    ))
                  }
                })}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default CourseTable
