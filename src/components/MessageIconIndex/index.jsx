import classes from "./style.module.css";
import Image from "../../images/pfp1.png"


export default function MessageIconIndex() {
  return (

    <a href='./mail' className={classes.iconCard}>
        <div  className={classes.iconCardImageFlex}>
        <img className={classes.iconCardImage} src={Image}/>
        <div  className={classes.iconCardImageTextFlex}>
         <p className={classes.iconCardImageTextTitle}>Jenny Hue</p>
         <p className={classes.iconCardImageText}>06 45 78 98 54</p>
         <p className={classes.iconCardImageText}>C’est parfait !</p>
        </div>
        </div>
        <p className={classes.iconCardImageTime}>11:29</p>
    </a>
  );
}