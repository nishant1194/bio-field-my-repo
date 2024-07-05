import React, { useState } from "react";
import OtpInput from "react-otp-input";
import styles from "../opt/otp.module.css";
import Header from "../../../components/Header/Header";

export default function Otp() {
  const [otp, setOtp] = useState("");

  return (
    <>
    <div className={styles.mainC}>
    <Header text="Login to PindGrid" />
      <div className={styles.verify}>Verify phone number</div>
      <div className={styles.enter}>
        Enter the 4-Digit code sent to you at +91 8868070206
      </div>

      <div className={styles.otpp}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
        <button className={styles.btn}>CONTINUE</button>
      </div>

      <div className={styles.blewotp}>
        <div className={styles.dontrecieve}>Didn't receive code?</div>
        <div className={styles.resend}>Resend Again</div>
      </div>

      <div className={styles.terms}>By Signing up you agree to our Terms Conditions & Privacy Policy.</div>
      </div>
    </>
  );
}
