import styles from "./ReferralBox.module.scss";

export function ReferralBox() {
  return (
    <div className={styles.main}>
      <h1>Refer friends and get rewards</h1>
      <p>
        Refer your freinds to us andf earn hotel booking vouchers. We'll give
        you 1 coin for each friend that installs our extension. Minimum cash-out
        at 20 coins.
      </p>
      <form action="">
        <input type="email" placeholder="Enter your email address" />
        <button>Get Refferal Link</button>
      </form>
      <p>Limits on max rewards apply.</p>
    </div>
  );
}
