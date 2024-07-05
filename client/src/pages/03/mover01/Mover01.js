import React from 'react'
import styles from './mover01.module.css'
import Header from '../../../components/Header/Header'
import mover01 from '../../../images/mover011.png'
import GreenButton from '../../../components/confirmButton/GreenButton'


function Mover01() {
  return (
    <div>
      <div className={styles.mainC}>
      <Header text="Mover"/>
      <img src={mover01} alt="..." />
      <GreenButton text="SHOW AVAILABLE PICKUP LOCATIONS"/>
      </div>
    </div>
  )
}

export default Mover01
