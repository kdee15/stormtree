import { useState } from "react";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import Link from "next/dist/client/link";
import classes from "./Nav.module.scss";

export default function Nav(contentModule) {
  const [isActive, setIsActive] = useState();
  const handleToggle = () => setIsActive(!isActive);

  console.log("contentModule", contentModule);

  const { menuLinks } = contentModule.contentModule;

  console.log("menuLinks", menuLinks);

  return (
    <nav className={classes.navMain}>
      <span onClick={handleToggle} className={classes.burgerWrapper}>
        <BurgerMenu />
      </span>
      <div
        className={`${classes.mNavMobile} ${
          isActive ? `${classes.navOpen}` : `${classes.navClosed}`
        }`}
      >
        <div onClick={handleToggle} className={classes.mNavBurger}>
          <BurgerMenu handleToggle={handleToggle} isActive={isActive} />
        </div>
        <ul className={classes.mMenu}>
          {menuLinks.map((link, index) => (
            <li className={classes.navLink} key={index}>
              <Link onClick={handleToggle} href={link.fields.url}>
                <a
                  className={classes.aLink}
                  target={`${link.fields.isExternal ? "_blank" : "_parent"}`}
                >
                  {link.fields.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
