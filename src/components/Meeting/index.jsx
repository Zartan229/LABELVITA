import classes from './style.module.css'
import MeetingPlan from '../MeetingPlan';
import MeetingPlan2 from '../MeetingPlan2';

export default function Meeting() {
  return (
    <section>
        <h1 className={classes.titleMeeting}>Mes rendez-vous</h1>
        <MeetingPlan/>
        <MeetingPlan2/>
    </section>
  );
}