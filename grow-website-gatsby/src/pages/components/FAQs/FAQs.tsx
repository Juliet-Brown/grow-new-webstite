import React from "react"
import * as styles from "../../Index.module.scss"
import FAQData from "./FAQData"
import FAQ from "./FAQ"

const FAQs = () => {
  return (
    <div id="faqs">
      <div className={styles.headingLarge}>Frequently asked questions</div>
      {FAQData.map(item => {
        return (
          <>
            <div className={`${styles.headingXSmall} ${styles.uMarginBottomM}`}>
              {item.category}
            </div>
            <div className={styles.grid}>
              {item.questions.map((item, i) => {
                return <FAQ item={item} i={i} />
              })}
            </div>
          </>
        )
      })}
    </div>
  )
}

export default FAQs
