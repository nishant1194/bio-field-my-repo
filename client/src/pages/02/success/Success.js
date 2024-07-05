import React from "react";
import styles from "../success/success.module.css";
import image from "../../../images/loginSuccesssfulyy.png";
import done from "../../../images/done.png";


function Success() {
  return (
    <div>
      <div className={styles.mainC}>
        <div className={styles.login}>Login Successfully</div>
        <img src={image} alt="" className={styles.imgg} />
        <div className={styles.biodata}>
          <div className={styles.fullName}>FULL NAME</div>
          <div className={styles.container}>
            
            <div className={styles.name}>Harshdeep Singh</div>
            <img src={done} alt="" className={styles.doneimg}/>
          </div>
          <div className={styles.line}></div>
        </div>
        <btn className={styles.confirm}>CONFIRM</btn>
      </div>
    </div>
  );
}

export default Success;
