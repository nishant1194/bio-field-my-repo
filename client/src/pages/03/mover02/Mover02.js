import React from 'react';
import styles from './mover02.module.css'
import Header from '../../../components/Header/Header';
import image from '../../../images/img22.png'
import img3 from '../../../images/Ellipse4.png'
import img1 from '../../../images/Locationicon.png'
import img2 from '../../../images/Line 3.png'


function Mover02() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="Mover" />
        <div className={styles.text}>New Request</div>

        <div className={styles.container}>
            <img src={image} alt="" />
            <div className={styles.ltod}>
                <img src={img1} alt="" className={styles.img1}/>
                <img src={img2} alt="" className={styles.img2}/>
                <img src={img3} alt="" className={styles.img3} />
            </div>

        <div className={styles.textbox}>
        <div className={styles.text1}>Wheat Fields, Ropar Doentown hill</div>
        <div className={styles.box2}>
          <div className={styles.text4}>100 TON</div>
          <div className={styles.text4}>10 KM from you </div>
          <div className={styles.text3}>Rs500</div>

          </div>
        </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.container}>
            <img src={image} alt="" />
            <div className={styles.ltod}>
                <img src={img1} alt="" className={styles.img1}/>
                <img src={img2} alt="" className={styles.img2}/>
                <img src={img3} alt="" className={styles.img3} />
            </div>

        <div className={styles.textbox}>
        <div className={styles.text1}>Wheat Fields, Ropar Doentown hill</div>
        <div className={styles.box2}>
          <div className={styles.text4}>100 TON</div>
          <div className={styles.text4}>10 KM from you </div>
          <div className={styles.text3}>Rs450</div>

          </div>
        </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.container}>
            <img src={image} alt="" />
            <div className={styles.ltod}>
                <img src={img1} alt="" className={styles.img1}/>
                <img src={img2} alt="" className={styles.img2}/>
                <img src={img3} alt="" className={styles.img3} />
            </div>

        <div className={styles.textbox}>
        <div className={styles.text1}>Wheat Fields, Ropar Doentown hill</div>
        <div className={styles.box2}>
          <div className={styles.text4}>100 TON</div>
          <div className={styles.text4}>10 KM from you </div>
          <div className={styles.text3}>Rs650</div>

          </div>
        </div>
        </div>
        <div className={styles.line}></div>
      </div>
    </div>
  )
}

export default Mover02
