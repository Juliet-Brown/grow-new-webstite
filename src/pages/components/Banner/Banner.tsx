import * as React from "react"
import * as styles from "../../Index.module.scss"
import growBannerImage from "../../../images/team-image.jpg"

const Banner = () => {
  return (
    <img
      className={styles.bannerImage}
      src={growBannerImage}
      alt="The Grow team"
    />
  )
}

export default Banner
