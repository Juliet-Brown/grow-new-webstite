import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

import * as styles from "./Index.module.scss"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import FAQs from "./components/FAQs/FAQs"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import People from "./components/People/People"
import Workshop from "./components/Workshop/Workshop"
import growBannerImage from "../images/grow-banner-image.jpg"

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string
      }
    }
  }
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
      }
    }
  }
`

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/header/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <>
        <Helmet>
          <html lang="en-NZ" />
          <title>Grow &endash; Empowering women to thrive in tech</title>
        </Helmet>
        <Header />
        <main className={styles.main}>
          <div className={styles.gutters}>
            <img
              className={styles.bannerImage}
              src={growBannerImage}
              width="1435px"
              alt="The Grow team"
            />
            <About />
            <Workshop />
            <People />
            <FAQs />
          </div>
        </main>
        <Contact />
        <Footer />
      </>
    )
  }
}
