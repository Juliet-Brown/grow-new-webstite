import * as React from "react"
import { graphql } from "gatsby"
import Layout from "./components/layout"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Img from "gatsby-image"
import * as styles from "./Index.module.scss"
import logo from "../images/rectangle.svg"

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
    const { name } = this.props.data.site.siteMetadata

    return (
      <div>
        <div className={styles.mainContainer}>
          <div className={styles.Container}>
            <Layout />
            <div className={styles.Logo} style={{ float: "left" }}>
              <h1>{name}</h1>
            </div>
            <ul className={styles.List}>
              <li>
                <AnchorLink href="#about">About</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#workshop">Workshops</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#people">People</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#faqs">FAQS</AnchorLink>
              </li>
            </ul>
          </div>
          <div className={styles.heroImageContainer}>
            <img
              className={styles.largeImage}
              src={
                "https://res.cloudinary.com/juliet-brown/image/upload/v1560653551/rectangle_l3y0lk.jpg"
              }
              width="1435px"
              alt=""
            />
          </div>
          <div id="about">
            <section id="about" className={styles.sectionOne}>
              <div className={styles.largeHeading}>
                Empowering women to thrive in tech.
              </div>
              <div className={styles.singleColumn}>
                <p className={styles.paragraph}>
                  Grow is a series of free workshops run dedicated to helping
                  women learn the basics of web development. If you have little
                  or no experience in coding, Grow provides a safe spavce for
                  you to discover the opportunities in tech. Get a feel for it,
                  see if you like it or not. Maybe even make a career out of it.
                  Or walk away vowing never to touch code again - that's totally
                  okay too.
                </p>
              </div>
            </section>
          </div>

          <section id="workshop" className={styles.sectionTwo}>
            <div className={styles.mediumHeading}>Workshops</div>
            <p className={styles.smallParagraph}> UPCOMING EVENT</p>
            <img
              className={styles.rectangleImage}
              src={
                "https://res.cloudinary.com/juliet-brown/image/upload/v1560656531/rectangle_cbnyjr.svg"
              }
              alt="rectangle"
            />
          </section>

          <div>
            <section className={styles.sectionThree}>
              <div className={styles.smallHeading}>
                Introduction to the basics of Javascript, HTML abs CSS
              </div>
              <div className={styles.singleColumnSmall}>
                <span>
                  {" "}
                  6pm, 3 July 2019 | 7 Dixon St, Level 6 Springload, Wellington
                </span>
                <br />
                <br />
                <br />
                <p className={styles.childParagraph}>
                  The workshop will cover a taster of each language. You’ll come
                  away with a project you can keep working on after the workshop
                  to fine-tune your coding skills. You just need your laptop, no
                  specialist software or programs. There’ll be food and drink to
                  keep you fuelled and focussed. Be ready to learn, chat and
                  make some new friends!
                </p>
                <AnchorLink className={styles.link} href="#">
                  Apply for this workshop
                </AnchorLink>
                <p className={styles.childParagraph}>
                  We’ll let you know if you’ve secured a space on the workshop
                  by 28 June.
                </p>
              </div>
            </section>

            <div>
              <section id="people" className={styles.sectionFour}>
                <div className={styles.mediumHeading}>People</div>
                <div className={styles.column}>
                  <div className={styles.singleColumnSmall}>
                    <p className={styles.childParagraph}>
                      The workshop will cover a taster of each language. You'll
                      come away with a project you can keep working on after the
                      worksop to fine-tune your coding skills. You just need
                      your laptop, no
                    </p>
                  </div>
                </div>
              </section>

              <section className={styles.sectionFive}>
                <div className={styles.imageContainer}>
                  <div className={styles.imageGrid}>
                    <div className={styles.columnCell}>
                      <img
                        src="https://res.cloudinary.com/juliet-brown/image/upload/v1560654297/rectangle-copy_spychu.jpg"
                        className={styles.gridImage}
                      />
                    </div>
                    <div className={styles.columnCell}>
                      <img
                        src="https://res.cloudinary.com/juliet-brown/image/upload/v1560654288/rectangle_f8zbe7.jpg"
                        className={styles.gridImage}
                      />
                    </div>
                    <div className={styles.columnCell}>
                      <img
                        src="https://res.cloudinary.com/juliet-brown/image/upload/v1560654228/rectangle-copy-12_fpsm6s.jpg"
                        className={styles.gridImage}
                      />
                    </div>
                    <div className={styles.columnCell}>
                      <img
                        src="https://res.cloudinary.com/juliet-brown/image/upload/v1560654228/rectangle-copy-11_is6o9o.jpg"
                        className={styles.gridImage}
                      />
                    </div>
                    <div className={styles.columnCell}>
                      <img
                        src="https://res.cloudinary.com/juliet-brown/image/upload/v1560654227/rectangle-copy-8_hjz9gg.jpg"
                        className={styles.gridImage}
                      />
                    </div>
                    <div className={styles.columnCell}>
                      <img
                        src="https://res.cloudinary.com/juliet-brown/image/upload/v1560654227/rectangle-copy-9_nafyei.jpg"
                        className={styles.gridImage}
                      />
                    </div>
                    <div className={styles.columnCell}>
                      <img
                        src="https://res.cloudinary.com/juliet-brown/image/upload/v1560654227/rectangle-copy-10_dhodkd.jpg"
                        className={styles.gridImage}
                      />
                    </div>
                    <div className={styles.columnCell}>
                      <img
                        src="https://res.cloudinary.com/juliet-brown/image/upload/v1560654227/rectangle-copy-7_nz0ttq.jpg"
                        className={styles.responsiveImage}
                      />
                    </div>{" "}
                  </div>
                </div>
              </section>

              <section id="faqs" className={styles.sectionSix}>
                <div className={styles.largeHeading}>
                  Frequently asked questions
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.row}>
                    <div className={styles.column}>
                      <div className={styles.columnHeading}>
                        Why is diversity important?
                      </div>
                      <div className={styles.ColumnLeft}>
                        More diversity in tech means better products — products
                        that reflect the needs of our evolving world. It also
                        means a more supportive working environment, full of
                        people with different perspectives. But we can’t sit
                        around waiting for a more diverse community to appear.
                        We need to take a stand and make it happen.
                      </div>
                    </div>
                    <div className={styles.column}>
                      <div className={styles.columnHeading}>What is that?</div>
                      <div className={styles.ColumnRight}>
                        We respect each other. We embrace diversity because we
                        know we’re all different but deep down the same. We’re
                        human and we recognise some days some of us just aren’t
                        feeling it.
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.column}>
                      <div className={styles.columnHeading}>
                        I don’t know how to do this?
                      </div>
                      <div className={styles.ColumnLeft}>
                        More diversity in tech means better products — products
                        that reflect the needs of our evolving world. It also
                        means a more supportive working environment, full of
                        people with different perspectives. But we can’t sit
                        around waiting for a more diverse community to appear.
                        We need to take a stand and make it happen.
                      </div>
                    </div>
                    <div className={styles.column}>
                      <div className={styles.columnHeading}>
                        I don’t know how to do this?
                      </div>
                      <div className={styles.ColumnRight}>
                        We respect each other. We embrace diversity because we
                        know we’re all different but deep down the same. We’re
                        human and we recognise some days some of us just aren’t
                        feeling it.
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.column}>
                      <div className={styles.columnHeading}>
                        I don’t know how to do this?
                      </div>
                      <div className={styles.ColumnLeft}>
                        More diversity in tech means better products — products
                        that reflect the needs of our evolving world. It also
                        means a more supportive working environment, full of
                        people with different perspectives. But we can’t sit
                        around waiting for a more diverse community to appear.
                        We need to take a stand and make it happen.
                      </div>
                    </div>
                    <div className={styles.column}>
                      <div className={styles.columnHeading}>
                        I don’t know how to do this?
                      </div>
                      <div className={styles.ColumnRight}>
                        We respect each other. We embrace diversity because we
                        know we’re all different but deep down the same. We’re
                        human and we recognise some days some of us just aren’t
                        feeling it.
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <footer className={styles.section}>
          <div className={styles.sectionWrapper}>
            <div className={styles.rowSection}>
              <div className={styles.columnSection}>
                <div className={styles.largeHeading}>Apply</div>
                <div className={styles.footerColumn}>
                  Want to learn more about wonderful world of coding? Come along
                  to our next free workshop – we’d love to have you!
                </div>
                <div className={styles.footerColumn}>
                  <AnchorLink className={styles.link} href="#">
                    Apply for this workshop
                  </AnchorLink>
                </div>
              </div>

              <div className={styles.columnSection}>
                <div className={styles.largeHeading}>Get in touch</div>
                <div className={styles.footerColumn}>
                  {" "}
                  Any questions or keen to get involved? Contact us through
                  email, phone or social media.
                </div>
                <div className={styles.footerLinkTwoContainer}>
                  <div className={styles.footerColumn}>
                    <AnchorLink className={styles.link} href="#">
                      grow@springload.co.nz
                    </AnchorLink>
                    <AnchorLink className={styles.link} href="#">
                      +64 4 801 8205
                    </AnchorLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footerContainer} />
          </div>
        </footer>
        <footer className={styles.footer}>
          <div className={styles.footerLinkContainer}>
            <AnchorLink className={styles.linkFooter} href="#">
              About
            </AnchorLink>
            <AnchorLink className={styles.linkFooter} href="#">
              Workshops
            </AnchorLink>
            <AnchorLink className={styles.linkFooter} href="#">
              People
            </AnchorLink>
            <AnchorLink className={styles.linkFooter} href="#">
              FAQS
            </AnchorLink>
            <AnchorLink className={styles.linkFooter} href="#">
              Contact
            </AnchorLink>
          </div>
        </footer>
      </div>
    )
  }
}
