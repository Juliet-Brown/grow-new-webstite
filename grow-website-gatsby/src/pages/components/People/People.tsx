import React from "react"
import * as styles from "../../Index.module.scss"

import PeopleData from "./PeopleData"

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
