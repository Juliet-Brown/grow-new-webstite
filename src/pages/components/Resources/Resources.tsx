import * as React from "react"
import * as styles from "../../Index.module.scss"
import stepByStepGuide from "../../../static/step-by-step-guide.pdf"
import pdfIcon from "../../../images/pdf-icon.png"

const ResourcesData = {
  description: [
    {
      one:
        "Whether or not you’ve attended one of our workshops, we’ve created these learning resources to help you on your coding journey.",
    },
  ],
  resources: [
    {
      title: "Grow workshop step-by-step guide",
      description:
        "This step-by-step guide takes you through the coding exercise we do in our three-hour workshop. If you’ve already attended a workshop, consider it a roadmap to what we did, which you can work through again at your own pace. Usually three hours is not enough time to fully understand everything or ingrain what you learned, so going over the material again can be hugely beneficial. But even if you haven’t attended a workshop, this guide is designed to stand alone so that anyone who’s interested in learning to code can work through it. And if you haven’t attended a workshop yet but want to, we’d highly recommend it as preparation!",
      linkIcon: pdfIcon,
      linkTitle: "Grow step-by-step guide",
      linkUrl: stepByStepGuide
    },
  ],
}

const Resources = () => {
  return (
    <div className={styles.gutters}>
      <h2 className={styles.uMarginBottomSM} id="resources">
        Resources
      </h2>
      <div className={`${styles.uWidthSixtyPercent} ${styles.uMarginBottomSM}`}>
        {ResourcesData.description.map((paragraph, i) => {
          return (
            <div key={i}>
              <p className={styles.paragraphSmall}>{paragraph.one}</p>
            </div>
          )
        })}
      </div>
      {ResourcesData.resources.map((resource, i) => {
        return (
          <div key={i} className={styles.grid}>
            <div className={styles.gridItemImageContainer} key={i}>
              <div className={styles.headingMedium}>{resource.title}</div>
              <div className={styles.paragraphSmall}>
                <p className={styles.uMarginBottomSM}>{resource.description}</p>
                <a className={styles.linkResource} href={resource.linkUrl}>
                  <img className={styles.linkIcon} src={resource.linkIcon}></img>
                  <p>{resource.linkTitle}</p>
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Resources
