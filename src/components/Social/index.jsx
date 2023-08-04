import classes from "./style.module.css";
import Google from "../../images/google.svg";
import Facebook from "../../images/Group.svg";
import Apple from "../../images/Vector.svg";

export default function Social() {
  return (
    <section className={classes.section3}>
      <div className={classes.break}>
        <hr className={classes.line} />
        <p>Ou...</p>
        <hr className={classes.line} />
      </div>
      <svg className={classes.blue} xmlns="http://www.w3.org/2000/svg" width="274" height="238" viewBox="0 0 274 238" fill="none">
        <path
          d="M-56.4669 0.580962L71.9739 0.814933C175.878 1.00424 262.698 79.9693 272.711 183.39C283.281 292.564 204.817 390.231 95.9303 403.436L-65.8014 423.049C-155.988 433.987 -242.312 383.114 -276.434 298.918C-306.566 224.567 -289.636 139.421 -233.353 82.2525L-220.339 69.0336C-177.122 25.1376 -118.066 0.468722 -56.4669 0.580962Z"
          fill="url(#paint0_linear_1_33)"
        />
        <defs>
          <linearGradient id="paint0_linear_1_33" x1="-325.28" y1="223.354" x2="288.897" y2="212.969" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2DA1BC" stop-opacity="0.61" />
            <stop offset="1" stop-color="#DCDCDC" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className={classes.socialLink}>
        <img className={classes.socialImg} src={Google} />
        <img className={classes.socialImg} src={Facebook} />
        <img className={classes.socialImg} src={Apple} />{" "}
      </div>
      <p className={classes.socialAccount}>
        Vous n'êtes pas inscrit ?{" "}
        <a className={classes.socialAccountLink} href="./agenda">
          Créer un compte
        </a>
      </p>
    </section>
  );
}
