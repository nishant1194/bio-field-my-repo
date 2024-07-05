import React from 'react'
import styles from './inputVechileDetails02.module.css'
import Header from '../../../components/Header/Header'
import image from '../../../images/image33.png'
import icon from '../../../images/Vector.png'
import GreenButton from '../../../components/confirmButton/GreenButton'
import cart from "../../../images/cart.png";
import scale from "../../../images/Scale.png";

function InputVechileDetails02() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="Mover" />
        <div className={styles.text1}>Input your Vehicle Detail</div>
        <img src={image} alt="" className={styles.image1}/>
        <div className={styles.text11}>
        Vehicle number
                </div>
        <div className={styles.input}>
          <img src={icon} alt="" className={styles.image2} />
          <input
            type="number"
            placeholder="Ex: PB 00 AB 000"
            className={styles.inputNumber}
          />
        </div>
        <div className={styles.text11}>Vehicle Capacity
        </div>
        <div className={styles.input}>
          <img src={cart} alt="" className={styles.image2} />
          <input
            type="number"
            placeholder="Enter the number"
            className={styles.inputNumber}
          />
        </div>
        <div className={styles.input}>
          <img src={scale} alt="..." className={styles.image2} />
          <select className={styles.inputNumber} >
          <option value="Kilogram">Enter the unit</option>
          <option value="Kilogram">Kilogram</option>
          <option value="Ton">Ton</option>
          </select>
        </div>
        <GreenButton text="NEXT" />
      </div>
    </div>
  )
}

export default InputVechileDetails02
