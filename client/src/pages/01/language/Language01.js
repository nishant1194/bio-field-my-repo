import React from "react";
import styles from "../language/language01.module.css";
import image from "../../../images/image 1.png";
import Header from "../../../components/Header/Header";

function Language01() {
  return (
    <div>
      <div className={styles.container}>
      <Header text="SignIn" />
      <div className={styles.language}>Language</div>
        <img src={image} alt="" className={styles.icon} />
<form action="submit" className={styles.options}>
<input type="text" placeholder="English" className={styles.optionslist} />
<input type="text" placeholder="English" className={styles.optionslist} />
<input type="text" placeholder="English" className={styles.optionslist} />

</form>

<button className={styles.btn}>Next</button>
      </div>
    </div>
  );
}

export default Language01;
