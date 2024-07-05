import React from 'react';
import Styles from './header.module.css'
import backIcon from './back.png'

function Header(props) {
  return (
    <div>
      <div className={Styles.mainC}>
      <div className={Styles.btn1}><img src={backIcon} alt="..."className={Styles.btn1img}/> </div>
      <span className={Styles.text}>{props.text}</span>
      <div className={Styles.btn2}><img src={backIcon} alt="..."className={Styles.btn2img}/> </div>
      </div>
    </div>
  )
}

export default Header
