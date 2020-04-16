/**
 * @author: lencx
 * @create_at: Apr 16, 2020
 */

import React from 'react';
import { navigate } from 'gatsby';
import cns from 'classnames';

import QRCodeGenerator from '~comps/qrcode_generator';
import { isWin } from '~utils/tools';

import styles from './pw.mod.scss';

export default function PageWidget() {
  return (
    <div className={cns(styles.page_widget, 'page_widget')}>
      <QRCodeGenerator url={isWin ? window.location.href : ''} />
      <img
        className={styles.comment}
        src={require('@/assets/icon/comment.svg')}
        onClick={() => navigate(`${window.location.pathname}#nofwl_comment`)}
        title="Comments"
      />
    </div>
  );
}
