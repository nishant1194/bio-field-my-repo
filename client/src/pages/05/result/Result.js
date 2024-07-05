import React, { useState } from "react";
import styles from "../result/result.module.css";
import Header from "../../../components/Header/Header";
import img from "../../../images/img.png";
import GreenButton from "../../../components/confirmButton/GreenButton";

function Result() {

  return (
    <div className={styles.mainC}>
      <Header text="Industry" />
      <div className={styles.text}>Type of biomass</div>
      <div className={styles.containerr}>
        <img src={img} alt="" className={styles.image1} />
        <div className={styles.box}>
          <div className={styles.text1}>Sandu Farms</div>
          <div className={styles.text2}>Paddy Straw</div>
          <div className={styles.text3}>₹700 / Ton</div>
          <div className={styles.box2}>
          <div className={styles.text4}>100 TON</div>
          <div className={styles.text4}>10 KM from you </div>
          <div className={styles.text3}>ADD</div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.containerr}>
        <img src={img} alt="" className={styles.image1} />
        <div className={styles.box}>
          <div className={styles.text1}>Sandu Farms</div>
          <div className={styles.text2}>Paddy Straw</div>
          <div className={styles.text3}>₹700 / Ton</div>
          <div className={styles.box2}>
          <div className={styles.text4}>100 TON</div>
          <div className={styles.text4}>10 KM from you </div>
          <div className={styles.text3}>ADD</div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.containerr} >
        <img src={img} alt="" className={styles.image1} />
        <div className={styles.box}>
          <div className={styles.text1}>Sandu Farms</div>
          <div className={styles.text2}>Paddy Straw</div>
          <div className={styles.text3}>₹700 / Ton</div>
          <div className={styles.box2}>
          <div className={styles.text4}>100 TON</div>
          <div className={styles.text4}>10 KM from you </div>
          <div className={styles.text3}>ADD</div>

          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      
      <GreenButton text ="SUBMIT REQUEST" />
    </div>
  );
}

export default Result;
