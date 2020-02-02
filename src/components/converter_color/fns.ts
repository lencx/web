/**
 * @author: lencx
 * @create_at: Feb 02, 2020
 *
 * @see https://css-tricks.com/converting-color-spaces-in-javascript/
 */

/**
 1. RGBToHex
 2. RGBAToHexA
 3. hexToRGB
 4. hexAToRGBA
 5. RGBToHSL
 6. RGBAToHSLA
 7. HSLToRGB
 8. HSLAToRGBA
 9. hexToHSL
 10. hexAToHSLA
 11. HSLToHex
 12. HSLAToHexA
 13. nameToRGB
 14. nameToHex
 15. nameToHSL
*/

/*------------ Functions -------------*/
export function RGBToHex(rgb: any) {
  const ex = /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;
  if (ex.test(rgb)) {
    // choose correct separator
    const sep = rgb.indexOf(',') > -1 ? ',' : ' ';
    // turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb
      .substr(4)
      .split(')')[0]
      .split(sep);

    // convert %s to 0–255
    for (const R in rgb) {
      const r = rgb[R];
      if (r.indexOf('%') > -1)
        rgb[R] = Math.round((r.substr(0, r.length - 1) / 100) * 255);
      /* Example:
				75% -> 191
				75/100 = 0.75, * 255 = 191.25 -> 191
				*/
    }

    let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

    if (r.length == 1) r = '0' + r;
    if (g.length == 1) g = '0' + g;
    if (b.length == 1) b = '0' + b;

    return '#' + r + g + b;
  } else {
    return 'Invalid input color';
  }
}

export function RGBAToHexA(rgba: any) {
  const ex = /^rgba\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){3}))|(((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){3}))\/\s)((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
  if (ex.test(rgba)) {
    const sep = rgba.indexOf(',') > -1 ? ',' : ' ';
    rgba = rgba
      .substr(5)
      .split(')')[0]
      .split(sep);

    // strip the slash if using space-separated syntax
    if (rgba.indexOf('/') > -1) rgba.splice(3, 1);

    for (const R in rgba) {
      const r = rgba[R];
      if (r.indexOf('%') > -1) {
        const p = r.substr(0, r.length - 1) / 100;

        if (Number(R) < 3) {
          rgba[R] = Math.round(p * 255);
        } else {
          rgba[R] = p;
        }
      }
    }

    let r = (+rgba[0]).toString(16),
      g = (+rgba[1]).toString(16),
      b = (+rgba[2]).toString(16),
      a = Math.round(+rgba[3] * 255).toString(16);

    if (r.length == 1) r = '0' + r;
    if (g.length == 1) g = '0' + g;
    if (b.length == 1) b = '0' + b;
    if (a.length == 1) a = '0' + a;

    return '#' + r + g + b + a;
  } else {
    return 'Invalid input color';
  }
}

export function hexToRGB(h: string, isPct: boolean) {
  const ex = /^#([\da-f]{3}){1,2}$/i;
  if (ex.test(h)) {
    let r: number | string = 0,
      g: number | string = 0,
      b: number | string = 0;
    isPct = isPct === true;

    // 3 digits
    if (h.length == 4) {
      r = '0x' + h[1] + h[1];
      g = '0x' + h[2] + h[2];
      b = '0x' + h[3] + h[3];

      // 6 digits
    } else if (h.length == 7) {
      r = '0x' + h[1] + h[2];
      g = '0x' + h[3] + h[4];
      b = '0x' + h[5] + h[6];
    }
    if (isPct) {
      r = +((Number(r) / 255) * 100).toFixed(1);
      g = +((Number(g) / 255) * 100).toFixed(1);
      b = +((Number(b) / 255) * 100).toFixed(1);
    }
    return (
      'rgb(' +
      (isPct ? r + '%,' + g + '%,' + b + '%' : +r + ',' + +g + ',' + +b) +
      ')'
    );
  } else {
    return 'Invalid input color';
  }
}

export function hexAToRGBA(h: string, isPct: boolean) {
  const ex = /^#([\da-f]{4}){1,2}$/i;
  if (ex.test(h)) {
    let r: number | string = 0,
      g: number | string = 0,
      b: number | string = 0,
      a: number | string = 1;
    isPct = isPct === true;

    if (h.length == 5) {
      r = '0x' + h[1] + h[1];
      g = '0x' + h[2] + h[2];
      b = '0x' + h[3] + h[3];
      a = '0x' + h[4] + h[4];
    } else if (h.length == 9) {
      r = '0x' + h[1] + h[2];
      g = '0x' + h[3] + h[4];
      b = '0x' + h[5] + h[6];
      a = '0x' + h[7] + h[8];
    }
    a = +(Number(a) / 255).toFixed(3);
    if (isPct) {
      r = +((Number(r) / 255) * 100).toFixed(1);
      g = +((Number(g) / 255) * 100).toFixed(1);
      b = +((Number(b) / 255) * 100).toFixed(1);
      a = +(a * 100).toFixed(1);
    }

    return (
      'rgba(' +
      (isPct
        ? r + '%,' + g + '%,' + b + '%' + ',' + a
        : +r + ',' + +g + ',' + +b + ',' + a) +
      ')'
    );
  } else {
    return 'Invalid input color';
  }
}

export function RGBToHSL(rgb: any) {
  const ex = /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;
  if (ex.test(rgb)) {
    const sep = rgb.indexOf(',') > -1 ? ',' : ' ';
    rgb = rgb
      .substr(4)
      .split(')')[0]
      .split(sep);

    // convert %s to 0–255
    for (const R in rgb) {
      const r = rgb[R];
      if (r.indexOf('%') > -1)
        rgb[R] = Math.round((r.substr(0, r.length - 1) / 100) * 255);
    }

    // make r, g, and b fractions of 1
    const r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255,
      // find greatest and smallest channel values
      cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin;
    let h = 0,
      s = 0,
      l = 0;

    // calculate hue
    // no difference
    if (delta == 0) h = 0;
    // red is max
    else if (cmax == r) h = ((g - b) / delta) % 6;
    // green is max
    else if (cmax == g) h = (b - r) / delta + 2;
    // blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // make negative hues positive behind 360°
    if (h < 0) h += 360;

    // calculate lightness
    l = (cmax + cmin) / 2;

    // calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
  } else {
    return 'Invalid input color';
  }
}

export function RGBAToHSLA(rgba: any) {
  const ex = /^rgba\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){3}))|(((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){3}))\/\s)((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
  if (ex.test(rgba)) {
    const sep = rgba.indexOf(',') > -1 ? ',' : ' ';
    rgba = rgba
      .substr(5)
      .split(')')[0]
      .split(sep);

    // strip the slash if using space-separated syntax
    if (rgba.indexOf('/') > -1) rgba.splice(3, 1);

    for (const R in rgba) {
      const r = rgba[R];
      if (r.indexOf('%') > -1) {
        const p = r.substr(0, r.length - 1) / 100;

        if (Number(R) < 3) {
          rgba[R] = Math.round(p * 255);
        }
      }
    }

    // make r, g, and b fractions of 1
    const r = rgba[0] / 255,
      g = rgba[1] / 255,
      b = rgba[2] / 255,
      a = rgba[3],
      // find greatest and smallest channel values
      cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin;
    let h = 0,
      s = 0,
      l = 0;

    // calculate hue
    // no difference
    if (delta == 0) h = 0;
    // red is max
    else if (cmax == r) h = ((g - b) / delta) % 6;
    // green is max
    else if (cmax == g) h = (b - r) / delta + 2;
    // blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // make negative hues positive behind 360°
    if (h < 0) h += 360;

    // calculate lightness
    l = (cmax + cmin) / 2;

    // calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return 'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')';
  } else {
    return 'Invalid input color';
  }
}

export function HSLToRGB(hsl: any, isPct: boolean) {
  const ex = /^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i;
  if (ex.test(hsl)) {
    const sep = hsl.indexOf(',') > -1 ? ',' : ' ';
    hsl = hsl
      .substr(4)
      .split(')')[0]
      .split(sep);
    isPct = isPct === true;

    let h = hsl[0];
    const s = hsl[1].substr(0, hsl[1].length - 1) / 100,
      l = hsl[2].substr(0, hsl[2].length - 1) / 100;

    // strip label and convert to degrees (if necessary)
    if (h.indexOf('deg') > -1) h = h.substr(0, h.length - 3);
    else if (h.indexOf('rad') > -1)
      h = Math.round((h.substr(0, h.length - 3) / (2 * Math.PI)) * 360);
    else if (h.indexOf('turn') > -1)
      h = Math.round(h.substr(0, h.length - 4) * 360);
    // keep hue fraction of 360 if ending up over
    if (h >= 360) h %= 360;

    const c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2;
    let r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    if (isPct) {
      r = +((r / 255) * 100).toFixed(1);
      g = +((g / 255) * 100).toFixed(1);
      b = +((b / 255) * 100).toFixed(1);
    }

    return (
      'rgb(' +
      (isPct ? r + '%,' + g + '%,' + b + '%' : +r + ',' + +g + ',' + +b) +
      ')'
    );
  } else {
    return 'Invalid input color';
  }
}

export function HSLAToRGBA(hsla: any, isPct: boolean) {
  const ex = /^hsla\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)(((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2},\s?)|((\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}\s\/\s))((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
  if (ex.test(hsla)) {
    const sep = hsla.indexOf(',') > -1 ? ',' : ' ';
    hsla = hsla
      .substr(5)
      .split(')')[0]
      .split(sep);

    // strip the slash if using space-separated syntax
    if (hsla.indexOf('/') > -1) hsla.splice(3, 1);

    isPct = isPct === true;

    // must be fractions of 1
    let h = hsla[0],
      a = hsla[3];
    const s = hsla[1].substr(0, hsla[1].length - 1) / 100,
      l = hsla[2].substr(0, hsla[2].length - 1) / 100;

    // strip label and convert to degrees (if necessary)
    if (h.indexOf('deg') > -1) h = h.substr(0, h.length - 3);
    else if (h.indexOf('rad') > -1)
      h = Math.round((h.substr(0, h.length - 3) / (2 * Math.PI)) * 360);
    else if (h.indexOf('turn') > -1)
      h = Math.round(h.substr(0, h.length - 4) * 360);
    if (h >= 360) h %= 360;

    const c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2;
    let r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    const pctFound = a.indexOf('%') > -1;

    if (isPct) {
      r = +((r / 255) * 100).toFixed(1);
      g = +((g / 255) * 100).toFixed(1);
      b = +((b / 255) * 100).toFixed(1);
      if (!pctFound) {
        a *= 100;
      } else {
        a = a.substr(0, a.length - 1);
      }
    } else if (pctFound) {
      a = a.substr(0, a.length - 1) / 100;
    }

    return (
      'rgba(' +
      (isPct
        ? r + '%,' + g + '%,' + b + '%,' + a + '%'
        : +r + ',' + +g + ',' + +b + ',' + +a) +
      ')'
    );
  } else {
    return 'Invalid input color';
  }
}

export function hexToHSL(H: string) {
  const ex = /^#([\da-f]{3}){1,2}$/i;
  if (ex.test(H)) {
    // convert hex to RGB first
    let r: any = 0,
      g: any = 0,
      b: any = 0;
    if (H.length == 4) {
      r = '0x' + H[1] + H[1];
      g = '0x' + H[2] + H[2];
      b = '0x' + H[3] + H[3];
    } else if (H.length == 7) {
      r = '0x' + H[1] + H[2];
      g = '0x' + H[3] + H[4];
      b = '0x' + H[5] + H[6];
    }
    // then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    const cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin;
    let h = 0,
      s = 0,
      l = 0;

    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
  } else {
    return 'Invalid input color';
  }
}

export function hexAToHSLA(H: string) {
  const ex = /^#([\da-f]{4}){1,2}$/i;
  if (ex.test(H)) {
    let r: any = 0,
      g: any = 0,
      b: any = 0,
      a: any = 1;
    // 4 digits
    if (H.length == 5) {
      r = '0x' + H[1] + H[1];
      g = '0x' + H[2] + H[2];
      b = '0x' + H[3] + H[3];
      a = '0x' + H[4] + H[4];
      // 8 digits
    } else if (H.length == 9) {
      r = '0x' + H[1] + H[2];
      g = '0x' + H[3] + H[4];
      b = '0x' + H[5] + H[6];
      a = '0x' + H[7] + H[8];
    }

    // normal conversion to HSLA
    r /= 255;
    g /= 255;
    b /= 255;
    const cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin;
    let h = 0,
      s = 0,
      l = 0;

    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    a = (a / 255).toFixed(3);

    return 'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')';
  } else {
    return 'Invalid input color';
  }
}

export function HSLToHex(hsl: any) {
  const ex = /^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i;
  if (ex.test(hsl)) {
    const sep = hsl.indexOf(',') > -1 ? ',' : ' ';
    hsl = hsl
      .substr(4)
      .split(')')[0]
      .split(sep);

    let h = hsl[0];
    const s = hsl[1].substr(0, hsl[1].length - 1) / 100,
      l = hsl[2].substr(0, hsl[2].length - 1) / 100;

    // strip label and convert to degrees (if necessary)
    if (h.indexOf('deg') > -1) h = h.substr(0, h.length - 3);
    else if (h.indexOf('rad') > -1)
      h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));
    else if (h.indexOf('turn') > -1)
      h = Math.round(h.substr(0, h.length - 4) * 360);
    if (h >= 360) h %= 360;

    const c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2;
    let r: number | string = 0,
      g: number | string = 0,
      b: number | string = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }
    // having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);

    // prepend 0s if necessary
    if (r.length == 1) r = '0' + r;
    if (g.length == 1) g = '0' + g;
    if (b.length == 1) b = '0' + b;

    return '#' + r + g + b;
  } else {
    return 'Invalid input color';
  }
}

export function HSLAToHexA(hsla: any) {
  const ex = /^hsla\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)(((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2},\s?)|((\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}\s\/\s))((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
  if (ex.test(hsla)) {
    const sep = hsla.indexOf(',') > -1 ? ',' : ' ';
    hsla = hsla
      .substr(5)
      .split(')')[0]
      .split(sep);

    // strip the slash
    if (hsla.indexOf('/') > -1) hsla.splice(3, 1);

    let h = hsla[0],
      a = hsla[3];
    const s = hsla[1].substr(0, hsla[1].length - 1) / 100,
      l = hsla[2].substr(0, hsla[2].length - 1) / 100;

    // strip label and convert to degrees (if necessary)
    if (h.indexOf('deg') > -1) h = h.substr(0, h.length - 3);
    else if (h.indexOf('rad') > -1)
      h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));
    else if (h.indexOf('turn') > -1)
      h = Math.round(h.substr(0, h.length - 4) * 360);
    if (h >= 360) h %= 360;

    // strip % from alpha, make fraction of 1 (if necessary)
    if (a.indexOf('%') > -1) a = a.substr(0, a.length - 1) / 100;

    const c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2;
    let r: number | string = 0,
      g: number | string = 0,
      b: number | string = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);
    a = Math.round(a * 255).toString(16);

    if (r.length == 1) r = '0' + r;
    if (g.length == 1) g = '0' + g;
    if (b.length == 1) b = '0' + b;
    if (a.length == 1) a = '0' + a;

    return '#' + r + g + b + a;
  } else {
    return 'Invalid input color';
  }
}

export function nameToRGB(name: string) {
  // create fake div
  const fakeDiv = document.createElement('div');
  fakeDiv.style.color = name;
  document.body.appendChild(fakeDiv);

  // get color of div
  const cs = window.getComputedStyle(fakeDiv),
    pv = cs.getPropertyValue('color');

  // remove div after obtaining desired color value
  document.body.removeChild(fakeDiv);

  return pv;
}

export function nameToHex(name: string) {
  // get RGB from named color in div
  const fakeDiv = document.createElement('div');
  fakeDiv.style.color = name;
  document.body.appendChild(fakeDiv);

  const cs = window.getComputedStyle(fakeDiv),
    pv = cs.getPropertyValue('color');

  document.body.removeChild(fakeDiv);

  // code ripped from RGBToHex() (except pv is substringed)
  const rgb = pv
    .substr(4)
    .split(')')[0]
    .split(',');
  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length == 1) r = '0' + r;
  if (g.length == 1) g = '0' + g;
  if (b.length == 1) b = '0' + b;

  return '#' + r + g + b;
}

export function nameToHSL(name: string) {
  const fakeDiv = document.createElement('div');
  fakeDiv.style.color = name;
  document.body.appendChild(fakeDiv);

  const cs = window.getComputedStyle(fakeDiv),
    pv = cs.getPropertyValue('color');

  document.body.removeChild(fakeDiv);

  // code ripped from RGBToHSL() (except pv is substringed)
  const rgb: any = pv
      .substr(4)
      .split(')')[0]
      .split(','),
    r = rgb[0] / 255,
    g = rgb[1] / 255,
    b = rgb[2] / 255,
    cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin;
  let h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}
