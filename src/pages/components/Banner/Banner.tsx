import * as React from "react"
import * as styles from "../../Index.module.scss"
import growBannerImage from "../../../images/grow-banner-image.jpg"

const Banner = () => {
  return (
    <>
      <img
        className={styles.bannerImage}
        src={growBannerImage}
        width="1435px"
        alt="The Grow team"
      />
    </>
  )
}

export default Banner
