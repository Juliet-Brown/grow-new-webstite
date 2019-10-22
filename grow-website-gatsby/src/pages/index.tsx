import React, { Fragment } from "react"
import { graphql } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Helmet from "react-helmet"
import * as styles from "./Index.module.scss"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
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
            <div id="faqs">
              <div className={styles.headingLarge}>
                Frequently asked questions
              </div>
              <div
                className={`${styles.headingXSmall} ${styles.uMarginBottomM}`}
              >
                Applicants
              </div>
              <div className={styles.grid}>
                <div className={styles.gridItemContainer}>
                  <div className={styles.headingSmall}>
                    How many applicants do you accept, and how many people
                    apply?
                  </div>
                  <div className={styles.paragraphSmall}>
                    <p>
                      We try to pair two applicants to every coach who’s
                      available. Around twenty applicants fit comfortably in the
                      space Springload has generously let us use. For our first
                      workshop, we received over a hundred applicants.
                    </p>
                  </div>
                </div>
                <div className={styles.gridItemContainer}>
                  <div className={styles.headingSmall}>
                    If I’m not accepted for one workshop, can I reapply?
                  </div>
                  <div className={styles.paragraphSmall}>
                    <p>
                      Before we open applications to everyone, we give priority
                      to the applicants who missed out on the last workshop.
                      Even if you miss out the first time, you’ll probably get a
                      chance to attend a later workshop.
                    </p>
                  </div>
                </div>
                <div className={styles.gridItemContainer}>
                  <div className={styles.headingSmall}>
                    Why a workshop specifically for women and non-binary people?
                  </div>
                  <div className={styles.paragraphSmall}>
                    <p>
                      There’s still a huge gender gap in STEM, and we believe
                      creating spaces for learning to code for those who are
                      underrepresented will help us close that gap. We are all
                      for doing what we can to create a more diverse tech
                      sector!
                    </p>
                  </div>
                </div>
                <div className={styles.gridItemContainer}>
                  <div className={styles.headingSmall}>
                    How much coding experience do I need?
                  </div>
                  <div className={styles.paragraphSmall}>
                    <p>
                      None! We cater to absolute beginners. The aim behind our
                      workshops is to give those who are totally new to coding a
                      taster of what it’s all about.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.headingXSmall} ${styles.uMarginBottomM}`}
              >
                What You Need
              </div>
              <div className={styles.grid}>
                <div className={styles.gridItemContainer}>
                  <div className={styles.headingSmall}>
                    What if I don’t have a laptop?
                  </div>
                  <div className={styles.paragraphSmall}>
                    <p>
                      Flick us an email at <a>grow@springload.co.nz</a>, and
                      we’ll see what we can do about sourcing a spare laptop for
                      you to borrow. We want to make Grow accessible to
                      everyone, so not having a laptop shouldn’t be a barrier.
                    </p>
                  </div>
                </div>
                <div className={styles.gridItemContainer}>
                  <div className={styles.headingSmall}>Will you feed us?</div>
                  <div className={styles.paragraphSmall}>
                    <p>
                      Yes! We know you’ll probably get hungry, so we’ll be
                      providing tasty snacks to help keep you functioning at
                      full capacity. Our application form has a section asking
                      you about your dietary requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.headingXSmall} ${styles.uMarginBottomM}`}
              >
                After the Workshop
              </div>
              <div className={styles.grid}>
                <div className={styles.gridItemContainer}>
                  <div className={styles.headingSmall}>
                    What will I achieve by the end of the workshop?
                  </div>
                  <div className={styles.paragraphSmall}>
                    <p>
                      You’ll have a basic grasp of what HTML, CSS, and
                      JavaScript are and what they do in web development. You’ll
                      have used them in a fun, challenging exercise and seen how
                      they can be used to build cool stuff on the interwebs!
                    </p>
                  </div>
                </div>
                <div className={styles.gridItemContainer}>
                  <div className={styles.headingSmall}>
                    What happens after the workshop?
                  </div>
                  <div className={styles.paragraphSmall}>
                    <p>
                      You’ll be able to join the Grow Facebook group and keep up
                      with those who have Grown with you. And maybe you’ll
                      decide to keep learning to code by making use of some of
                      the online resources we recommend!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Contact />
        <Footer />
      </Fragment>
    )
  }
}
