import * as React from "react"
import * as styles from "../../Index.module.scss"
import AnchorLink from "react-anchor-link-smooth-scroll"

import contactData from "./contactData"

const Contact = () => {
  return (
    <div className={styles.sectionContact}>
      <div className={styles.gutters}>
        <div className={styles.flexWrapper}>
          <div className={styles.flexItem}>
            <div className={styles.headingLarge}>Apply</div>
            <div className={styles.paragraphLarge}>
              Want to learn the basics of web development? Apply to our next
              free workshop and see what it’s all about!
            </div>
            <div className={styles.paragraphLarge}>
              <AnchorLink href="#">Apply to our next workshop</AnchorLink>
            </div>
          </div>

          <div className={styles.flexItem} id="contact">
            <div className={styles.headingLarge}>Get in touch</div>
            <div className={styles.paragraphLarge}>
              {" "}
              Any questions or suggestions, or want to be up to date on what’s
              happening? Contact us via email or phone, or follow us on social
              media.
            </div>
            <div className={styles.paragraphLarge}>
              {contactData.map(item => {
                return (
                  <div className={styles.flex}>
                    <AnchorLink href={item.href} className={styles.linkContact}>
                      {item.text}
                    </AnchorLink>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
