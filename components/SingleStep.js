import styles from "./Steps.module.scss";

export function SingleStep(props) {
  return (
    <div className={styles.singleStep}>
      <img src={props.src} alt={props.title} />
      <div className={styles.singleStepText}>
        <h4>{props.stepNo}</h4>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
