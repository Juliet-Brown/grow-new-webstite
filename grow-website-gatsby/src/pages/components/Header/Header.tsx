import * as React from "react"
import * as styles from "../../Index.module.scss"
import AnchorLink from "react-anchor-link-smooth-scroll"

import growLogo from "../../../images/grow-logo.png"
import HeaderData from "./HeaderData"

const Header = () => {
  return (
    <header className={styles.gutters}>
      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <img src={growLogo} alt="" />
        </div>
        <ul className={styles.headerMenu}>
          {HeaderData.map((section, i) => {
            return (
              <li key={i}>
                <AnchorLink href={section.href}>{section.name}</AnchorLink>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

export default Header
