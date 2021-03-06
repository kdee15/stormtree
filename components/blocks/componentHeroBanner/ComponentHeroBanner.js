import { createClient } from "contentful";
import classes from "./ComponentHeroBanner.module.scss";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

function ComponentHeroBanner({ heroBanner }) {
  const { backgroundImage, logo } = heroBanner;
  return (
    <section className={classes.oHeroBlock}>
      <div className={`${classes.oContentBlock}`}>
        <figure className={classes.mLogo}>
          <Image
            className={`${classes.aImage} a-responsive-image`}
            src={logo.fields.file.url}
            alt={`title`}
            width={logo.fields.file.details.image.width}
            height={logo.fields.file.details.image.height}
            aria-hidden="true"
            layout="responsive"
            priority="true"
          />
        </figure>
      </div>
      <figure className={classes.introImage}>
        <Image
          className={classes.oImageBlock}
          src={backgroundImage.fields.file.url}
          alt={`title`}
          width={backgroundImage.fields.file.details.image.width}
          height={backgroundImage.fields.file.details.image.height}
          aria-hidden="true"
          layout="responsive"
          priority="true"
        />
      </figure>
    </section>
  );
}

export default ComponentHeroBanner;
