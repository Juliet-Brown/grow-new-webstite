import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

interface LayoutPageProps {
  data: {
    site: {
      siteMetadata: {
        menuLinks: {
          name: string
          link: string
        }[]
      }
    }
  }
}

export const query = graphql`
  query LayoutPageQuery {
    site {
      siteMetadata {
        menuLinks {
          name
          link
        }
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(query)
  const { menuLinks } = data.site.siteMetadata
  return <div>{/* <Header menuLinks={menuLinks} /> */}</div>
}
