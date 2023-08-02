import classes from './style.module.css'

export default function Greeting() {
  return (
    <section className={classes.section1}>
      <h2 className={classes.presentationTitle}>Connexion à votre espace</h2>
      <p className={classes.presentationText}>Bienvenue Marie !</p>
    </section>
  );
}



