/**
 * @author: lencx
 * @create_at: Jan 19, 2020
 */

// We need to tell TypeScript that when we write "import styles from './styles.scss' we mean to load a module (to look for a './styles.scss.d.ts').
declare module '*.scss';

// picture
declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.gif';

/** interface */
// SVG
interface SVGProps {
  className?: string;
  fill?: string;
  size?: number | string;
  style?: React.CSSProperties;
}
