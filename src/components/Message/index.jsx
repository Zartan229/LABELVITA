import classes from "./style.module.css";
import MessageIcon from "../MessageIcon/index.jsx";
import MessageIconIndex from "../MessageIconIndex/index.jsx";

export default function Messagez() {
  return (
    <section className={classes.messageSection}>
      <svg className={classes.messageImage} xmlns="http://www.w3.org/2000/svg" width="147" height="388" viewBox="0 0 147 388" fill="none">
        <path
          d="M-79.2613 385.413L-107.458 387.164C-198.34 392.806 -279.517 330.702 -297.846 241.51C-318.308 141.943 -253.616 44.8066 -153.857 25.3053L-42.8376 3.60277C-7.71082 -3.26396 28.7055 1.93127 60.5108 18.3467C150.668 64.8785 174.705 182.841 109.945 260.941L69.3823 309.859C32.3845 354.478 -21.4099 381.821 -79.2613 385.413Z"
          fill="url(#paint0_linear_14_494)"
        />
        <defs>
          <linearGradient id="paint0_linear_14_494" x1="-49.5" y1="-7" x2="-49.5" y2="397" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A0C73E" />
            <stop offset="1" stop-color="#DCDCDC" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <MessageIconIndex />
      <MessageIcon />
      <MessageIcon />
      <MessageIcon />
      <svg  className={classes.messageImageBottom} xmlns="http://www.w3.org/2000/svg" width="224" height="129" viewBox="0 0 224 129" fill="none">
        <path
          d="M219.693 0.525042L239.35 0.667459C346.009 1.44024 434.348 83.6836 442.732 190.015C451.204 297.465 375.224 393.203 268.658 409.356L233.482 414.688C134.87 429.635 40.0318 370.647 9.84111 275.588C-10.1641 212.599 1.78393 143.812 41.8586 91.259L46.1262 85.6625C87.3753 31.5691 151.669 0.0321481 219.693 0.525042Z"
          fill="url(#paint0_linear_14_493)"
        />
        <defs>
          <linearGradient id="paint0_linear_14_493" x1="-21.2805" y1="222.021" x2="454.948" y2="213.969" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2DA1BC" stop-opacity="0.61" />
            <stop offset="1" stop-color="#DCDCDC" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}
