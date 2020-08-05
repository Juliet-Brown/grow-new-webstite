import React, { Fragment } from "react"
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

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <Fragment>
        <div className={styles.wContainer}>
          <Header />
          <main>
            <div className={styles.gutters}>
              <h1>404</h1>
              <p className={styles.uMarginBottomML}>
                Sorry, there has been an error.
              </p>
            </div>
          </main>
        </div>
        <Footer />
      </Fragment>
    )
  }
}
