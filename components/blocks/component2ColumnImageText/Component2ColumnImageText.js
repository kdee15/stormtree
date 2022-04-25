import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
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
        <div>{documentToReactComponents(copy)}</div>
      </div>
    </section>
  );
}

export default Component2ColumnImageText;
