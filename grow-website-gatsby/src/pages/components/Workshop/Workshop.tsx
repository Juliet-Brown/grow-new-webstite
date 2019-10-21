import React, { Fragment } from "react"
import Moment from "moment"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Event } from "schema-dts"
import { JsonLd } from "react-schemaorg"

import * as styles from "../../Index.module.scss"
import workshopData from "./workshopData"

const Workshop = () => {
  return (
    <div id="workshop">
      <div className={styles.sectionWorkshop}>
        <div className={styles.headingLarge}>Workshops</div>
        <div className={styles.headingXSmall}>Upcoming Event</div>
        <div className={styles.workshopImageContainer}>
          <div className={styles.ratioContent}>
            <img
              className={styles.workshopImage}
              src={workshopData.image}
              alt={workshopData.imageAltText}
            />
          </div>
        </div>
        <div className={styles.headingMedium}>{workshopData.name}</div>
        <div className={styles.uWidthSixtyPercent}>
          <div className={styles.headingSubtitle}>
            {Moment(workshopData.dateTime).format("ha, dddd do MMMM YYYY")} |
            {workshopData.locationName}, {workshopData.locationAddress}
          </div>
          {workshopData.description.map((paragraph, i) => {
            return (
              <p className={styles.paragraphSmall} key={i}>
                {paragraph}
              </p>
            )
          })}
          <div className={styles.uMarginBottomS}>
            <AnchorLink
              className={workshopData.isWorkshopOpen ? "" : styles.linkDisabled}
            >
              Apply for this workshop
            </AnchorLink>
          </div>
          {workshopData.isWorkshopOpen ? (
            ""
          ) : (
            <Fragment>
              <p
                className={`${styles.paragraphEmphasis} ${styles.uMarginBottomS}`}
              >
                Sorry — this workshop is now fully booked!
              </p>
              <p className={styles.paragraphSmall}>
                We’ll announce the next one on{" "}
                <AnchorLink
                  href={workshopData.instagramHref}
                  className={styles.linkContact}
                >
                  Instagram
                </AnchorLink>{" "}
                and{" "}
                <AnchorLink
                  href={workshopData.twitterHref}
                  className={styles.linkContact}
                >
                  Twitter
                </AnchorLink>{" "}
                {workshopData.nextWorkshopAnnounced}
              </p>
            </Fragment>
          )}
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
                  streetAddress: workshopData.locationAddress,
                },
                name: workshopData.locationName,
              },
              name: workshopData.name,
              description: workshopData.description.join(" "),
              startDate: Moment(workshopData.dateTime).format(
                "YYYY-MM-DDTHH:mm:SS"
              ),
              endDate: Moment(workshopData.dateTime).format("YYYY-MM-DD"),
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Workshop
