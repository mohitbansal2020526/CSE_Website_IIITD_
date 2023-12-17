import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function PageContent({ data }) {
  const content = data.markdownRemark
  const cls = content.frontmatter.slug.split("/").slice(-1)[0]

  return (
    <Layout mainClass={`${cls} page-content`} title={content.frontmatter.title}>
      <h1 className="section-heading">{content.frontmatter.title}</h1>
      <div
        className="section-text"
        dangerouslySetInnerHTML={{ __html: content.html }}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`
