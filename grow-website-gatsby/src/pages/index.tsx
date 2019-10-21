import React, { Fragment } from "react"
import { graphql } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Helmet from "react-helmet"
import * as styles from "./Index.module.scss"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import FAQs from "./components/FAQs/FAQs"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import People from "./components/People/People"
import Workshop from "./components/workshop"

import growBannerImage from "../images/grow-banner-image.jpg"
import workshopImage from "../images/workshop-image.png"
import email from "../images/email.svg"
import instagram from "../images/instagram.svg"
import phone from "../images/phone.svg"
import twitter from "../images/twitter.svg"

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
      <Fragment>
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
            <div id="workshop">
              <div className={styles.sectionWorkshop}>
                <div className={styles.headingLarge}>Workshops</div>
                <div className={styles.headingXSmall}>Upcoming Event</div>
                <Workshop
                  imageSrc={workshopImage}
                  locationName="Springload"
                  locationAddress="Level 6, 7 Dixon St, Wellington"
                  name="Introduction to coding basics"
                  description={[
                    "In this workshop, we'll cover the essentials of each of the three \
                    front-end web languages: HTML, CSS, and JavaScript. You’ll come away \
                    with a small project you can keep working on in your own time to \
                    fine-tune your coding skills.",
                    "All you need is your laptop and yourself — no specialist software or \
                    programs. There'll be food and drink to keep you fuelled and \
                    focused. Be ready to learn, have fun, and meet like-minded future \
                    coding hotshots.",
                  ]}
                  dateTime="2019-11-13T18:00:00"
                />
              </div>
            </div>
            <People />
            <FAQs />
          </div>
        </main>
        <Contact />
        <Footer />
      </Fragment>
    )
  }
}
