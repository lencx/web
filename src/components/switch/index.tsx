/**
 * @author: lencx
 * @create_at: Jan 26, 2020
 */

import React, { useEffect, useRef, useReducer } from 'react';
import cns from 'classnames';
import { pointerCoord } from '~utils/tools';

import './switch.scss';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
  icons?: {
    checked: React.ReactNode;
    unchecked: React.ReactNode;
  };
}

export default function Switch({
  checked = false,
  defaultChecked = false,
  disabled = false,
  icons,
  onChange,
}: SwitchProps) {
  const input = useRef<HTMLInputElement>(null);
  const [state, setState] = useReducer((o: any, n: any) => ({ ...o, ...n }), {
    checked: !!(checked || defaultChecked),
    startX: null,
    hasFocus: false,
    touchStarted: false,
    touchMoved: false,
  });

  useEffect(() => {
    setState({ checked: !!(checked || defaultChecked) });
  }, [checked]);

  const handleChange = (checked: boolean) => {
    onChange && onChange(checked);
  };

  const handleClick = () => {
    if (disabled) return;
    setState({
      checked: !state.checked,
      hasFocus: false,
    });
    handleChange(!state.checked);
  };

  const handleTouchStart = (e: any) => {
    if (disabled) return;
    setState({
      startX: pointerCoord(e).x,
      touchStarted: true,
      hasFocus: true,
    });
  };

  const handleTouchMove = (e: any) => {
    if (!state.touchStarted) return;
    setState({ touchMoved: true });
    if (state.startX) {
      const currX = pointerCoord(e).x;
      if (state.checked && currX + 15 < state.startX) {
        setState({ checked: false, startX: currX });
        handleChange(false);
      } else if (!state.checked && currX - 15 > state.startX) {
        setState({ checked: true, startX: currX });
        handleChange(true);
      }
    }
  };

  const handleTouchEnd = (e: any) => {
    if (!state.touchMoved) return;
    e.preventDefault();
    if (state.startX) {
      setState({
        touchStarted: false,
        startX: null,
        touchMoved: false,
        hasFocus: false,
      });
    }
  };

  const handleTouchCancel = () => {
    if (state.startX) {
      setState({
        touchStarted: false,
        startX: null,
        touchMoved: false,
        hasFocus: false,
      });
    }
  };

  const handleFocus = () => {
    setState({ hasFocus: true });
  };
  const handleBlur = () => {
    setState({ hasFocus: false });
  };

  const getIcon = (type: 'checked' | 'unchecked') => {
    return (icons && icons[type]) || null;
  };

  const classes = cns('switch', {
    'switch--checked': state.checked,
    'switch--focus': state.hasFocus,
    'switch--disabled': disabled,
  });

  return (
    <div
      className={classes}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      <div className="switch-track">
        <div className="switch-track--checked">{getIcon('checked')}</div>
        <div className="switch-track--unchecked">{getIcon('unchecked')}</div>
      </div>
      <div className="switch-thumb" />

      <input
        ref={input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        checked={state.checked}
        onChange={() => null}
        className="switch-input"
        type="checkbox"
      />
    </div>
  );
}
