import * as React from "react"
import Moment from "moment"
import * as styles from "../Index.module.scss"
import AnchorLink from "react-anchor-link-smooth-scroll"

export default class Workshop extends React.Component {
  public render() {
    Moment.locale("en")

    return (
      <div>
        <img
          className={styles.imageMedium}
          src={this.props.imageSrc}
          alt="rectangle"
        />
        <div className={styles.headingMedium}>{this.props.name}</div>
        <div className={styles.uWidthSixtyPercent}>
          <div className={styles.headingSubtitle}>
            {Moment(this.props.dateTime).format("ha, dddd do MMMM YYYY")} |
            {this.props.locationName}, {this.props.locationAddress}
          </div>
          {this.props.description.map(descriptionParagraph => {
            return (
              <p className={styles.paragraphSmall}>{descriptionParagraph}</p>
            )
          })}
          <div className={styles.uMarginBottomS}>
            <AnchorLink href="#">Apply for this workshop</AnchorLink>
          </div>
          <p className={styles.paragraphSmall}>
            We’ll let you know if you’ve secured a space in the workshop by 28
            June.
          </p>
        </div>
      </div>
    )
  }
}
