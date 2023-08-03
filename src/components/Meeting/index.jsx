import classes from './style.module.css'
import MeetingPlan from '../MeetingPlan';

export default function Meeting() {
  return (
    <section>
        <h1 className={classes.titleMeeting}>Mes rendez-vous</h1>
        <MeetingPlan/>
    </section>
  );
}