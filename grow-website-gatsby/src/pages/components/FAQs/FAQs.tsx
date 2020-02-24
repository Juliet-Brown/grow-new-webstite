import React from "react"
import * as styles from "../../Index.module.scss"
import FAQData from "./FAQData"

const FAQs = () => {
  return (
    <div id="faqs" className={styles.sectionFaqs}>
      <h2>Frequently asked questions</h2>
      {FAQData.map(item => {
        return (
          <>
            <div className={`${styles.headingXSmall} ${styles.uMarginBottomM}`}>
              {item.category}
            </div>
            <div className={styles.grid}>
              {item.questions.map((item, i) => {
                return (
                  <div className={styles.gridItemContainer} key={i}>
                    <div className={styles.headingSmall}>{item.question}</div>
                    <div className={styles.paragraphSmall}>
                      <p dangerouslySetInnerHTML={item.answer} />
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )
      })}
    </div>
  )
}

export default FAQs
