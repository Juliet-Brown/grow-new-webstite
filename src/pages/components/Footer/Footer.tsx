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
      href: "https://www.twitter.com/growbysl",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/growbyspringload",
    },
    {
      name: "Facebook",
      href: "#",
    },
    {
      name: "Back to Top",
      href: "#top",
    },
  ],
}

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
