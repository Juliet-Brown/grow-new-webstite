import React from "react"
import * as styles from "../../Index.module.scss"
import FAQData from "./FAQData"

const FAQs = () => {
  return (
    <div id="faqs" className={styles.sectionFaqs}>
      <h2 className={styles.uMarginBottomXL}>Frequently asked questions</h2>
      {FAQData.map(item => {
        return (
          <>
            <div className={`${styles.headingXSmall} ${styles.uMarginBottomL}`}>
              {item.category}
            </div>
            <div className={styles.grid}>
              {item.questions.map((item, i) => {
                return (
                  <div className={styles.gridItemImageContainer} key={i}>
                    <h3>{item.question}</h3>
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
