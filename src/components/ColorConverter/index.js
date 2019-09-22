import React, { useState, useRef } from 'react'
import copy from 'copy-to-clipboard'
import { ToastContainer, toast } from 'react-toastify'
import * as c from './fns'

import './index.scss'

const fns  = [
  'RGBToHex',
  'RGBAToHexA',
  'hexToRGB',
  'hexAToRGBA',
  'RGBToHSL',
  'RGBAToHSLA',
  'HSLToRGB',
  'HSLAToRGBA',
  'hexToHSL',
  'hexAToHSLA',
  'HSLToHex',
  'HSLAToHexA',
  'nameToRGB',
  'nameToHex',
  'nameToHSL',
]

export default () => {
  const [value, setValue] = useState(null)
  const [Fn, setFn] = useState('hexToRGB')
  const [converterValue, setConverter] = useState('')
  const handleConverter = () => {
    if (!value) return setConverter('Please enter the color value you want to convert')
    setConverter(c[Fn](value))
  }
  const handleInput = e => {
    setValue(e.target.value)
    if (event.key === 'Enter') {
      handleConverter()
    }
  }
  const handleCopy = () => {
    if (converterValue !== 'Invalid input color') {
      copy(converterValue)
      toast.success(`Copy ${converterValue} to clipboard`, {
        position: 'bottom-right',
        autoClose: 2500,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }
  const renderOutput = (
    <span className="color-copy" onClick={handleCopy}>
      {converterValue}
      <i className="color-block"  style={{ background: converterValue }} />
    </span>
  )
  return (
    <div className="n__card converter">
      <h3>Color</h3>
      <ul>
        <li>Click the `converter` button or press Enter to start the conversion.</li>
        <li>Click on the output color to copy to the clipboard</li>
      </ul>
      <select defaultValue="hexToRGB" onChange={e => setFn(e.target.value)}>
        {fns.map(item => <option key={item}>{item}</option>)}
      </select>
      <input type="text" onChange={handleInput} onKeyPress={handleInput} />
      <input type="button" value="Converter" onClick={handleConverter} />
      <p className="output">Output: {converterValue ? renderOutput : '⌛️Waiting for input...'}</p>
      <ToastContainer />
    </div>
  )
}