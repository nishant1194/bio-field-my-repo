import React from 'react'
import styles from '../confirmButton/greenButton.module.css'

function GreenButton(props) {
  return (
    <div>
      <button className={styles.confirm}>{props.text}</button>

    </div>
  )
}

export default GreenButton
