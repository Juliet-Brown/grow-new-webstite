import * as React from "react"
import * as styles from "../../Index.module.scss"
import AnchorLink from "react-anchor-link-smooth-scroll"
import FooterData from "./FooterData"
import springloadIcon from "../../../images/springload.svg"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.gutters}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLinkContainer}>
            {FooterData.sections.map((section, i) => {
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
            <div className={styles.footerIcon}>
              <img src={springloadIcon} />
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer
