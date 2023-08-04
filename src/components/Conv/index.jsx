import classes from "./style.module.css";
import image from "../../images/pfp1.png"


export default function ChatBox() {
  return (
    <section>
      <div className={classes.Chatbox}>
        <p>26/05/23</p>
      </div>
      <div className={classes.chatOutBox}>
        <div className={classes.chatOutFlex}>
            <img src={image} className={classes.chatOutImage}/>
            <p className={classes.chatOutText}>Bonjour, pouvez-vous m’appeler ?</p>
        </div>
        <p className={classes.chatOutTime}>11:29</p>
      </div>
      <div className={classes.chatInBox}>
        <div className={classes.chatInFlex}>
            <img src={image} className={classes.chatInImage}/>
            <p className={classes.chatInText}>Bonjour, je vous contacte dans 1h, ok pour vous ?</p>
        </div>
        <p className={classes.chatInTime}>11:50</p>
      </div>
        <div className={classes.chatOutBox}>
        <div className={classes.chatOutFlex}>
            <img src={image} className={classes.chatOutImage}/>
            <p className={classes.chatOutText}>C’est parfait !</p>
        </div>
        <p className={classes.chatOutTime}>11:29</p>
      </div>
    </section>
  );
}
