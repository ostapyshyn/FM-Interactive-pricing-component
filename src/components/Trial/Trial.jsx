import React, { useState } from 'react'
import styles from './Trial.module.scss'
import check from '../../assets/images/icon-check.svg'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
import Slider from '../Slider'
import { footerList, priceData } from '../../data'

export default function Balance() {
  const [currentValue, setCurrentValue] = useState(100)
  const [isToggled, setIsToggled] = useState(false)
  const minValue = priceData[0].view
  const maxValue = priceData[priceData.length - 1].view

  const price = priceData.find((item) => item.view === currentValue)

  function calculatePrice(price, discount) {
    if (discount === undefined) {
      console.log(price, '111')
      return price
    }
    if (isToggled) {
      console.log(price, '222')
      return price * ((100 - discount) / 100)
    } else {
      console.log(price, '333')
      return price
    }
  }

  return (
    <section className={styles.trial}>
      <div className={styles.price}>
        <p className={styles.price_desc}>{currentValue}K PAGEVIEWS</p>
        <div className={styles.mobileSlider}>
          <Slider min={minValue} max={maxValue} value={currentValue} setValue={setCurrentValue} />
        </div>
        <p className={styles.price_main}>
          ${calculatePrice(price.price, 25)}.00<span>/ month</span>
        </p>
      </div>
      <div className={styles.desktopSlider}>
        <Slider min={minValue} max={maxValue} value={currentValue} setValue={setCurrentValue} />
      </div>

      <div className={styles.billing}>
        <p className={styles.billing_desc}>Monthly Billing</p>
        <ToggleSwitch isToggled={isToggled} setIsToggled={setIsToggled} />
        <p className={styles.billing_desc}>Yearly Billing</p>
        <p className={styles.discount}>25% discount</p>
        <p className={styles.discount_m}>-25%</p>
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
