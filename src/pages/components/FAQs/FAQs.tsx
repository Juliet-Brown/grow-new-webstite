import React from "react"
import * as styles from "../../Index.module.scss"

//Todo: move out into own file.
const FAQData = [
  {
    questions: [
      {
        question: "How big are the workshops?",
        answer: (
          <>
            We try to allocate one coach to every two applicants. Around twenty
            applicants fit comfortably in the space at Springload.
          </>
        ),
      },
      {
        question: "If I’m not accepted for one workshop, can I reapply?",
        answer: (
          <>
            If you miss out on a workshop, you’ll get priority next time round.
            We’ll notify you before we open applications to the public.
          </>
        ),
      },
      {
        question:
          "Why a workshop specifically for women and non-binary people?",
        answer: (
          <>
            There’s still a huge gender gap in STEM, and we believe creating
            spaces for learning to code for those who are underrepresented will
            help us close that gap. We are all for doing what we can to create a
            more diverse tech sector.
          </>
        ),
      },
      {
        question: "How much coding experience do I need?",
        answer: (
          <>
            None! We cater to absolute beginners. The aim behind our workshops
            is to give those who are totally new to coding a taster of what it’s
            all about.
          </>
        ),
      },
    ],
  },
  {
    questions: [
      {
        question: "What if I don’t have a laptop?",
        answer: (
          <>
            No laptop, no problem. We want to make Grow accessible so flick us
            an email at{" "}
            <a
              className={styles.uUnderlineParagraphLink}
              href="grow@springload.co.nz"
            >
              grow@springload.co.nz
            </a>{" "}
            , and we’ll source a laptop for you to borrow.
          </>
        ),
      },
      {
        question: "Will you feed us?",
        answer: (
          <>
            Yes — we’ll be providing tasty snacks to help keep you functioning
            at full capacity. You can specify any dietary requirements you may
            have on your application form.
          </>
        ),
      },
      {
        question: "What will I achieve by the end of the workshop?",
        answer: (
          <>
            You’ll have a basic grasp of what HTML, CSS, and JavaScript are.
            You’ll have used them in a fun, challenging exercise and seen how
            they can be used to build cool stuff on the internet.
          </>
        ),
      },
      {
        question: "What happens after the workshop?",
        answer: (
          <>
            You’ll be able to join the Grow Facebook group and keep up with
            those who have grown with you. And maybe you’ll decide to keep
            learning to code by making use of some of the online resources we
            recommend.
          </>
        ),
      },
      {
        question: "What’s your relationship to Springload?",
        answer: (
          <>
            The core Grow team members work at Springload, and Springload has
            been very generous in providing us with space to run our workshops
            in, food for our participants, and some of our work hours for
            running the behind-the-scenes parts of Grow. We sometimes have a few
            non-Springloaders kindly acting as coaches on workshop nights too.
          </>
        ),
      },
    ],
  },
]

const FAQs = () => {
  return (
    <div id="faqs" className={styles.sectionFaqs}>
      <h2 className={styles.uMarginBottomSM}>Frequently asked questions</h2>
      {FAQData.map((item, i) => {
        return (
          <div key={i} className={styles.grid}>
            {item.questions.map((item, i) => {
              return (
                <div className={styles.gridItemImageContainer} key={i}>
                  <div className={styles.headingMedium}>{item.question}</div>
                  <div className={styles.paragraphSmall}>
                    <p>{item.answer} </p>
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default FAQs
