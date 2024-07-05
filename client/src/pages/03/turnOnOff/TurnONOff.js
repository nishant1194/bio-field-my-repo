import React from 'react'
import styles from './turnONOff.module.css'
import Header from '../../../components/Header/Header'
import img from '../../../images/motoImg.png'
import icon from '../../../images/Clock.png'


function TurnONOff() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="Farmer" />
        <img src={img} alt="" className={styles.image1} />
        <div className={styles.container}>
        <div className={styles.text1}>Current STATE OF <br/>THE 
        PUMP</div>
        <img src={img} alt="" className={styles.image2} />
        </div>
        <div className={styles.text2}>TURN ON TIME</div>
        <div className={styles.container2}>
        <div className={styles.texxt}>8:00 AM</div>
        <img src={icon} alt="" className={styles.image2} />
        </div>
      </div>
    </div>
  )
}

export default TurnONOff
