import React, { Fragment } from "react"
import * as styles from "../../Index.module.scss"

import PeopleData from "./PeopleData"

const People = () => {
  return (
    <Fragment>
      <div id="people" className={styles.headingLarge}>
        People
      </div>
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
              <div className={styles.gridItemContainer} key={i}>
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
        </div>
      </div>
    </Fragment>
  )
}

export default People
