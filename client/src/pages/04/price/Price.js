import React from "react";
import styles from "../price/price.module.css";
import image from "../../../images/rupeedesign.png";
import icon from "../../../images/rupee.png";
import Header from "../../../components/Header/Header";

function Price() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="" />
        <div className={styles.text2}>Price Quotation</div>
        <div className={styles.text3}>
          Please Enter the available quantity of paddy straw
        </div>
        <img src={image} alt="..." className={styles.image1} />
        <div className={styles.text1}>
          Enter your desired price{" "}
          <span className={styles.perUnit}>(per unit)</span>
        </div>
        <div className={styles.input}>
          <img src={icon} alt="" className={styles.image2} />
          <input
            type="number"
            placeholder="Enter the Amount"
            className={styles.inputNumber}
          />
        </div>

        <button className={styles.confirm}>Confirm</button>
      </div>
    </div>
  );
}

export default Price;
