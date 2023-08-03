import classes from './style.module.css'


export default function MeetingPlan() {
  return (
    <div className={classes.cardMeeting}>
      <div className={classes.cardMeetingDate}>15<br/> mai</div>
      <div className={classes.cardMeetingCollumn}>
        <a href='/chat' className={classes.cardMeetingPlace}><p className={classes.cardMeetingPlaceAddress}>15 avenue de Meze</p><p className={classes.cardMeetingPlaceTime}>11:00 à 14:00</p></a>
        <a className={classes.cardMeetingPlace}><p className={classes.cardMeetingPlaceAddress}>2 rue du moulin des eaux</p><p className={classes.cardMeetingPlaceTime}>14:00 à 17:00</p></a>
        <a className={classes.cardMeetingPlace}><p className={classes.cardMeetingPlaceAddress}>10 impasse de la Jalade</p><p className={classes.cardMeetingPlaceTime}>17:00 à 18:00</p></a>
      </div>
    </div>
  );
}