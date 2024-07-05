import React from "react";
import styles from "./companyDetails.module.css";
import Header from "../../../components/Header/Header";
import image from "../../../images/image4.png";
import done from "../../../images/done.png";
import GreenButton from "../../../components/confirmButton/GreenButton";

function CompanyDetails() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="Industry" />
        <div className={styles.text2}>Enter your company details</div>
        <img src={image} alt="..." className={styles.image1} />
        <div className={styles.container}>
          <div className={styles.setOfBoxes}>
            <span className={styles.text}>COMPANY NAME</span>
            <div className={styles.box}>
              <span className={styles.text3}>Birla pvt.lim.</span>
              <img src={done} alt="" className={styles.doneimg} />{" "}
            </div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.setOfBoxes}>
            <span className={styles.text}> EMAIL ID</span>
            <div className={styles.box}>
              <span className={styles.text3}>info@birlafarms.com</span>
              <img src={done} alt="" className={styles.doneimg} />{" "}
            </div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.setOfBoxes}>
            <span className={styles.text}>COMPANY NAME</span>
            <div className={styles.box}>
              <span className={styles.text3}>Birla pvt.lim.</span>
              <img src={done} alt="" className={styles.doneimg} />{" "}
            </div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.setOfBoxes}>
            <span className={styles.text}>COMPANY NAME</span>
            <div className={styles.box}>
              <span className={styles.text3}>Birla pvt.lim.</span>
              <img src={done} alt="" className={styles.doneimg} />{" "}
            </div>
            <div className={styles.line}></div>
          </div>
        </div>
        <GreenButton text='NEXT' />
      </div>
    </div>
  );
}

export default CompanyDetails;
