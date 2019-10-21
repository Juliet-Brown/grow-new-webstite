import * as React from "react"
import Moment from "moment"
import * as styles from "../Index.module.scss"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Event } from "schema-dts"
import { JsonLd } from "react-schemaorg"

type Props = {
  imageSrc: string
  name: string
  dateTime: string
  locationName: string
  locationAddress: string
  description: string[]
}

export default class Workshop extends React.Component<Props> {
  public render() {
    Moment.locale("en")

    return (
      <div>
        <div className={styles.workshopImageContainer}>
          <div className={styles.ratioContent}>
            <img
              className={styles.workshopImage}
              src={this.props.imageSrc}
              alt="Participants write code at a Grow workshop"
            />
          </div>
        </div>
        <div className={styles.headingMedium}>{this.props.name}</div>
        <div className={styles.uWidthSixtyPercent}>
          <div className={styles.headingSubtitle}>
            {Moment(this.props.dateTime).format("ha, dddd do MMMM YYYY")} |
            {this.props.locationName}, {this.props.locationAddress}
          </div>
          {this.props.description.map((descriptionParagraph, i) => {
            return (
              <p className={styles.paragraphSmall} key={i}>
                {descriptionParagraph}
              </p>
            )
          })}

          <div className={styles.uMarginBottomS}>
            <AnchorLink className={styles.linkDisabled}>
              Apply for this workshop
            </AnchorLink>
          </div>
          <p className={`${styles.paragraphEmphasis} ${styles.uMarginBottomS}`}>
            Sorry - this workshop is now fully booked!
          </p>
          <p className={styles.paragraphSmall}>
            We'll announce the next one on{" "}
            <AnchorLink
              href="https://www.instagram.com/growbyspringload"
              className={styles.linkContact}
            >
              Instagram
            </AnchorLink>{" "}
            and{" "}
            <AnchorLink
              href="https://www.twitter.com/growbysl"
              className={styles.linkContact}
            >
              Twitter
            </AnchorLink>{" "}
            - in early 2020!
          </p>
        </div>

        {/* 
          This will help the event information be "machine readable".
          For more info, see this page
          https://developers.google.com/search/docs/data-types/event
        */}
        <JsonLd<Event>
          item={{
            "@context": "http://schema.org",
            "@type": "Event",
            location: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                streetAddress: this.props.locationAddress,
              },
              name: this.props.locationName,
            },
            name: this.props.name,
            description: this.props.description.join(" "),
            startDate: Moment(this.props.dateTime).format(
              "YYYY-MM-DDTHH:mm:SS"
            ),
            endDate: Moment(this.props.dateTime).format("YYYY-MM-DD"),
          }}
        />
      </div>
    )
  }
}
