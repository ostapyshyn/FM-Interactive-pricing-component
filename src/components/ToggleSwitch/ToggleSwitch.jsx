import styles from './ToggleSwitch.module.scss'

function ToggleSwitch({ isToggled, setIsToggled }) {
  return (
    <label className={styles.toggleSwitch}>
      <input type="checkbox" checked={isToggled} onChange={() => setIsToggled(!isToggled)} />
      <span className={styles.switch} />
    </label>
  )
}
export default ToggleSwitch
