import classes from './style.module.css'


export default function MeetingPlan() {
  return (
    <div className={classes.cardMeeting}>
      <div className={classes.cardMeetingDate}>15<br/> mai</div>
      <div className={classes.cardMeetingCollumn}>
        <div className={classes.cardMeetingPlace}><p>15 avenue de Meze</p><p>11:00 à 14:00</p></div>
        <div className={classes.cardMeetingPlace}><p>2 rue du moulin des eaux</p><p>14:00 à 17:00</p></div>
        <div className={classes.cardMeetingPlace}><p>10 impasse de la Jalade</p><p>17:00 à 18:00</p></div>
      </div>
    </div>
  );
}