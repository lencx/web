import React, { useEffect } from 'react';
import QRCode from 'qrcode';

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
  useEffect(() => {
    generateQR('nofwl-qrcode', url);
  }, []);
  return <canvas id="nofwl-qrcode" />;
}
