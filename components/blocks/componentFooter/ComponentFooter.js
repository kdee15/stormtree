import React from "react";
import Link from "next/link";
import classes from "./ComponentFooter.module.scss";

function Footer({ contentModule }) {
  const { linkList } = contentModule;
  console.log("Links", linkList);
  return (
    <footer className={classes.oFooter}>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-12 col-md-3 footer-col-1`}>hello</div>
          <div className={`col-12 col-md-3 footer-col-2`}>hello</div>
          <nav
            className={`col-12 col-md-5 offset-md-1 col-lg-4 offset-lg-2 footer-col-3`}
          >
            <ul className={`${classes.oFooterList} oFooterMenu`}>
              {linkList.map((item, index) => (
                <li key={index}>
                  <Link href={`${item.fields.url}`}>
                    <a className={`aBtn a-fnt-16s btnAlt`} rel="noopener">
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
