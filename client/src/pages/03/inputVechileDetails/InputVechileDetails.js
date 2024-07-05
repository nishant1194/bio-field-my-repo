import React from 'react'
import styles from './inputVechileDetails.module.css'
import Header from '../../../components/Header/Header'
import image from '../../../images/image15.png'
import icon from '../../../images/Vector.png'
import GreenButton from '../../../components/confirmButton/GreenButton'


function InputVechileDetails() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="Mover" />
        <div className={styles.text1}>Input Driver Detail</div>
        <img src={image} alt="" className={styles.image1}/>
        <div className={styles.text1}>
          Aadhar card number
        </div>
        <div className={styles.input}>
          <img src={icon} alt="" className={styles.image2} />
          <input
            type="number"
            placeholder="Ex: 1111 2222 33332"
            className={styles.inputNumber}
          />
        </div>
        <div className={styles.text1}>driving licence
        </div>
        <input type='file'/>
        <GreenButton text="NEXT" />
      </div>
    </div>
  )
}

export default InputVechileDetails
