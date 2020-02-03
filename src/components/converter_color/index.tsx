/**
 * @author: lencx
 * @create_at: Feb 02, 2020
 */

import React, { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';
import cns from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import * as c from './fns';

import styles from './cc.mod.scss';

const fns = [
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
];

// console.log(`[41] index.tsx: `, c);

export default function ConverterColor() {
  const msg = 'Please enter the color value you want to convert';
  const msg2 = 'Invalid input color';
  const [value, setValue] = useState('');
  const [fn, setFn] = useState('hexToRGB');
  const [converterValue, setConverter] = useState('');

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`[90] index.tsx: `, e.target.value);
    setFn(e.target.value);
  };

  const handleConverter = () => {
    console.log(`[95] index.tsx: `, value);
    if (!value) return setConverter(msg);
    // fix: space cause invalid colors
    const val = value.replace(/\s/g, '');
    setConverter((c as any)[fn](val));
  };

  useEffect(() => {
    handleConverter();
  }, [fn]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleConverter();
    }
  };

  // TODO: remeber user default setting
  const handleReset = () => {
    setValue('');
  };

  const handleCopy = () => {
    if (converterValue !== msg && converterValue !== msg2) {
      copy(converterValue);
      toast.success(`😎 Copy ${converterValue} to clipboard`, {
        position: 'bottom-right',
        autoClose: 2500,
        pauseOnHover: true,
        draggable: true,
        closeOnClick: true,
      });
    }
  };

  const isColor = converterValue !== msg && converterValue !== msg2;

  const renderOutput = (
    <span
      className={cns(styles.copy, {
        [styles.has_color]: isColor,
      })}
      onClick={handleCopy}
    >
      {isColor && (
        <i
          className={styles.color_block}
          style={{ background: converterValue }}
        />
      )}
      {converterValue}
    </span>
  );

  return (
    <div className={styles.converter_color}>
      <h3 id="converter_color">🎨 Color</h3>
      <ul>
        <li>name(colors-names): `red`, `green`, ...</li>
        <li>
          converter: click the `converter` button or press Enter to start the
          conversion.
        </li>
        <li>copy: click on the output color to copy to the clipboard.</li>
      </ul>
      <select value={fn} onChange={handleSelect}>
        {fns.map(item => {
          // str.match(/(.*)(To)(.*)/)
          return (
            <option key={item} value={item}>
              {item.replace('To', ' => ')}
            </option>
          );
        })}
      </select>
      <div className={styles.input_area}>
        <input
          type="text"
          onChange={handleInput}
          value={value}
          onKeyPress={handleEnter}
        />
        <button onClick={handleConverter}>Converter</button>
        {value && <button onClick={handleReset}>Reset</button>}
      </div>
      <p className={styles.output}>
        <b>Output:</b>{' '}
        {converterValue ? renderOutput : '⌛️Waiting for input...'}
      </p>
      <ToastContainer />
    </div>
  );
}
