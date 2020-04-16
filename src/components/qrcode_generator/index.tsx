/**
 * @author: lencx
 * @create_at: Apr 15, 2020
 */

import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import Mask from '~comps/mask';

import styles from './qrcode.mod.scss';

const generateQR = async (el: string, text: string) => {
  const canvas = document.getElementById(el);
  try {
    await QRCode.toCanvas(canvas, text);
  } catch (err) {
    console.error(err);
  }
};

export interface QRCodeGeneratorProps {
  url: string;
}

export default function QRCodeGenerator({ url }: QRCodeGeneratorProps) {
  const maskRef: any = useRef();
  useEffect(() => {
    generateQR('nofwl-qrcode', url);
  }, []);
  const handleQRCode = () => {
    if (maskRef.current) {
      maskRef.current.show();
    }
  };
  return (
    <div className={styles.qrcode}>
      <img
        className={styles.scan}
        src={require('@/assets/icon/qrcode.svg')}
        onClick={handleQRCode}
        title="Share Link"
      />
      <Mask ref={maskRef} onMaskClose className={styles.mask}>
        <canvas id="nofwl-qrcode" />
      </Mask>
    </div>
  );
}
