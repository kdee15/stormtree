import { useState } from "react";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import classes from "./Nav.module.scss";

export default function Nav() {
  const [isActive, setIsActive] = useState();
  const handleToggle = () => setIsActive(!isActive);

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
          <li className={classes.navLink}>
            <a className={classes.aLink} href="#top" onClick={handleToggle}>
              HOME
            </a>
          </li>
          <li className={classes.navLink}>
            <a className={classes.aLink} href="#about" onClick={handleToggle}>
              ABOUT
            </a>
          </li>
          <li className={classes.navLink}>
            <a
              className={classes.aLink}
              href="#services"
              onClick={handleToggle}
            >
              SERVICES
            </a>
          </li>
          <li className={classes.navLink}>
            <a
              className={classes.aLink}
              href="#training"
              onClick={handleToggle}
            >
              TRAINING
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
