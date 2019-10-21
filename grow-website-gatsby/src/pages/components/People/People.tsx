import React, { Fragment } from "react"
import * as styles from "../../Index.module.scss"

import peopleData from "./peopleData"

const People = () => {
  return (
    <Fragment>
      <div id="people" className={styles.headingLarge}>
        People
      </div>
      <div className={styles.uMarginBottomML}>
        <div className={styles.uWidthSixtyPercent}>
          <p className={styles.paragraphSmall}>
            We’re the dedicated, approachable and welcoming team behind Grow. We
            all work at Springload and have been generously given time and
            support during our work hours to make Grow what it is.
          </p>
          <p className={styles.paragraphSmall}>
            Not all of us code (but most of us do). And not all of us knew that
            tech was where we wanted to end up. Some of us came from eclectic,
            non-coding backgrounds: graphic design, fine art, creative writing,
            clock repairing, cabinet making, and photography. But what we all
            want is to help make learning the basics of web development as fun
            and accessible as we can for you.
          </p>
        </div>
      </div>

      <div className={styles.uMarginBottomL}>
        <div className={styles.grid}>
          {peopleData.map(person => {
            return (
              <div className={styles.gridItemContainer}>
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
                <p className={styles.paragraphSmall}>{person.description}</p>
              </div>
            )
          })}
          }
        </div>
      </div>
    </Fragment>
  )
}

export default People
