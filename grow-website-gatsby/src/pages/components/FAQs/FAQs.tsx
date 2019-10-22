import React, { Fragment } from "react"
import * as styles from "../../Index.module.scss"
import FAQData from "./FAQData"

const FAQs = () => {
  return (
    <div id="faqs">
      <div className={styles.headingLarge}>Frequently asked questions</div>
      {FAQData.map(item => {
        return (
          <Fragment>
            <div className={`${styles.headingXSmall} ${styles.uMarginBottomM}`}>
              {item.category}
            </div>
            <div className={styles.grid}>
              {item.questions.map((item, i) => {
                return (
                  <div className={styles.gridItemContainer} key={i}>
                    <div className={styles.headingSmall}>{item.question}</div>
                    <div className={styles.paragraphSmall}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}

export default FAQs
