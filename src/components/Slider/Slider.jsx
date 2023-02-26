import './index.scss'
import ReactSlider from 'react-slider'

export default function Slider({ min, max, value, setValue }) {
  return (
    <div className="slider">
      <ReactSlider
        className="customSlider"
        trackClassName="customSlider-track"
        thumbClassName="customSlider-thumb"
        markClassName="customSlider-mark"
        min={min}
        max={max}
        value={value}
        onChange={(value) => setValue(value)}
        step={25}
      />
    </div>
  )
}
