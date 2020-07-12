import React from "react"
import * as styles from "../../Index.module.scss"

const FAQData = [
  {
    questions: [
      {
        question: "Why is diversity important?",
        answer: {
          __html:
            "More diversity in tech means better products — products that reflect the needs of our evolving world. It also means a more supportive working environment, full of people with different perspectives. But we can’t sit around waiting for a more diverse community to appear. We need to take a stand and make it happen.",
        },
      },
      {
        question: "What is that?",
        answer: {
          __html:
            "We respect each other. We embrace diversity because we know we’re all different but deep down the same. We’re human and we recognise some days some of us just aren’t feeling it.",
        },
      },
      {
        question: "I don’t know how to do this?",
        answer: {
          __html:
            "We have certain ways of doing things, but we’re not inflexible. We adapt. Choose the right tools and people for the job. Our creative thinking is grounded in practicality and delivering value.",
        },
      },
      {
        question: "I don’t know how to do this?",
        answer: {
          __html:
            "We have certain ways of doing things, but we’re not inflexible. We adapt. Choose the right tools and people for the job. Our creative thinking is grounded in practicality and delivering value.",
        },
      },
    ],
  },
  {
    questions: [
      {
        question: "What are the best…?",
        answer: {
          __html:
            "Curiosity didn’t kill the cat. It made it smarter, faster and more useful. We’re always learning. We’re nimble and clever – ready to spring into action.",
        },
      },
      {
        question: "Who can I talk to?",
        answer: {
          __html:
            "Breathe. It’ll be okay. We take our work seriously but life is too short and absurd not to see its lighter side. We joke. We banter. We laugh. We see the bigger picture.",
        },
      },
    ],
  },
]

// export default FAQData

const FAQs = () => {
  return (
    <div id="faqs" className={styles.sectionFaqs}>
      <h2 className={styles.uMarginBottomXL}>Frequently asked questions</h2>
      {FAQData.map(item => {
        return (
          <>
            <div className={`${styles.headingXSmall} ${styles.uMarginBottomL}`}>
              {item.category}
            </div>
            <div className={styles.grid}>
              {item.questions.map((item, i) => {
                return (
                  <div className={styles.gridItemImageContainer} key={i}>
                    <h3>{item.question}</h3>
                    <div className={styles.paragraphSmall}>
                      <p dangerouslySetInnerHTML={item.answer} />
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )
      })}
    </div>
  )
}

export default FAQs
