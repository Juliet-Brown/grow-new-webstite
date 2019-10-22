import * as React from "react"
import * as styles from "../../Index.module.scss"

const About = () => {
  return (
    <div id="about">
      <div className={styles.sectionAbout}>
        <h1 className={styles.headingXLarge}>
          Empowering women to thrive in tech
        </h1>
        <p className={`${styles.paragraphLarge} ${styles.uWidthEightyPercent}`}>
          Grow is a series of self-contained workshops for women who want to
          learn the basics of web development. Each workshop provides a fun,
          practical intro to HTML, CSS, and JavaScript. Run by an all-women,
          all-volunteer cast of Springloaders, Grow workshops are free,
          inclusive, safe, and welcoming for even the most novice of newbies.
        </p>
      </div>
    </div>
  )
}

export default About
