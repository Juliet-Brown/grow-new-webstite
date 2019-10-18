import React, { Fragment } from "react"
import { graphql } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Helmet from "react-helmet"
import * as styles from "./Index.module.scss"

import growLogo from "../images/grow-logo.png"
import growBannerImage from "../images/grow-banner-image.jpg"
import email from "../images/email.svg"
import instagram from "../images/instagram.svg"
import phone from "../images/phone.svg"
import twitter from "../images/twitter.svg"
import cateImage from "../images/cate.png"
import giselaImage from "../images/gisela.png"
import julietImage from "../images/juliet.png"
import katieImage from "../images/katie.png"
import kellyImage from "../images/kelly.png"
import lydieImage from "../images/lydie.png"
import rachelImage from "../images/rachel.png"
import ushaImage from "../images/usha.png"

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
        <header className={styles.gutters}>
          <div className={styles.header}>
            <div className={styles.headerLogo}>
              <img src={growLogo} alt="" />
            </div>
            <ul className={styles.headerMenu}>
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
              <li>
                <AnchorLink href="#contact">Contact</AnchorLink>
              </li>
            </ul>
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.gutters}>
            <img
              className={styles.bannerImage}
              src={growBannerImage}
              width="1435px"
              alt="The Grow team"
            />
            <div id="about">
              <div className={styles.sectionAbout}>
                <h1 className={styles.headingXLarge}>
                  Empowering women to thrive in tech
                </h1>
                <p
                  className={`${styles.paragraphLarge} ${
                    styles.uWidthEightyPercent
                  }`}
                >
                  Grow is a series of self-contained workshops for women who
                  want to learn the basics of web development. Each workshop
                  provides a fun, practical intro to HTML, CSS, and JavaScript.
                  Run by an all-women, all-volunteer cast of Springloaders, Grow
                  workshops are free, inclusive, safe, and welcoming for even
                  the most novice of newbies.
                </p>
              </div>
            </div>

            <div id="workshop">
              <div className={styles.sectionWorkshop}>
                <div className={styles.headingLarge}>Workshops</div>
                <div className={styles.headingXSmall}>Upcoming Event</div>
                <img
                  className={styles.imageMedium}
                  src={
                    "https://res.cloudinary.com/juliet-brown/image/upload/v1560656531/rectangle_cbnyjr.svg"
                  }
                  alt="rectangle"
                />

                <div className={styles.headingMedium}>
                  Introduction to coding basics
                </div>
                <div className={styles.uWidthSixtyPercent}>
                  <div className={styles.headingSubtitle}>
                    {" "}
                    6pm, Wednesday 3rd July 2019 | Springload, Level 6, 7 Dixon
                    St, Wellington
                  </div>
                  <p className={styles.paragraphSmall}>
                    In this workshop, we’ll cover the essentials of each of the
                    three front-end web languages: HTML, CSS, and JavaScript.
                    You’ll come away with a small project you can keep working
                    on in your own time to fine-tune your coding skills.
                  </p>
                  <p
                    className={`${styles.paragraphSmall} ${
                      styles.uMarginBottomM
                    }`}
                  >
                    All you need is your laptop and yourself — no specialist
                    software or programs. There’ll be food and drink to keep you
                    fuelled and focused. Be ready to learn, have fun, and meet
                    like-minded future coding hotshots.
                  </p>
                  <div className={styles.uMarginBottomS}>
                    <AnchorLink href="#">Apply for this workshop</AnchorLink>
                  </div>
                  <p className={styles.paragraphSmall}>
                    We’ll let you know if you’ve secured a space in the workshop
                    by 28 June.
                  </p>
                </div>
              </div>
              <div>
                <div id="people" className={styles.headingLarge}>
                  People
                </div>
                <div className={styles.uMarginBottomML}>
                  <div className={styles.uWidthSixtyPercent}>
                    <p className={styles.paragraphSmall}>
                      We’re the team of dedicated, approachable and welcoming
                      women behind Grow. We all work at Springload and run Grow
                      in our own time.
                    </p>
                    <p className={styles.paragraphSmall}>
                      Not all of us code (but most of us do). And not all of us
                      knew that tech was where we wanted to end up. Some of us
                      came from eclectic, non-coding backgrounds: graphic
                      design, fine art, creative writing, clock repairing,
                      cabinet making, and photography. But what we all want is
                      to help make learning the basics of web development as fun
                      and accessible as we can for you.
                    </p>
                  </div>
                </div>

                <div className={styles.uMarginBottomL}>
                  <div className={styles.grid}>
                    <div className={styles.gridItemContainer}>
                      <div className={styles.gridItem}>
                        <div className={styles.ratioContent}>
                          <img
                            src={katieImage}
                            className={styles.gridImage}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={styles.headingSmall}>Katie Day</div>
                      <p className={styles.paragraphSmall}>
                        Katie started off as a graphic designer, and that
                        background plays a huge part in how she approaches
                        front-end development. She loves working with designers,
                        and is passionate about making the best decisions for
                        the user experience. She learned front- end development
                        at Media Design School in Auckland, and has a passion
                        for building beautiful, scalable UIs with CSS.
                      </p>
                    </div>
                    <div className={styles.gridItemContainer}>
                      <div className={styles.gridItem}>
                        <div className={styles.ratioContent}>
                          <img
                            src={rachelImage}
                            className={styles.gridImage}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={styles.headingSmall}>Rachel Bolt</div>
                      <p className={styles.paragraphSmall}>
                        Rachel got her Bachelor of Design with first class
                        honours at Massey University, and joined Springload as a
                        Summer of Tech intern at the end of 2018. She was
                        quickly snapped up for a permanent position. She’s an
                        experience designer who’s passionate about putting
                        people first – using service, user experience, and user
                        interface design to create digital experiences that make
                        a positive impact for people and the planet.
                      </p>
                    </div>
                    <div className={styles.gridItemContainer}>
                      <div className={styles.gridItem}>
                        <div className={styles.ratioContent}>
                          <img
                            src={ushaImage}
                            className={styles.gridImage}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={styles.headingSmall}>Usha MacDonald</div>
                      <p className={styles.paragraphSmall}>
                        Usha got her start in coding early. As a young teen, she
                        started playing around with code and it wasn’t long
                        before she discovered the open source community. It
                        impressed her with its wealth of learning resources and
                        culture of building things to help people. After a few
                        years as an apprentice at her dad’s IT business followed
                        by Enspiral Dev Academy’s web development bootcamp, she
                        contracted for a few months before joining Springload as
                        a front-end developer.
                      </p>
                    </div>
                    <div className={styles.gridItemContainer}>
                      <div className={styles.gridItem}>
                        <div className={styles.ratioContent}>
                          <img
                            src={kellyImage}
                            className={styles.gridImage}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={styles.headingSmall}>Kelly Todd</div>
                      <p className={styles.paragraphSmall}>
                        Kelly studied photography in her native UK, and ran her
                        own portrait photography business before making the leap
                        into the tech industry. She’s Springload’s studio and
                        events manager, and she loves looking after (and being
                        part of) a team of smart, friendly, vibrant people —
                        which is a real change from working on her own as a
                        photographer! She finds the tech industry exciting and
                        ever-changing, and loves that it has the capacity to
                        incite positive change in the world.
                      </p>
                    </div>
                    <div className={styles.gridItemContainer}>
                      <div className={styles.gridItem}>
                        <div className={styles.ratioContent}>
                          <img
                            src={giselaImage}
                            className={styles.gridImage}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={styles.headingSmall}>
                        Gisela de la Villa
                      </div>
                      <p className={styles.paragraphSmall}>
                        Gisela earned her degree in Software Engineering at
                        Instituto Tecnológico de Buenos Aires in her native
                        Argentina. She came to New Zealand on a visa sponsored
                        by Touchtech, which merged with Springload last year.
                        With a background in science and languages, she believes
                        software engineering is like the creative writing of
                        mathematical algorithms. She loves that her role as
                        technical lead allows her to communicate with others
                        while practising her craft, to solve hard problems and
                        help others find solutions to theirs.
                      </p>
                    </div>
                    <div className={styles.gridItemContainer}>
                      <div className={styles.gridItem}>
                        <div className={styles.ratioContent}>
                          <img
                            src={lydieImage}
                            className={styles.gridImage}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={styles.headingSmall}>Lydie Danet</div>
                      <p className={styles.paragraphSmall}>
                        Lydie always knew she wanted to solve problems for a
                        living. Programming didn’t occur to her until after
                        she’d studied both clock-repairing (which wasn’t
                        creative enough) and cabinet-making (which was difficult
                        to survive off in her native Paris). After working in
                        hospitality for a few years and tinkering with a blog on
                        the side, she realised that becoming a web developer
                        could be creative, interesting, and viable. She did a
                        bootcamp and an internship, et voilà! — six years later,
                        she’s still a front-end developer, and she still loves
                        it.
                      </p>
                    </div>
                    <div className={styles.gridItemContainer}>
                      <div className={styles.gridItem}>
                        <div className={styles.ratioContent}>
                          <img
                            src={cateImage}
                            className={styles.gridImage}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={styles.headingSmall}>Cate Palmer</div>
                      <p className={styles.paragraphSmall}>
                        Before training to be a developer at Enspiral Dev
                        Academy, Cate’s craft was fiction writing - she has an
                        MA from the International Institute of Modern Letters,
                        and an MFA from the Michener Center for Writers in
                        Austin, Texas. Now a front-end developer pursuing her
                        writing alongside her tech career, she’s excited to have
                        the chance through Grow to work with people from
                        non-STEM backgrounds who might see tech as an
                        intimidating sector to break into.
                      </p>
                    </div>
                    <div className={styles.gridItemContainer}>
                      <div className={styles.gridItem}>
                        <div className={styles.ratioContent}>
                          <img
                            src={julietImage}
                            className={styles.gridImage}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={styles.headingSmall}>Juliet Brown</div>
                      <p className={styles.paragraphSmall}>
                        Juliet is a front-end developer and an artist who
                        studied at Elam School of Fine Arts, and then at
                        Enspiral Dev Academy. Not content to leave these two
                        careers in their own separate silos, she’s excited by
                        the challenge of pushing her art and technology
                        together, and is inspired by artist/developers like
                        Sarah Drasner and Zach Lieberman. Outside of her work at
                        Springload, she’s constantly looking for ways to evolve
                        her art - working on digital animations and interactive
                        pieces, and drawing and coding together.
                      </p>
                    </div>{" "}
                  </div>
                </div>

                <div id="faqs">
                  <div className={styles.headingLarge}>
                    Frequently asked questions
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
                          available. We think it’s important you get the chance
                          to ask lots of questions and get one-on-one coaching.
                          Around twenty applicants fit comfortably in the space
                          Springload has generously let us use. For our first
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
                          Before we open applications to everyone, we give
                          priority to the applicants who missed out on the last
                          workshop — so it definitely pays to be patient! Even
                          if you miss out the first time, you’ll probably get a
                          chance to attend a later workshop. Once you’ve
                          applied, we won’t need your full application again.
                          We’ll just email to see if you’re still keen when
                          applications open for the next workshop.
                        </p>
                      </div>
                    </div>
                    <div className={styles.gridItemContainer}>
                      <div className={styles.headingSmall}>
                        Can I apply if I’m a man?
                      </div>
                      <div className={styles.paragraphSmall}>
                        <p>
                          Grow is geared towards providing a space for women and
                          non-binary people to learn the basics of coding. But
                          we’d definitely encourage you to make use of some of
                          the awesome online learning platforms that are out
                          there if you’re curious about learning to code (see
                          below).
                        </p>
                      </div>
                    </div>
                    <div className={styles.gridItemContainer}>
                      <div className={styles.headingSmall}>
                        Why a workshop specifically for women and non-binary
                        people? Why not cater to everyone?
                      </div>
                      <div className={styles.paragraphSmall}>
                        <p>
                          There’s still a massive gender gap in STEM, and we
                          believe the way we’re going to have the best shot at
                          closing that gap is by creating spaces for learning to
                          code that are safe and welcoming for those who are
                          underrepresented. We are all for doing what we can to
                          create a more diverse tech sector!
                        </p>
                      </div>
                    </div>
                    <div className={styles.gridItemContainer}>
                      <div className={styles.headingSmall}>
                        How much coding experience do I need?
                      </div>
                      <div className={styles.paragraphSmall}>
                        <p>
                          None! We cater to absolute beginners. The aim behind
                          our workshops is to give those who are totally new to
                          coding a taster of what it’s all about.
                        </p>
                      </div>
                    </div>
                    <div className={styles.gridItemContainer}>
                      <div className={styles.headingSmall}>
                        What if I don’t have a laptop?
                      </div>
                      <div className={styles.paragraphSmall}>
                        <p>
                          Flick us an email at <a>grow@springload.co.nz</a>, and
                          we’ll see what we can do about sourcing a spare laptop
                          for you to borrow. We want to make Grow accessible to
                          everyone, so not having a laptop shouldn’t be a
                          barrier.
                        </p>
                      </div>
                    </div>
                    <div className={styles.gridItemContainer}>
                      <div className={styles.headingSmall}>
                        Will you feed us?
                      </div>
                      <div className={styles.paragraphSmall}>
                        <p>
                          Yes! We know you’ll probably get hungry between 6 and
                          9pm, so we’ll be providing tasty snacks to help keep
                          you functioning at full capacity.
                        </p>
                      </div>
                    </div>
                    <div className={styles.gridItemContainer}>
                      <div className={styles.headingSmall}>
                        I’m gluten free/vegan/paleo! Do I need to bring my own
                        food?
                      </div>
                      <div className={styles.paragraphSmall}>
                        <p>
                          Nope, our application form has a section asking you
                          about your dietary requirements, and we make sure we
                          cater to those who will be attending the workshop.
                        </p>
                      </div>
                    </div>
                    <div className={styles.gridItemContainer}>
                      <div className={styles.headingSmall}>
                        What will I achieve by the end of the workshop?
                      </div>
                      <div className={styles.paragraphSmall}>
                        <p>
                          You’ll have a basic grasp of what HTML, CSS, and
                          JavaScript are and what they do in front-end web
                          development. You’ll have put them to use in a fun,
                          challenging exercise and seen how they can be used to
                          build some cool stuff on the interwebs!
                        </p>
                      </div>
                    </div>
                    <div className={styles.gridItemContainer}>
                      <div className={styles.headingSmall}>
                        What happens after the workshop?
                      </div>
                      <div className={styles.paragraphSmall}>
                        <p>
                          You’ll be able to join the Grow Facebook group and
                          keep up with those who have Grown with you. And maybe
                          you’ll decide to keep learning to code by making use
                          of some of the online resources we recommend!
                        </p>
                      </div>
                    </div>
                    <div className={styles.gridItemContainer}>
                      <div className={styles.headingSmall}>
                        What’s your relationship to Springload?
                      </div>
                      <div className={styles.paragraphSmall}>
                        <p>
                          All the core Grow team members work at Springload, and
                          Springload has been very generous in providing us with
                          space to run our workshops in, food for our
                          participants, and some of our work hours for running
                          the behind-the-scenes parts of Grow. We sometimes have
                          a few non- Springloaders kindly help us out on
                          workshop nights by acting as coaches.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <div className={styles.sectionContact}>
            <div className={styles.gutters}>
              <div className={styles.flexWrapper}>
                <div className={styles.flexItem}>
                  <div className={styles.headingLarge}>Apply</div>
                  <div className={styles.paragraphLarge}>
                    Want to learn the basics of web development? Apply to our
                    next free workshop and see what it’s all about!
                  </div>
                  <div className={styles.paragraphLarge}>
                    <AnchorLink href="#">Apply to our next workshop</AnchorLink>
                  </div>
                </div>

                <div className={styles.flexItem} id="contact">
                  <div className={styles.headingLarge}>Get in touch</div>
                  <div className={styles.paragraphLarge}>
                    {" "}
                    Any questions or suggestions, or want to be up to date on
                    what’s happening? Contact us via email or phone, or follow
                    us on social media.
                  </div>
                  <div className={styles.paragraphLarge}>
                    <div className={styles.flex}>
                      <img src={email} alt="" />
                      &nbsp;&nbsp;
                      <AnchorLink
                        href="mailto:grow@springload.co.nz"
                        className={styles.linkContact}
                      >
                        grow@springload.co.nz
                      </AnchorLink>
                    </div>
                    <div className={styles.flex}>
                      <img src={phone} alt="" />
                      &nbsp;&nbsp;
                      <AnchorLink
                        href="tel:64-4-801-8205"
                        className={styles.linkContact}
                      >
                        +64 4 801 8205
                      </AnchorLink>
                    </div>
                    <div className={styles.flex}>
                      <img src={twitter} alt="" />
                      &nbsp;
                      <AnchorLink
                        href="https://www.twitter.com/growbysl"
                        className={styles.linkContact}
                      >
                        twitter.com/growbysl
                      </AnchorLink>
                    </div>
                    <div className={styles.flex}>
                      <img src={instagram} alt="" />
                      &nbsp;&nbsp;&nbsp;
                      <AnchorLink
                        href="https://www.instagram.com/growbyspringload"
                        className={styles.linkContact}
                      >
                        instagram.com/growbyspringload
                      </AnchorLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.gutters}>
            <div className={styles.footerLinkContainer}>
              <AnchorLink className={styles.footerLink} href="#about">
                About
              </AnchorLink>
              <AnchorLink className={styles.footerLink} href="#workshop">
                Workshops
              </AnchorLink>
              <AnchorLink className={styles.footerLink} href="#people">
                People
              </AnchorLink>
              <AnchorLink className={styles.footerLink} href="#faqs">
                FAQS
              </AnchorLink>
              <AnchorLink className={styles.footerLink} href="#contact">
                Contact
              </AnchorLink>
            </div>
          </div>
        </footer>
      </Fragment>
    )
  }
}
