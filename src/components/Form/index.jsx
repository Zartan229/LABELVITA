import classes from './style.module.css'

export default function Form() {
  return (
    <section className={classes.section2}>
        <form >
        <div className={classes.formStyle}>
            <input className={classes.inputStyle} type="text" placeholder="Votre adresse email"/>
            <input className={classes.inputStyle} type="password" placeholder="Mot de passe"/>
        </div>    
            <div className={classes.loginStyle}>
            <p className={classes.passwordForgot}><a href="#">Mot de passe oublié ?</a>
            </p><button className={classes.login} >Connexion</button>
            </div>
        </form>
    </section>
  );
}