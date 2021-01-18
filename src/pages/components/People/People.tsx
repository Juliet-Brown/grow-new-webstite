import React from "react"
import * as styles from "../../Index.module.scss"

import cateImage from "../../../images/cate-Normal.jpg"
import cateFunImage from "../../../images/cate-Fun.jpg"

import giselaImage from "../../../images/gisela-Normal.jpg"
import giselaFunImage from "../../../images/gisela-Fun.jpg"

import julietImage from "../../../images/juliet-Normal.jpg"
import julietFunImage from "../../../images/juliet-Fun.jpg"

import katieImage from "../../../images/katie-Normal.jpg"
import katieFunImage from "../../../images/katie-Fun.jpg"

import kellyImage from "../../../images/kelly-Normal.jpg"
import kellyFunImage from "../../../images/kelly-Fun.jpg"

import lydieImage from "../../../images/lydie-Normal.jpg"
import lydieFunImage from "../../../images/lydie-Fun.jpg"

import rachelImage from "../../../images/rachel-Normal.jpg"
import rachelFunImage from "../../../images/rachel-Fun.jpg"

import ushaImage from "../../../images/usha-Normal.jpg"
import ushaFunImage from "../../../images/usha-Fun.jpg"

import jessImage from "../../../images/jess-Normal.jpg"
import jessFunImage from "../../../images/jess-Fun.jpg"

import michaelaImage from "../../../images/michaela-Normal.jpg"
import michaelaFunImage from "../../../images/michaela-Fun.jpg"

const PeopleData = {
  description: [
    {
      one:
        "We’re the dedicated, approachable, and welcoming team behind Grow. We all work at Springload and we all want to make learning the basics of web development as fun and accessible as we can for you.",
      two:
        "Not all of us code (but most of us do). And not all of us knew that tech was where we wanted to end up. Some of us came from non-coding backgrounds: graphic design, fine art, creative writing, clock repairing, cabinet making, and photography.",
    },
  ],
  people: [
    {
      url: "https://www.springload.co.nz/people/katie-day/",
      name: "Katie Day",
      imageSrc: katieImage,
      imageSrcTwo: katieFunImage,
    },
    {
      url: "https://www.springload.co.nz/people/rachel-bolt/",
      name: "Rachel Bolt",
      imageSrc: rachelImage,
      imageSrcTwo: rachelFunImage,
    },
    {
      url: "https://www.springload.co.nz/people/usha-macdonald/",
      name: "Usha MacDonald",
      imageSrc: ushaImage,
      imageSrcTwo: ushaFunImage,
    },
    {
      url: "https://www.springload.co.nz/people/kelly-todd/",
      name: "Kelly Todd",
      imageSrc: kellyImage,
      imageSrcTwo: kellyFunImage,
    },
    {
      url: "https://www.springload.co.nz/people/gisela-de-la-villa/",
      name: "Gisela de la Villa",
      imageSrc: giselaImage,
      imageSrcTwo: giselaFunImage,
    },
    {
      url: "https://www.springload.co.nz/people/lydie-danet/",
      name: "Lydie Danet",
      imageSrc: lydieImage,
      imageSrcTwo: lydieFunImage,
    },
    {
      url: "https://www.springload.co.nz/people/cate-palmer/",
      name: "Cate Palmer",
      imageSrc: cateImage,
      imageSrcTwo: cateFunImage,
    },
    {
      url: "https://www.springload.co.nz/people/juliet-brown/",
      name: "Juliet Brown",
      imageSrc: julietImage,
      imageSrcTwo: julietFunImage,
    },
    {
      url: "https://www.springload.co.nz/people/jess-kennair/",
      name: "Jessica Kennair",
      imageSrc: jessImage,
      imageSrcTwo: jessFunImage,
    },
    {
      url: "https://www.springload.co.nz/people/michaela-chan/",
      name: "Michaela Chan",
      imageSrc: michaelaImage,
      imageSrcTwo: michaelaFunImage,
    },
  ],
}

const People = () => {
  return (
    <>
      <div className={styles.gutters}>
        <h2 className={styles.uMarginBottomSM} id="people">
          People
        </h2>
        <div className={styles.uMarginBottomML}>
          <div className={styles.uWidthSixtyPercent}>
            {PeopleData.description.map((paragraph, i) => {
              return (
                <div key={i}>
                  <div
                    className={`${styles.uMarginBottomSM} ${styles.paragraphSmall}`}
                  >
                    <p className={styles.paragraphSmall}>{paragraph.one}</p>
                  </div>
                  <p className={styles.paragraphSmall}>{paragraph.two}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className={styles.uMarginBottomL}>
        <div className={styles.gridPeople}>
          <div className={styles.peopleContainer}>
            {PeopleData.people.map((person, i) => {
              return (
                <a key={i} href={person.url} aria-labelledby={person.name}>
                  <img
                    src={person.imageSrc}
                    onMouseOver={(e) =>
                      (e.currentTarget.src = person.imageSrcTwo)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.src = person.imageSrc)
                    }
                    className={styles.peopleImage}
                    alt=""
                  />
                  <div className={styles.smallGutters}>
                    <div className={styles.headingSmall}>{person.name}</div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default People
