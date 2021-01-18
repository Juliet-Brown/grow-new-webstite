import * as React from "react"
import * as styles from "../../Index.module.scss"
import AnchorLink from "react-anchor-link-smooth-scroll"

import growLogo from "../../../images/grow-logo.svg"

const HeaderData = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Workshops",
    href: "#workshop",
  },
  {
    name: "People",
    href: "#people",
  },
  {
    name: "Resources",
    href: "#resources",
  },
  {
    name: "FAQs",
    href: "#faqs",
  },
  {
    name: "Contact",
    href: "#contact",
  },
]

const Header = () => {
  return (
    <header id="top">
      <div className={`${styles.header} ${styles.gutters}`}>
        <div className={styles.paragraphEmphasis}>
          <img
            className={styles.headerGrowLogo}
            src={growLogo}
            alt="grow logo"
          />
        </div>
        <ul className={styles.headerList}>
          {HeaderData.map((section, i) => {
            return (
              <li className={styles.headerListItems} key={i}>
                <AnchorLink className={styles.headerLink} href={section.href}>
                  {section.name}
                </AnchorLink>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

export default Header
