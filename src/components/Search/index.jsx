import classes from "./style.module.css";
import chatBox from "../../images/chatSmall.svg";
import suitCase from "../../images/suitcase.svg"
import chatIcon from "../../images/chat.svg"

export default function Search() {
  return (
    <section className={classes.sectionSearch}>
      <svg className={classes.searchLoop} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
        <path
          d="M7 1C5.81331 1 4.65328 1.35189 3.66658 2.01118C2.67989 2.67047 1.91085 3.60754 1.45673 4.7039C1.0026 5.80025 0.88378 7.00665 1.11529 8.17054C1.3468 9.33443 1.91825 10.4035 2.75736 11.2426C3.59648 12.0818 4.66557 12.6532 5.82946 12.8847C6.99335 13.1162 8.19975 12.9974 9.2961 12.5433C10.3925 12.0891 11.3295 11.3201 11.9888 10.3334C12.6481 9.34672 13 8.18669 13 7C12.9999 5.40873 12.3677 3.88267 11.2425 2.75747C10.1173 1.63227 8.59127 1.0001 7 1Z"
          stroke="#AFABAB"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path d="M11.8 11.8L16 16" stroke="#AFABAB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
      </svg>
      <input className={classes.inputSearch} type="search" placeholder="Prénom, nom..." />
      <div className={classes.rowSearch}>
        <a href="#" className={classes.searchTagBlue}>
          <img className={classes.imageTag} src={chatBox} />
          <p>Tous</p>
        </a>
        <a href="#" className={classes.searchTag}>
          <img className={classes.imageTag} src={chatIcon} />
          <p>Non lus</p>
        </a>
        <a href="#" className={classes.searchTag}>
          <img className={classes.imageTag} src={suitCase} />
          <p>Archivés</p>
        </a>
      </div>
    </section>
  );
}
