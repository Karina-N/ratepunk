import styles from "./ReferralBox.module.scss";

import { useState } from "react";

export function ReferralCode() {
  const [referralCode, setReferralCode] = useState(
    "https://ratepunk.com/referral"
  );

  const copyReferralLink = () => {
    let referralString = document.getElementById("referralLink");
    referralString.select();
    referralString.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(referralString.value);
  };

  return (
    <div className={styles.referralLink}>
      <input
        type="text"
        name="email"
        defaultValue={referralCode}
        id="referralLink"
      />
      <button onClick={() => copyReferralLink()}>Copy</button>
    </div>
  );
}
