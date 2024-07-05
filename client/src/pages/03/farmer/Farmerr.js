import React from 'react'
import styles from '../farmer/farmer.module.css'
import pump from '../../../images/pump.png'
import requestpicker from '../../../images/requestPicker.png'
import Header from '../../../components/Header/Header'

function Farmerr() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="Farmer" />
        <div className={styles.conatiner}>
            <img src={pump} alt="..."  />
            <button className={styles.btns}>WATER PUMP CONTROL</button>
        </div>

        <div className={styles.lines}>
            <div className={styles.line}></div>
            <div className={styles.or}>OR</div>
            <div className={styles.line}></div>

        </div>
        <div className={styles.conatiner}>
            <img src={requestpicker} alt="..."  />
            <button className={styles.btns}>REQUEST PICKUP</button>
        </div>
      </div>
    </div>
  )
}

export default Farmerr
