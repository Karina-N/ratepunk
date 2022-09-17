import styles from "./ReferralBox.module.scss";
import { useState } from "react";

export function ReferralEmailInput(props) {
  const [email, setEmail] = useState("");

  const checkIfEmailValid = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    checkIfEmailValid(email)
      ? props.handleMessage(true)
      : props.handleMessage(false);

    setEmail("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Get Refferal Link</button>
      </form>
    </>
  );
}
