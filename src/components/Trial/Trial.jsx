import React from 'react'
import styles from './Trial.module.scss'
import check from '../../assets/images/icon-check.svg'

export default function Balance() {
  return (
    <section className={styles.trial}>
      <div className={styles.price}>
        <p>100K PAGEVIEWS</p>
        <p>$16.00 / month</p>
      </div>
      <div className={styles.billing}>
        <p>Monthly Billing</p>
        <p>Yearly Billing</p>
        <p>25% discount</p>
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
