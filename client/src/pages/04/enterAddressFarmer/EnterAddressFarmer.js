import React from "react";
import styles from "../enterAddressFarmer/enterAddressFarmer.module.css";
import loction from "../../../images/location.png";
import marker from "../../../images/marker.png";
import Header from "../../../components/Header/Header";
function EnterAddressFarmer() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="Farmer" />
        <div className={styles.text2}>Find a Mover near you!</div>
        <div className={styles.text3}>
        Please enter your location or allow access to your location to find movers near you.        </div>
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


export default EnterAddressFarmer
