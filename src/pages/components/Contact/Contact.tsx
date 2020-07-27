import React from "react"
import styles from "../../Index.module.scss"
import AnchorLink from "react-anchor-link-smooth-scroll"

const ContactData = [
  {
    href: "mailto:grow@springload.co.nz",
    text: "grow@springload.co.nz",
  },
  {
    href: "tel:64-4-801-8205",
    text: "+64 4 801 8205",
  },
]

const Contact = () => {
  return (
    <div className={styles.sectionContact}>
      <div className={styles.wContainer}>
        <div className={styles.gutters}>
          <div className={styles.contactFlex}>
            <div className={styles.contactFlexItem}>
              <h2 className={styles.uMarginBottomXL}>Apply</h2>
              <p
                className={`${styles.headingMediumLight} ${styles.uMarginBottomL}`}
              >
                Want to learn more about wonderful world of coding? Come along
                to our next free workshop – we’d love to have you!
              </p>
              <p>
                <a
                  className={styles.uUnderlineLink}
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd7MIdNliJ_M1RH58qo4Q5TYNxdUYLao_EATktQ7sbt8wK9Sg/viewform"
                >
                  Apply for this workshop
                </a>
              </p>
            </div>

            <div className={styles.contactFlexItem} id="contact">
              <h2 className={styles.uMarginBottomXL}>Get in touch</h2>
              <p
                className={`${styles.headingMediumLight} ${styles.uMarginBottomL}`}
              >
                Any questions or keen to get involved? Contact us through email,
                phone, or social meidia.
              </p>
              <p>
                {ContactData.map(item => {
                  return (
                    <div className={styles.inline}>
                      <AnchorLink
                        className={styles.uUnderlineLink}
                        href={item.href}
                      >
                        {item.text}
                      </AnchorLink>
                    </div>
                  )
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
