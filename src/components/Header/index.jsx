import classes from "./style.module.css";
import imageChatBox from "../../images/chatBox.png";
import imageProfile from "../../images/pfp.png";

export default function Header() {
  return (
    <header className={classes.headerLoged}>
      <img className={classes.headerImage} src={imageProfile} />
      <p className={classes.headerGreeting}>Bienvenue Marie</p>
      <img className={classes.headerChatBox} src={imageChatBox} />
    </header>
  );
}
