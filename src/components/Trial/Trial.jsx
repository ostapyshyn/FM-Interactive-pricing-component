import React from 'react'
import styles from './Trial.module.scss'
import check from '../../assets/images/icon-check.svg'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'

export default function Balance() {
  return (
    <section className={styles.trial}>
      <div className={styles.price}>
        <p className={styles.price_desc}>100K PAGEVIEWS</p>
        <p className={styles.price_main}>
          $16.00 <span>/ month</span>
        </p>
      </div>
      <div className={styles.billing}>
        <p className={styles.billing_desc}>Monthly Billing</p>
        <ToggleSwitch />
        <p className={styles.billing_desc}>Yearly Billing</p>
        <p className={styles.discount}>25% discount</p>
      </div>

      <hr className={styles.line} />

      <div className={styles.footer}>
        <ul className={styles.items}>
          <li className={styles.list}>
            <img src={check} alt="check" />
            Unlimited websites
          </li>
          <li className={styles.list}>
            <img src={check} alt="check" />
            100% data ownership
          </li>
          <li className={styles.list}>
            <img src={check} alt="check" />
            Email reports
          </li>
        </ul>
        <button className={styles.start}>Start my trial</button>
      </div>
    </section>
  )
}
