import React from "react";
import styles from "../inputDetailss/inputtDetailss.module.css";
import rupee from "../../../images/rupee.png";
import cart from "../../../images/cart.png";
import scale from "../../../images/Scale.png";
import Header from "../../../components/Header/Header";

function InputtDetailss() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="Industry" />
        <div className={styles.text4}>Type of biomass</div>
        <div className={styles.biomasses}>
          <div className={styles.biomassesAll}>All</div>
          <div className={styles.biomassestypes}>PADDY STRAW</div>
          <div className={styles.biomassestypes}>WHEAT STRAW</div>
          <div className={styles.biomassestypes}>SUGARCANE BAGASSE</div>
        </div>
        <div className={styles.text4}>QUANTITY</div>
        <div className={styles.input}>
          <img src={cart} alt="" className={styles.image2} />
          <input
            type="number"
            placeholder="Enter the number"
            className={styles.inputNumber}
          />
        </div>
        <div className={styles.input}>
          <img src={scale} alt="..." className={styles.image2} />
          <select className={styles.inputNumber} >
          <option value="Kilogram">Enter the unit</option>
          <option value="Kilogram">Kilogram</option>
          <option value="Ton">Ton</option>
          </select>
        </div>

        <div className={styles.text5}>quote your price (per unit)</div>
        <div className={styles.input}>
          <img src={rupee} alt="" className={styles.image2} />
          <input
            type="number"
            placeholder="Enter the number"
            className={styles.inputNumber}
          />
        </div>

        <button className={styles.confirm}>Confirm</button>
      </div>
    </div>
  );
}

export default InputtDetailss;
