import React, { useState } from 'react'
import styles from './Trial.module.scss'
import check from '../../assets/images/icon-check.svg'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
import Slider from '../Slider'
import { footerList, priceData } from '../../data'

export default function Balance() {
  const [currentValue, setCurrentValue] = useState(100)
  const minValue = priceData[0].view
  const maxValue = priceData[priceData.length - 1].view

  const price = priceData.find((item) => item.view === currentValue)

  return (
    <section className={styles.trial}>
      <div className={styles.price}>
        <p className={styles.price_desc}>{currentValue}K PAGEVIEWS</p>
        <p className={styles.price_main}>
          ${price.price}.00 <span>/ month</span>
        </p>
      </div>
      <Slider min={minValue} max={maxValue} value={currentValue} setValue={setCurrentValue} />
      <div className={styles.billing}>
        <p className={styles.billing_desc}>Monthly Billing</p>
        <ToggleSwitch />
        <p className={styles.billing_desc}>Yearly Billing</p>
        <p className={styles.discount}>25% discount</p>
      </div>

      <hr className={styles.line} />

      <div className={styles.footer}>
        <ul className={styles.items}>
          {footerList.map((link, index) => {
            return (
              <li key={index} className={styles.list}>
                <img src={check} alt="check" />
                {link}
              </li>
            )
          })}
        </ul>
        <button className={styles.start}>Start my trial</button>
      </div>
    </section>
  )
}
