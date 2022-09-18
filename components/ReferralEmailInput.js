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

    if (checkIfEmailValid(email)) {
      props.handleMessage(true);

      fetch("https://api.jsonbin.io/v3/b/6326ed29a1610e63862f41a0", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key":
            "$2b$10$5Y3QMEr3.Bn38yGSlblxlehKBpxi9NtR0u9msoIqNgsWUYIS5ivJq",
        },
        body: JSON.stringify({ email: email }),
      });
    } else {
      props.handleMessage(false);
    }

    setEmail("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <img src="/images/email icon.svg" />
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
