/**
 * @author: lencx
 * @create_at: Aug 30, 2020
 */

import React from 'react';
import selfAvatar from '@/assets/lencx.png';
import buddyAvatar from '@/assets/buddy.png';

import './chat.scss';

export interface ChatItem {
  nickname?: string;
  message: any;
  date?: string;
  type: 'buddy' | 'self';
}

export interface ChatProps {
  title?: string;
  selfName?: string;
  buddyName?: string;
  dataSource?: Array<ChatItem>;
}

export default function Chat(props: ChatProps) {
  const { title, selfName, buddyName, dataSource = [] } = props;
  return (
    <div className="nofwl__chat">
      {title && <div className="chat__title">{title}</div>}
      {dataSource.map((item: ChatItem, idx: number) => {
        const isMe = item.type === 'self';
        return (
          <div
            key={idx}
            className={`chat__item chat__${isMe ? 'self' : 'buddy'}`}
          >
            {!isMe && (
              <div
                className="chat__avatar"
                style={{ backgroundImage: `url(${buddyAvatar})` }}
              />
            )}
            <div className="chat__content">
              <div className="chat__head">
                <span className="chat__nickname">
                  {item.nickname || (isMe ? selfName : buddyName)}
                </span>
              </div>
              <div className="chat__msg">{item.message}</div>
            </div>
            {isMe && (
              <div
                className="chat__avatar"
                style={{ backgroundImage: `url(${selfAvatar})` }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
