import React from 'react'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <section className={styles.header}>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required.</p>
    </section>
  )
}
