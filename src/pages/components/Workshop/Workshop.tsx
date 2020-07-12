import React from "react"
import Moment from "moment"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Event } from "schema-dts"
import { JsonLd } from "react-schemaorg"

import * as styles from "../../Index.module.scss"
import WorkshopData from "./WorkshopData"

const Workshop = () => {
  return (
    <div id="workshop">
      <div className={styles.sectionWorkshop}>
        <h2 className={styles.uMarginBottomL}>Workshops</h2>
        <div className={styles.headingXSmall}>Upcoming Event</div>
        <div className={styles.workshopImageContainer}>
          <div className={styles.ratioContent}>
            <img
              className={styles.workshopImage}
              src={WorkshopData.image}
              alt={WorkshopData.imageAltText}
            />
          </div>
        </div>
        <h2>{WorkshopData.name}</h2>
        <div className={styles.uWidthSixtyPercent}>
          <div className={styles.headingSubtitle}>
            {Moment(WorkshopData.dateTime).format("ha, dddd do MMMM YYYY")} |{" "}
            {WorkshopData.locationName}, {WorkshopData.locationAddress}
          </div>
          {WorkshopData.description.map((paragraph, i) => {
            return (
              <p className={styles.paragraphSmall} key={i}>
                {paragraph}
              </p>
            )
          })}
          <div className={styles.uMarginBottomS}>
            <AnchorLink
              className={WorkshopData.isWorkshopOpen ? "" : styles.linkDisabled}
            >
              Apply for this workshop
            </AnchorLink>
          </div>
          {!WorkshopData.isWorkshopOpen && (
            <>
              <p
                className={`${styles.paragraphEmphasis} ${styles.uMarginBottomS}`}
              >
                Sorry — this workshop is now fully booked!
              </p>
              <p className={styles.paragraphSmall}>
                We’ll announce the next one on{" "}
                <AnchorLink
                  href={WorkshopData.instagramHref}
                  className={styles.linkContact}
                >
                  Instagram
                </AnchorLink>{" "}
                and{" "}
                <AnchorLink
                  href={WorkshopData.twitterHref}
                  className={styles.linkContact}
                >
                  Twitter
                </AnchorLink>{" "}
                {WorkshopData.nextWorkshopAnnounced}
              </p>
            </>
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
                  streetAddress: WorkshopData.locationAddress,
                },
                name: WorkshopData.locationName,
              },
              name: WorkshopData.name,
              description: WorkshopData.description.join(" "),
              startDate: Moment(WorkshopData.dateTime).format(
                "YYYY-MM-DDTHH:mm:SS"
              ),
              endDate: Moment(WorkshopData.dateTime).format("YYYY-MM-DD"),
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Workshop
