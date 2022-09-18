import { ReferralEmailInput } from "./ReferralEmailInput";
import styles from "./ReferralBox.module.scss";
import { useState } from "react";
import { ReferralCode } from "./ReferralCode";

export function ReferralBox() {
  const [message, setMessage] = useState("");
  const [emailCorrect, setEmailCorrect] = useState(false);

  const showMessage = (emailCorrect) => {
    let newMessage = emailCorrect ? (
      <p className={styles.success}>Your email is confirmed!</p>
    ) : (
      <p className={styles.error}>Error State</p>
    );
    setMessage(newMessage);
    if (emailCorrect) {
      setEmailCorrect(true);
    }
  };

  return (
    <div className={styles.main}>
      <div>
        <h1>Refer friends and get rewards</h1>
        <p>
          Refer your freinds to us andf earn hotel booking vouchers. We'll give
          you 1 coin for each friend that installs our extension. Minimum
          cash-out at 20 coins.
        </p>
        <div className={styles.emailMessage}>{message}</div>

        {emailCorrect ? (
          <ReferralCode />
        ) : (
          <ReferralEmailInput message={message} handleMessage={showMessage} />
        )}
      </div>
      <p>Limits on max rewards apply.</p>
    </div>
  );
}
