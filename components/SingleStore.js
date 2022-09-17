import styles from "./StoresBar.module.scss";
import Link from "next/link";

export function SingleStore(props) {
  return (
    <Link href={props.link}>
      <div className={styles.singleStore}>
        <img src={props.src} alt={props.alt} />
        <div>
          <p>available in the</p>
          <p>{props.title}</p>
        </div>
      </div>
    </Link>
  );
}
