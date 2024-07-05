import React from "react";
import styles from "../enterAddress/enterAddress.module.css";
import loction from "../../../images/location.png";
import marker from "../../../images/marker.png";
import Header from "../../../components/Header/Header";
function EnterAddress() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="Industry" />
        <div className={styles.text2}>Enter your Address</div>
        <div className={styles.text3}>
        Please enter your location or allow access to your location
        </div>
        <div className={styles.input}>
          <img src={loction} alt="" className={styles.image2} />
          <span className={styles.text5}>Use current location</span>
        </div>
        <div className={styles.input2}>
          <img src={marker} alt="" className={styles.image2} />
          <input className={styles.text6} placeholder="Enter a new address" />
        </div>
      </div>
    </div>
  );
}

export default EnterAddress;
