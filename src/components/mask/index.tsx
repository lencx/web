/**
 * @author: lencx
 * @create_at: Apr 16, 2020
 */

import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import cns from 'classnames';
import { changeCss } from '~utils/tools';

import styles from './mask.mod.scss';

export interface MaskProps {
  children?: React.ReactNode;
  className?: string;
  visible?: boolean;
  zIndex?: number;
  onMaskClose?: boolean;
}

export default forwardRef(function Mask(
  {
    className,
    visible,
    children,
    zIndex = 999,
    onMaskClose = false,
  }: MaskProps,
  ref
) {
  const [isVisible, setVisible] = useState(visible);

  useEffect(() => {
    setVisible(visible);
    changeCss('body {', 'overflow: hide; height: 100%');
  }, [visible]);

  const hide = () => {
    setVisible(false);
  };

  const show = () => {
    setVisible(true);
  };

  useImperativeHandle(ref, () => ({ show, hide }));

  return (
    <div
      className={cns(styles.mask, className, { [styles.hide]: !isVisible })}
      style={{ zIndex }}
      onClick={() => onMaskClose && hide()}
    >
      {children}
    </div>
  );
});
