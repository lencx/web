/**
 * @author: lencx
 * @create_at: Apr 27, 2020
 */

import React from 'react';

import styles from './video.mod.scss';

const Video = ({ src, ...rest }: any) => (
  <div className={styles.video}>
    <video
      loop
      autoPlay
      controls
      src={require(`../../../content${src}`)}
      {...rest}
    >
      Your browser does not support the video tag.
    </video>
  </div>
);

export default Video;
