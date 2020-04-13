import React from 'react';

import styles from './nf.mod.scss';

export default function NetlifyForm() {
  return (
    <form
      className={styles.form}
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <p>
        <label>Your Name:</label>
        <input type="text" name="name" />
      </p>
      <p>
        <label>Your Email:</label>
        <input type="email" name="email" />
      </p>
      <p>
        <label>Message:</label>
        <textarea name="message" />
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
