import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

import * as styles from "./Index.module.scss"
import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Contact from "./components/Contact/Contact"
import FAQs from "./components/FAQs/FAQs"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import People from "./components/People/People"
import Workshop from "./components/Workshop/Workshop"

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

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <>
        <Helmet>
          <html lang="en-NZ" />
          <title>Empowering women to thrive in tech</title>
        </Helmet>
        <div className={styles.wContainer}>
          <Header />
          <div className={styles.gutters}>
            <main>
              <Banner />
              <About />
              <Workshop />
              <People />
              <FAQs />
            </main>
          </div>
        </div>
        <Contact />
        <Footer />
      </>
    )
  }
}
