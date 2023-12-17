import useSWR from "swr"
import { fetcher } from "../helpers/utils"

function useCourses() {
  // fetch data using SWR
  const { data, error } = useSWR(
    "https://api.codetabs.com/v1/proxy/?quest=http://techtree.iiitd.edu.in/static/Courses.json",
    fetcher
  )

  const courseList = []

  const compare = (a, b) => {
    if (a.courseName > b.courseName) return 1
    if (a.courseName < b.courseName) return -1
    return 0
  }

  if (data) {
    let count = 1
    data.data.forEach(item => {
      if (item["Cluster"] !== "CSE" && item["OptionalDept"] !== "CSE") return

      // organize data in a better way
      const dict = {}
      dict.serialNo = count++
      dict.courseName = item["Course Name"].split("#")[0].trim()
      dict.courseAcronym = item["Course Acronym"].trim()
      dict.credits = parseInt(item["Credits"].trim())
      dict.semester = item["Semester"].split("/")
      dict.prerequisites = item["Prerequisites"].split(",")
      dict.antirequisites = item["Antirequisites"].split(",")
      dict.courseCode = item["Course Code"].split("/")
      dict.link = item["embed_link"]

      // format data better
      dict.semester.forEach(ele => ele.trim())
      dict.prerequisites.forEach(ele => ele.trim())
      dict.antirequisites.forEach(ele => ele.trim())
      dict.courseCode.forEach(ele => ele.trim())
      dict.courseCode = dict.courseCode.filter(ele => ele.startsWith("CSE"))

      let s = dict.link.indexOf("https")
      let e = dict.link.indexOf("headers=false")
      dict.link = dict.link.slice(s, e + 14)

      courseList.push(dict)
    })

    // sort course names alpabetically
    courseList.sort(compare)
  }

  return {
    courseList: courseList,
    error: error,
    status:
      !error && courseList.length === 0 ? "LOADING" : error ? "ERROR" : "OK",
  }
}

export default useCourses
