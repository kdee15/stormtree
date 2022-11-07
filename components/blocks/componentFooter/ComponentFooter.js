import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./ComponentFooter.module.scss";

function Footer({ contentModule }) {
  const { image, linkList } = contentModule;
  console.log("Footer", contentModule);
  return (
    <footer className={classes.oFooter}>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-12 col-md-3 footer-col-1`}>
            <figure className={classes.mLogo}>
              <Image
                className={`${classes.aImage} a-responsive-image`}
                src={image?.fields?.file?.url}
                alt={`title`}
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
                aria-hidden="true"
                layout="responsive"
                priority="true"
              />
            </figure>
          </div>
          <div className={`col-12 col-md-3 footer-col-2`}></div>
          <nav
            className={`col-12 col-md-5 offset-md-1 col-lg-4 offset-lg-2 footer-col-3`}
          >
            <ul className={`${classes.oFooterList} oFooterMenu`}>
              {linkList.map((item, index) => (
                <li key={index}>
                  <Link href={`${item.fields.url}`}>
                    <a
                      className={`${classes.aLink} aBtn a-fnt-16s`}
                      rel="noopener"
                    >
                      {item.fields.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
