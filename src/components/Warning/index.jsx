import classes from "./style.module.css";

export default function Warning() {
  return (
    <footer>
        <div className={classes.warningGroup}>
      <svg xmlns="http://www.w3.org/2000/svg" width="129" height="129" viewBox="0 0 129 129" fill="none">
        <circle className={classes.warningTitleCircle} cx="64.5" cy="64.5" r="64.5" fill="#2EA5E1" />
      </svg>
      <p className={classes.warningTitle}>
        Signaler <br /> mon arrivée
      </p>
      </div>
    </footer>
  );
}
