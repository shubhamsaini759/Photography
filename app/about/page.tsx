import React from "react";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";

const About = () => {
  return (
    <>
      <div className={styles.aboutSection}>
        <div className={styles.heroImage}>
          <h1>A story - minded film and video production company</h1>
        </div>
        <div className={styles.desc}>
          <p>
            Thourgh careful consideration of color, light, and narrative, French
            pohotographer Charlotte Lapulres creates seenes
          </p>
        </div>
        {/* my values */}
        <div className={styles.valuesSection}>
          <h2>My Values</h2>
          <div className={styles.valueList}>
            {values.map((x, ind) => (
              <div className={styles.valueCard} key={ind}>
                <p>{x.number}</p>
                <div className={styles.divider}></div>
                <div className={styles.contentBox}>
                  <h3>{x.value}</h3>
                  <p className={styles.valueDesc}>{x.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* story */}
      <div className={styles.storySection}>
        <div className={styles.storyWrapper}>
          <div className={styles.storyHeader}>
            <h2>My Story</h2>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.leftImageWrapper}>
              <div className={styles.storyImage}></div>
            </div>
            <div className={styles.rightContentWrapper}>
              <div className={styles.contentWrapper}>
                <p className={styles.storyDesc}>
                  My journey into photography began in the sun-drenched
                  landscapes of California, where I received my first camera as
                  a teenager—a birthday gift that unknowingly shaped the rest of
                  my life. That moment sparked a passion that led me to study
                  fine arts in college and eventually make my home here, where I
                  now capture love stories for couples from all walks of life.As
                  a wedding photographer, I specialize in documenting real,
                  unfiltered moments with an artistic eye. My style is natural,
                  candid, and emotion-driven—focused on telling your unique
                  story through beautiful, timeless imagery. I take pride in
                  helping people feel at ease in front of the camera, which my
                  clients often mention as one of the reasons they feel truly
                  themselves in their photos.Over the years, my work has been
                  featured in several bridal magazines and popular wedding
                  blogs—an honor that continually inspires me to keep growing
                  and creating. Outside of photography, you'll likely find me
                  hiking the Blue Ridge Mountains, browsing local art festivals,
                  or spending time with my loyal sidekick, Max, my rescue
                  dog.From coast to coast, I’m grateful every day to turn
                  once-in-a-lifetime moments into lasting memories. I’d be
                  honored to be a part of your day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* image */}
      <div className={styles.randomImage}>
        <div className={styles.imageBox}></div>
      </div>
      <Footer />
    </>
  );
};

export default About;

const values = [
  {
    number: "00.00.01",
    value: "Authenticy",
    desc: "Real moments. Raw emotions. We believe in capturing the truth of every scene — no filters, no fakes.",
  },
  {
    number: "00.00.02",
    value: "Personal",
    desc: "Every shoot is built around you. We listen, connect, and create with intention, making each frame reflect who you truly are.",
  },
  {
    number: "00.00.03",
    value: "Integrity",
    desc: "We stand by our word and our work. Transparent communication and ethical creativity guide everything we do.",
  },
  {
    number: "00.00.04",
    value: "Inspire",
    desc: "We don’t just take photos — we spark emotion, curiosity, and imagination. Every image should move you.",
  },
];
