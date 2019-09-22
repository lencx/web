import React, { useState, useRef } from 'react'
import copy from 'copy-to-clipboard'
import { ToastContainer, toast } from 'react-toastify'
// import ConverterIcon from '~components/icon/ConverterIcon'
import CloseIcon from '~components/icon/CloseIcon'
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

// const formatStr = str => str.match(/(.*)(To)(.*)/)

export default () => {
  const [value, setValue] = useState('')
  const [Fn, setFn] = useState('hexToRGB')
  const [converterValue, setConverter] = useState('')
  const handleConverter = () => {
    if (!value) return setConverter('Please enter the color value you want to convert')
    // fix: space cause invalid colors
    const val = value.replace(/\s/g, '')
    console.log(val, c, Fn)
    setConverter(c[Fn](val))
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
        closeOnClick: true,
      })
    }
  }
  const renderOutput = (
    <span className="color-copy" onClick={handleCopy}>
      {converterValue}
      {converterValue !== 'Invalid input color'
        && <i className="color-block"  style={{ background: converterValue }} />}
    </span>
  )
  return (
    <div className="n__card converter">
      <h3>Color</h3>
      <ul>
        <li>name(colors-names): `red`, `green`, ...</li>
        <li>click the `converter` button or press Enter to start the conversion.</li>
        <li>click on the output color to copy to the clipboard.</li>
      </ul>
      <select defaultValue="hexToRGB" onChange={e => setFn(e.target.value)}>
        {fns.map(item => {
          return <option key={item} value={item}>{item.replace('To', ' => ')}</option>
        })}
      </select>
      <div className="color-input">
        <input type="text" onChange={handleInput} value={value} onKeyPress={handleInput} />
        {value && <button className="reset-btn btn" onClick={() => setValue('')}><CloseIcon /></button>}
      </div>
      <button className="btn" onClick={handleConverter}>Converter</button>
      <p className="output"><b>Output:</b> {converterValue ? renderOutput : '⌛️Waiting for input...'}</p>
      <ToastContainer />
    </div>
  )
}