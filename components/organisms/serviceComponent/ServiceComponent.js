import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./ServiceComponent.module.scss";

function ServiceComponent({ contentModule }) {
  const { title, copy, image, subtitle, imagePosition } = contentModule;
  return (
    <section
      className={`${classes.oTextImageBlock} ${classes[`${imagePosition}`]}`}
    >
      <figure
        className={`${classes.oBlockImage}`}
        style={{
          backgroundImage: `url(http:${image.fields.file.url})`,
        }}
      >
        <h2 className={classes.aBlockTitle}>{title}</h2>
      </figure>
      <div className={`${classes.oBlockBody}`}>
        <div>{documentToReactComponents(copy)}</div>
      </div>
    </section>
  );
}

export default ServiceComponent;
