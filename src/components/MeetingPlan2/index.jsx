import classes from "./style.module.css";

export default function MeetingPlan2() {
  return (
    <div className={classes.cardMeetingOpacity}>
      <div className={classes.cardMeetingDate}>
        17
        <br /> mai
      </div>
      <div className={classes.cardMeetingCollumn}>
        <div className={classes.cardMeetingPlace}>
          <p className={classes.cardMeetingPlaceAddress}>Mme Bénédite</p>
          <p className={classes.cardMeetingPlaceTime}>11:00 à 14:00</p>
        </div>
        <div className={classes.cardMeetingPlace}>
          <p className={classes.cardMeetingPlaceAddress}>Mr Jacob</p>
          <p className={classes.cardMeetingPlaceTime}>14:00 à 17:00</p>
        </div>
        <div className={classes.cardMeetingPlace}>
          <p className={classes.cardMeetingPlaceAddress}>Mlle Edith Larousse</p>
          <p className={classes.cardMeetingPlaceTime}>17:00 à 18:00</p>
        </div>
      </div>
    </div>
  );
}
