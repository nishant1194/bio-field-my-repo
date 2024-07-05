import React from 'react'
import styles from '../farmerConformation/farmaerConformation.module.css'
import image from "../../../images/OrderSuccessfull.png";
import Header from '../../../components/Header/Header';


function FarmerConfomation() {
  return (
    <div>
      <div className={styles.mainC}> 
        <Header text="Farmer" />
        <img src={image} alt="..." />
      </div>
    </div>
  )
}

export default FarmerConfomation
