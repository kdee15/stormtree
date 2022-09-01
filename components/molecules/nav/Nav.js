import classes from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav className={classes.navMain}>
      <ul>
        <li className={classes.navLink}>
          <a className={classes.aLink} href="#top">
            HOME
          </a>
        </li>
        <li className={classes.navLink}>
          <a className={classes.aLink} href="#about">
            ABOUT
          </a>
        </li>
        <li className={classes.navLink}>
          <a className={classes.aLink} href="#services">
            SERVICES
          </a>
        </li>
        <li className={classes.navLink}>
          <a className={classes.aLink} href="#training">
            TRAINING
          </a>
        </li>
      </ul>
    </nav>
  );
}
