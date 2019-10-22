import * as React from "react"
import * as styles from "../../Index.module.scss"
import AnchorLink from "react-anchor-link-smooth-scroll"
import footerData from "./footerData"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.gutters}>
        <div className={styles.footerLinkContainer}>
          {footerData.map((section, i) => {
            return (
              <AnchorLink
                className={styles.footerLink}
                href={section.href}
                key={i}
              >
                {section.name}
              </AnchorLink>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
