import React from "react"
import CourseTable from "../../components/CourseTable/CourseTable"
import Layout from "../../components/Layout"
import useCourses from "../../hooks/useCourses"

const CourseCatalog = () => {
  const { courseList, error, status } = useCourses()

  return (
    <Layout mainClass="course-catalog" title="Course Catalog">
      <h3 className="section-heading">Course Catalog</h3>
      <p>
        The list of courses offered by the CSE department at IIIT Delhi are as
        follows:
      </p>
      {status === "LOADING" ? (
        <p style={{ marginTop: 20, fontWeight: 600 }}>
          Loading list of courses...
        </p>
      ) : status === "ERROR" ? (
        <p style={{ marginTop: 20, fontWeight: 600 }}>
          There was an error loading courses. ({error})
        </p>
      ) : (
        <CourseTable courseList={courseList} />
      )}
    </Layout>
  )
}

export default CourseCatalog
