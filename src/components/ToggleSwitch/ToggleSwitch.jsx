import { useState } from 'react'
import styles from './ToggleSwitch.module.scss'


function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <label className={styles.toggleSwitch}>
      <input type="checkbox" checked={isToggled} onChange={() => setIsToggled(!isToggled)} />
      <span className={styles.switch} />
    </label>
  )
}
export default ToggleSwitch
