import React from "react"
import * as styles from "../../Index.module.scss"

import cateImage from "../../../images/cate.png"
import giselaImage from "../../../images/gisela.png"
import julietImage from "../../../images/juliet.png"
import katieImage from "../../../images/katie.png"
import kellyImage from "../../../images/kelly.png"
import lydieImage from "../../../images/lydie.png"
import oisínImage from "../../../images/oisín.png"
import rachelImage from "../../../images/rachel.png"
import ushaImage from "../../../images/usha.png"

const PeopleData = {
  description: [
    "We’re the dedicated, approachable, and welcoming team behind Grow. We all work at Springload and we all want to make learning the basics of web development as fun and accessible as we can for you.",
    "Not all of us code (but most of us do). And not all of us knew that tech was where we wanted to end up. Some of us came from non-coding backgrounds: graphic design, fine art, creative writing, clock repairing, cabinet making, and photography.",
  ],
  people: [
    {
      name: "Katie Day",
      imageSrc: katieImage,
    },
    {
      name: "Rachel Bolt",
      imageSrc: rachelImage,
    },
    {
      name: "Usha MacDonald",
      imageSrc: ushaImage,
    },
    {
      name: "Kelly Todd",
      imageSrc: kellyImage,
    },
    {
      name: "Gisela de la Villa",
      imageSrc: giselaImage,
    },
    {
      name: "Lydie Danet",
      imageSrc: lydieImage,
    },
    {
      name: "Cate Palmer",
      imageSrc: cateImage,
    },
    {
      name: "Juliet Brown",
      imageSrc: julietImage,
    },
  ],
}

const People = () => {
  return (
    <>
      <h2 id="people">People</h2>
      <div className={styles.uMarginBottomML}>
        <div className={styles.uWidthSixtyPercent}>
          {PeopleData.description.map((paragraph, i) => {
            return (
              <p className={styles.paragraphSmall} key={i}>
                {paragraph}
              </p>
            )
          })}
        </div>
      </div>

      <div className={styles.uMarginBottomL}>
        <div className={styles.grid}>
          {PeopleData.people.map((person, i) => {
            return (
              <div className={styles.imageContainer} key={i}>
                <div className={styles.gridItem}>
                  <div className={styles.ratioContent}>
                    <img
                      src={person.imageSrc}
                      className={styles.gridImage}
                      alt=""
                    />
                  </div>
                </div>
                <div className={styles.headingSmall}>{person.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default People
