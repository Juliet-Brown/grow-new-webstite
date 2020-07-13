import React from "react"
import Moment from "moment"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Event } from "schema-dts"
import { JsonLd } from "react-schemaorg"
import * as styles from "../../Index.module.scss"
import workshopImage from "../../../images/workshop-image.png"

const WorkshopData = {
  name: "Introduction to coding basics",
  image: workshopImage,
  imageAltText: "Participants write code at a Grow workshop",
  dateTime: "2019-11-13T18:00:00",
  locationName: "Springload",
  locationAddress: "Level 6, 7 Dixon St, Wellington",
  description: [
    "In this workshop, we’ll cover the essentials of each of the three front-end web languages: HTML, CSS, and JavaScript. You’ll come away with a small project you can keep working on in your own time to fine-tune your coding skills.",
    "All you need is your laptop and yourself — no specialist software or programs. There’ll be food and drink to keep you fuelled and focused. Be ready to learn, have fun, and meet like-minded future coding hotshots.",
  ],
  isWorkshopOpen: false,
  instagramHref: "https://www.instagram.com/growbyspringload",
  twitterHref: "https://www.twitter.com/growbysl",
  nextWorkshopAnnounced:
    "We’ll let you know if you’ve secured a space in the workshop by 5th August.",
}

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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd7MIdNliJ_M1RH58qo4Q5TYNxdUYLao_EATktQ7sbt8wK9Sg/viewform">
              Apply for this workshop
            </a>
          </div>
          {!WorkshopData.isWorkshopOpen && (
            <>
              <p
                className={`${styles.paragraphEmphasis} ${
                  styles.uMarginBottomS
                } ${WorkshopData.isWorkshopOpen ? "" : styles.linkDisabled}`}
              >
                Sorry — this workshop is now fully booked!
              </p>
              <p className={styles.paragraphSmall}>
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
