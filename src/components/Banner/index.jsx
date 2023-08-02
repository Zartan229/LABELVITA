import classes from './style.module.css'

export default function Banner({ image }) {
  return (
<header>
    <svg className={classes.green} xmlns="http://www.w3.org/2000/svg" width="155" height="304" viewBox="0 0 155 304" fill="none">
    <path d="M-71.2613 301.413L-99.458 303.164C-190.34 308.806 -271.517 246.702 -289.846 157.51C-310.308 57.943 -245.616 -39.1934 -145.857 -58.6947L-34.8376 -80.3972C0.289185 -87.264 36.7055 -82.0687 68.5108 -65.6533C158.668 -19.1215 182.705 98.8411 117.945 176.941L77.3823 225.859C40.3845 270.478 -13.4099 297.821 -71.2613 301.413Z" fill="url(#paint0_linear_1_32)"/>
    <defs>
    <linearGradient id="paint0_linear_1_32" x1="-41.5" y1="-91" x2="-41.5" y2="313" gradientUnits="userSpaceOnUse">
    <stop stop-color="#A0C73E"/>
    <stop offset="1" stop-color="#DCDCDC" stop-opacity="0"/>
    </linearGradient>
    </defs>
    </svg>
    <img className={classes.logo} src={image} alt="Logo" />
</header>
  );
}