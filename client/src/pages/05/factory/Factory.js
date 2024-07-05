import React from 'react'
import styles from '../factory/factory.module.css'
import image from '../../../images/inddustry.png'
import Header from '../../../components/Header/Header'
import GreenButton from '../../../components/confirmButton/GreenButton'

function Factory() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="Industry" />
        <div className={styles.conatiner}>
            <img src={image} alt="..."  />
            <div className={styles.text}>Put Request</div>
            <GreenButton text="Confirm" />
        </div>

      </div>
    </div>
  )
}

export default Factory
