import classes from "./style.module.css";
import Image from "../../images/arrowright.png"
import Img from "../../images/photo.png"

export default function Send() {
  return (
    <section className={classes.section4}>
        <hr/>
        <div className={classes.sendLine}><img className={classes.sendImg} src={Img}/><input className={classes.sendInput} type="text" placeholder="Votre message..."/><img className={classes.sendImage} src={Image}/></div>
</section>
  );
}
