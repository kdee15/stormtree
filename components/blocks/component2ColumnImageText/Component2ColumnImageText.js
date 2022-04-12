import { createClient } from "contentful";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import classes from "./Component2ColumnImageText.module.scss";

function Component2ColumnImageText({ contentModule }) {
  const { title, copy, image, imagePosition } = contentModule;
  return (
    <section
      className={`${classes.oTextImageBlock} ${classes[`${imagePosition}`]}`}
    >
      <figure
        className={`${classes.oBlockImage}`}
        style={{
          backgroundImage: `url(http:${image.fields.file.url})`,
        }}
      ></figure>
      <div className={`${classes.oBlockBody}`}>
        <h2 className={classes.aBlockTitle}>{title}</h2>
        <ReactMarkdown>{copy}</ReactMarkdown>
      </div>
    </section>
  );
}

export default Component2ColumnImageText;
