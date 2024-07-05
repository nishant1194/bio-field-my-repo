import React from "react";
import styles from "./typeLocationFarmer.module.css";
import loction from "../../../images/location2.png";
import close from "../../../images/close.png";
import marker from "../../../images/marker.png";
import Header from "../../../components/Header/Header";
function TypeLocationFarmer() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="" />
        <div className={styles.text2}>Find a Mover near you!</div>
        <div className={styles.text3}>
        Please enter your location or allow access to your location to find movers near you.        </div>
        <div className={styles.enterI}>

        <div className={styles.input2}>
          <img src={marker} alt="" className={styles.image2} />
          <input className={styles.text6} placeholder="Enter a new address" />
        </div>
        <img src={close} alt="" />
        </div>
        <div> 
        <div className={styles.input}>
          <img src={loction} alt="" className={styles.image2} />
          <div className={styles.container}>
            <div className={styles.text}>Wheat fields</div>
            <div className={styles.address}>Punjab 143419</div>
          </div>
        </div>
        <div className={styles.line}></div>
        </div>
        <div> 
        <div className={styles.input}>
          <img src={loction} alt="" className={styles.image2} />
          <div className={styles.container}>
            <div className={styles.text}>Wheat fields Public School</div>
            <div className={styles.address}>Bada Road Punjab 143419</div>
          </div>
        </div>
        <div className={styles.line}></div>
        </div>
        <div> 
       
        </div>
        <div> 
        <div className={styles.input}>
          <img src={loction} alt="" className={styles.image2} />
          <div className={styles.container}>
            <div className={styles.text}>Sukhbir Agro Energy Limited</div>
            <div className={styles.address}>Arazi Katoria, Punjab 142052</div>
          </div>
        </div>
        <div className={styles.line}></div>
        </div>
      </div>
    </div>
  )
}



export default TypeLocationFarmer
