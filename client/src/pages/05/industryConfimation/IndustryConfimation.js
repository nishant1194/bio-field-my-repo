import React from 'react'
import styles from './industryConfimation.module.css'
import Header from '../../../components/Header/Header'
import check from "../../../images/icon-done.png";


function IndustryConfimation() {
  return (
    <div>
        <div className={styles.mainC}>
        <Header text="Industry" />
        <img src={check} className={styles.checkimg}/>
        <div className={styles.box}>
            <div className={styles.text1}>You Request has been sent Successfully</div>
            <div className={styles.text2}>Your listing has been submitted. You will be notified once we assign a Mover to you.</div>
            <div className={styles.text3}>KEEP BROWSING</div>
        </div>

        </div>
    </div>
  )
}

export default IndustryConfimation
