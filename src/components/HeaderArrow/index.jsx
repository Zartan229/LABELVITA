import classes from './style.module.css'
import image from '../../images/arrow.svg'

export default function HeaderArrow({title}) {

  return (
    <header className={classes.headerChat}>
        <a href='./agenda'><img className={classes.headerChatImage} src={image}/></a><p className={classes.headerChatGreeting} >{title}</p>
    </header>
  );
}


