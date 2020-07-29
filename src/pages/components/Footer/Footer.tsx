import * as React from "react"
import * as styles from "../../Index.module.scss"
import AnchorLink from "react-anchor-link-smooth-scroll"
import springloadIcon from "../../../images/springload.svg"
import instagramIcon from "../../../images/instagram.svg"
import twitterIcon from "../../../images/twitter.svg"

const FooterData = {
  sections: [
    {
      name: "Twitter",
      href: "https://twitter.com/springloadnz",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/springloadnz",
    },
  ],
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wContainer}>
        <div className={styles.gutters}>
          <div className={styles.footerContainer}>
            <div className={styles.footerLinkContainer}>
              {FooterData.sections.map((section, i) => {
                return (
                  <a className={styles.footerLink} href={section.href} key={i}>
                    {section.name}
                  </a>
                )
              })}
            </div>
            <a
              href="https://www.springload.co.nz/"
              aria-label="Learn more about Springload"
            >
              <div>
                <span
                  className={`${styles.footerIcon} ${styles.footerIconSpringload}`}
                ></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
