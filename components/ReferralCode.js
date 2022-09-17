import styles from "./ReferralBox.module.scss";

import { useState } from "react";

export function ReferralCode() {
  const [referralCode, setReferralCode] = useState(
    "https://ratepunk.com/referral"
  );

  const copyReferralLink = () => {
    let code = document.getElementById("referralLink");
    code.select();
    code.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(code.value);
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
