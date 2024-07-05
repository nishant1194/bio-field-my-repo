import React from "react";
import styles from '../signIn/signin.module.css';
import image from "../../../images/diller.png";
import Header from "../../../components/Header/Header";


function SignIn() {
  return (
    <div>
    <Header text="Sign In" />
    <div className={styles.language}>Welcome!</div>
    <div className={styles.container}>
      <img src={image} alt="" className={styles.icon} />
      <div>

<span>+91</span> <input type='number' placeholder="Enter your Phone Number" className={styles.number}/>
      </div>
<button className={styles.btn}>Sign Up</button>
    </div>
  </div>
  );
}

export default SignIn;
