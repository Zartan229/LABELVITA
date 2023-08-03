import classes from "./style.module.css";
import MessageIcon from "../MessageIcon/index.jsx"

export default function Messagez() {
  return (
    <section className={classes.messageSection}>
    <MessageIcon/>
    <MessageIcon/>
    <MessageIcon/>
    <MessageIcon/>
    </section>
  );
}