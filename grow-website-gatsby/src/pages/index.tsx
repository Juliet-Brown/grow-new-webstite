import * as React from "react"
import { graphql } from "gatsby"
import Layout from "./components/layout"
import AnchorLink from "react-anchor-link-smooth-scroll"
import * as styles from "./Index.module.scss"

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
              <li>
                <AnchorLink href="#contact">Contact</AnchorLink>
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
                Empowering women to thrive in tech
              </div>
              <div className={styles.singleColumn}>
                <p className={styles.paragraph}>
                  Grow is a series of self-contained workshops for women who 
                  want to learn the basics of web development. Each workshop 
                  provides a fun, practical intro to HTML, CSS, and JavaScript. 
                  Run by an all-women, all-volunteer cast of Springloaders, 
                  Grow workshops are free, inclusive, safe, and welcoming for 
                  even the most novice of newbies.
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
                Introduction to the basics of HTML, CSS, and JavaScript
              </div>
              <div className={styles.singleColumnSmall}>
                <span>
                  {" "}
                  6pm, Wednesday 3rd July 2019 | Springload, Level 6, 7 Dixon 
                  St, Wellington
                </span>
                <br />
                <br />
                <br />
                <p className={styles.childParagraph}>
                  In this workshop, we’ll cover the essentials of each of the 
                  three front-end web languages: HTML, CSS, and JavaScript. 
                  You’ll come away with a small project you can keep working 
                  on in your own time to fine-tune your coding skills.
                </p>
                <p className={styles.childParagraph}>
                  All you need is your laptop and yourself — no specialist 
                  software or programs. There’ll be food and drink to keep you 
                  fuelled and focused. Be ready to learn, have fun, and meet 
                  like-minded future coding hotshots.
                </p>
                <AnchorLink className={styles.link} href="#">
                  Apply for this workshop
                </AnchorLink>
                <p className={styles.childParagraph}>
                  We’ll let you know if you’ve secured a space in the workshop
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
                      We’re the team of dedicated, approachable and welcoming 
                      women behind Grow. We all work at Springload and run Grow 
                      in our own time.
                    </p>
                    <p className={styles.childParagraph}>
                      Not all of us code (but most of us do). And not all of us 
                      knew that tech was where we wanted to end up. Some of us 
                      came from eclectic, non-coding backgrounds: graphic design, 
                      fine art, creative writing, clock repairing, cabinet making, 
                      and photography. But what we all want is to help make 
                      learning the basics of web development as fun and accessible 
                      as we can for you.
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
                      <div>
                        Katie Day
                      </div>
                      <p className={styles.childParagraph}>
                        Katie started off as a graphic designer, and that background 
                        plays a huge part in how she approaches front-end development. 
                        She loves working with designers, and is passionate about making 
                        the best decisions for the user experience. She learned front-
                        end development at Media Design School in Auckland, and has a 
                        passion for building beautiful, scalable UIs with CSS.
                      </p>
                    </div>
                    <div className={styles.columnCell}>
                      <img
                        src="https://res.cloudinary.com/juliet-brown/image/upload/v1560654288/rectangle_f8zbe7.jpg"
                        className={styles.gridImage}
                      />
                      <div>
                        Usha MacDonald
                      </div>
                      <p className={styles.childParagraph}>
                        Usha got her start in coding early. As a young teen, she 
                        started playing around with code and it wasn’t long before she 
                        discovered the open source community. It impressed her with its 
                        wealth of learning resources and culture of building things to 
                        help people. After a few years as an apprentice at her dad’s IT 
                        business followed by Enspiral Dev Academy’s web development 
                        bootcamp, she contracted for a few months before joining 
                        Springload as a front-end developer.
                      </p>
                    </div>
                    <div className={styles.columnCell}>
                      <img
                        src="https://res.cloudinary.com/juliet-brown/image/upload/v1560654228/rectangle-copy-12_fpsm6s.jpg"
                        className={styles.gridImage}
                      />
                      <div>
                        Kelly Todd
                      </div>
                      <p className={styles.childParagraph}>
                        Kelly studied photography in her native UK, and ran her own 
                        portrait photography business before making the leap into the 
                        tech industry. She’s Springload’s studio and events manager, and 
                        she loves looking after (and being part of) a team of smart, 
                        friendly, vibrant people — which is a real change from working 
                        on her own as a photographer! She finds the tech industry exciting 
                        and ever-changing, and loves that it has the capacity to incite 
                        positive change in the world.
                      </p>
                    </div>
                    <div className={styles.columnCell}>
                      <img
                        src="https://res.cloudinary.com/juliet-brown/image/upload/v1560654228/rectangle-copy-11_is6o9o.jpg"
                        className={styles.gridImage}
                      />
                      <div>
                        Rachel Bolt
                      </div>
                      <p className={styles.childParagraph}>
                        Rachel got her Bachelor of Design with first class honours 
                        at Massey University, and joined Springload as a Summer of Tech 
                        intern at the end of 2018. She was quickly snapped up for a 
                        permanent position. She’s an experience designer who’s passionate 
                        about putting people first – using service, user experience, and 
                        user interface design to create digital experiences that make a 
                        positive impact for people and the planet.
                      </p>
                    </div>
                    <div className={styles.columnCell}>
                      <img
                        src="https://res.cloudinary.com/juliet-brown/image/upload/v1560654227/rectangle-copy-8_hjz9gg.jpg"
                        className={styles.gridImage}
                      />
                      <div>
                        Gisela de la Villa
                      </div>
                      <p className={styles.childParagraph}>
                        Gisela earned her degree in Software Engineering at Instituto 
                        Tecnológico de Buenos Aires in her native Argentina. She came 
                        to New Zealand on a visa sponsored by Touchtech, which merged 
                        with Springload last year. With a background in science and 
                        languages, she believes software engineering is like the creative 
                        writing of mathematical algorithms. She loves that her role as 
                        technical lead allows her to communicate with others while 
                        practising her craft, to solve hard problems and help others 
                        find solutions to theirs.
                      </p>
                    </div>
                    <div className={styles.columnCell}>
                      <img
                        src="https://res.cloudinary.com/juliet-brown/image/upload/v1560654227/rectangle-copy-9_nafyei.jpg"
                        className={styles.gridImage}
                      />
                      <div>
                        Lydie Danet
                      </div>
                      <p className={styles.childParagraph}>
                        Lydie always knew she wanted to solve problems for a living. 
                        Programming didn’t occur to her until after she’d studied both 
                        clock-repairing (which wasn’t creative enough) and cabinet-making 
                        (which was difficult to survive off in her native Paris). After 
                        working in hospitality for a few years and tinkering with a blog 
                        on the side, she realised that becoming a web developer could be 
                        creative, interesting, and viable. She did a bootcamp and an 
                        internship, et voilà! — six years later, she’s still a front-end 
                        developer, and she still loves it.
                      </p>
                    </div>
                    <div className={styles.columnCell}>
                      <img
                        src="https://res.cloudinary.com/juliet-brown/image/upload/v1560654227/rectangle-copy-10_dhodkd.jpg"
                        className={styles.gridImage}
                      />
                      <div>
                        Cate Palmer
                      </div>
                      <p className={styles.childParagraph}>
                        Before training to be a developer at Enspiral Dev Academy, Cate’s 
                        craft was fiction writing - she has an MA from the International 
                        Institute of Modern Letters, and an MFA from the Michener Center 
                        for Writers in Austin, Texas. Now a front-end developer pursuing 
                        her writing alongside her tech career, she’s excited to have the 
                        chance through Grow to work with people from non-STEM backgrounds 
                        who might see tech as an intimidating sector to break into.
                      </p>
                    </div>
                    <div className={styles.columnCell}>
                      <img
                        src="https://res.cloudinary.com/juliet-brown/image/upload/v1560654227/rectangle-copy-7_nz0ttq.jpg"
                        className={styles.responsiveImage}
                      />
                      <div>
                        Juliet Brown
                      </div>
                      <p className={styles.childParagraph}>
                        Juliet is a front-end developer and an artist who studied at Elam 
                        School of Fine Arts, and then at Enspiral Dev Academy. Not content 
                        to leave these two careers in their own separate silos, she’s 
                        excited by the challenge of pushing her art and technology together, 
                        and is inspired by artist/developers like Sarah Drasner and Zach 
                        Lieberman. Outside of her work at Springload, she’s constantly 
                        looking for ways to evolve her art - working on digital animations 
                        and interactive pieces, and drawing and coding together.
                      </p>
                    </div>{" "}
                  </div>
                </div>
              </section>

              <section id="faqs" className={styles.sectionSix}>
                <div className={styles.largeHeading}>
                  Frequently Asked Questions
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.row}>
                    <div className={styles.column}>
                      <div className={styles.columnHeading}>
                        How many applicants do you accept, and how many people apply?
                      </div>
                      <div className={styles.ColumnLeft}>
                        We try to pair two applicants to every coach who’s available. We think 
                        it’s important you get the chance to ask lots of questions and get 
                        one-on-one coaching. Around twenty applicants fit comfortably in the 
                        space Springload has generously let us use. For our first workshop, 
                        we received over a hundred applicants.
                      </div>
                    </div>
                    <div className={styles.column}>
                      <div className={styles.columnHeading}>
                        If I’m not accepted for one workshop, can I reapply?
                      </div>
                      <div className={styles.ColumnRight}>
                        Before we open applications to everyone, we give priority to the 
                        applicants who missed out on the last workshop — so it definitely 
                        pays to be patient! Even if you miss out the first time, you’ll 
                        probably get a chance to attend a later workshop. Once you’ve applied, 
                        we won’t need your full application again. We’ll just email to see if 
                        you’re still keen when applications open for the next workshop.
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.column}>
                      <div className={styles.columnHeading}>
                        Can I apply if I’m a man?
                      </div>
                      <div className={styles.ColumnLeft}>
                        Grow is geared towards providing a space for women and non-binary 
                        people to learn the basics of coding. But we’d definitely encourage 
                        you to make use of some of the awesome online learning platforms 
                        that are out there if you’re curious about learning to code (see 
                        below).
                      </div>
                    </div>
                    <div className={styles.column}>
                      <div className={styles.columnHeading}>
                        Why a workshop specifically for women and non-binary people? Why 
                        not cater to everyone?
                      </div>
                      <div className={styles.ColumnRight}>
                        There’s still a massive gender gap in STEM, and we believe the way 
                        we’re going to have the best shot at closing that gap is by 
                        creating spaces for learning to code that are safe and welcoming 
                        for those who are underrepresented. We are all for doing what we 
                        can to create a more diverse tech sector!
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.column}>
                      <div className={styles.columnHeading}>
                        How much coding experience do I need?
                      </div>
                      <div className={styles.ColumnLeft}>
                        None! We cater to absolute beginners. The aim behind our workshops is 
                        to give those who are totally new to coding a taster of what it’s all 
                        about.
                      </div>
                    </div>
                    <div className={styles.column}>
                      <div className={styles.columnHeading}>
                        What if I don’t have a laptop?
                      </div>
                      <div className={styles.ColumnRight}>
                        Flick us an email at grow@springload.co.nz, and we’ll see what we can 
                        do about sourcing a spare laptop for you to borrow. We want to make 
                        Grow accessible to everyone, so not having a laptop shouldn’t be a 
                        barrier.
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.column}>
                      <div className={styles.columnHeading}>
                        Will you feed us?
                      </div>
                      <div className={styles.ColumnLeft}>
                        Yes! We know you’ll probably get hungry between 6 and 9pm, so we’ll be 
                        providing tasty snacks to help keep you functioning at full capacity.
                      </div>
                    </div>
                    <div className={styles.column}>
                      <div className={styles.columnHeading}>
                        I’m gluten free/vegan/paleo! Do I need to bring my own food?
                      </div>
                      <div className={styles.ColumnRight}>
                       Nope, our application form has a section asking you about your dietary 
                       requirements, and we make sure we cater to those who will be attending 
                       the workshop.
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.column}>
                      <div className={styles.columnHeading}>
                        What will I achieve by the end of the workshop?
                      </div>
                      <div className={styles.ColumnLeft}>
                        You’ll have a basic grasp of what HTML, CSS, and JavaScript are and 
                        what they do in front-end web development. You’ll have put them to 
                        use in a fun, challenging exercise and seen how they can be used to 
                        build some cool stuff on the interwebs!
                      </div>
                    </div>
                    <div className={styles.column}>
                      <div className={styles.columnHeading}>
                        What happens after the workshop?
                      </div>
                      <div className={styles.ColumnRight}>
                        You’ll be able to join the Grow Facebook group and keep up with those 
                        who have Grown with you. And maybe you’ll decide to keep learning to 
                        code by making use of some of the online resources we recommend!
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.column}>
                      <div className={styles.columnHeading}>
                        What’s your relationship to Springload?
                      </div>
                      <div className={styles.ColumnLeft}>
                        All the core Grow team members work at Springload, and Springload has 
                        been very generous in providing us with space to run our workshops in, 
                        food for our participants, and some of our work hours for running the 
                        behind-the-scenes parts of Grow. We sometimes have a few non-
                        Springloaders kindly help us out on workshop nights by acting as 
                        coaches.
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
                  Want to learn the basics of web development? Apply to our next free workshop 
                  and see what it’s all about!
                </div>
                <div className={styles.footerColumn}>
                  <AnchorLink className={styles.link} href="#">
                    Apply to our next workshop
                  </AnchorLink>
                </div>
              </div>

              <div className={styles.columnSection}>
                <div className={styles.largeHeading}>Get in touch</div>
                <div className={styles.footerColumn}>
                  {" "}
                  Any questions or suggestions, or want to be up to date on what’s happening? 
                  Contact us via email or phone, or follow us on social media.
                </div>
                <div className={styles.footerLinkTwoContainer}>
                  <div className={styles.footerColumn}>
                    <AnchorLink className={styles.link} href="#">
                      grow@springload.co.nz
                    </AnchorLink>
                    <AnchorLink className={styles.link} href="#">
                      +64 4 801 8205
                    </AnchorLink>
                    <AnchorLink className={styles.link} href="#">
                      https://twitter.com/growbysl
                    </AnchorLink>
                    <AnchorLink className={styles.link} href="#">
                      https://www.instagram.com/growbyspringload/
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
