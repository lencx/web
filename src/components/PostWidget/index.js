import React from 'react'
import dateIcon from './icons/calendar.svg'
import folderIcon from './icons/folder.svg'
import tagsIcon from './icons/tags.svg'

import './index.scss'

export default ({ date, readTime, category, tags }) => {
  return (
    <div className="post-widget">
      { readTime && <span className="readtime" title="read time" dangerouslySetInnerHTML= {{ __html: readTime }} />}
      { date && (
        <span className="date" title="date">
          <img src={dateIcon} alt="dateIcon" />
          <i>{date}</i>
        </span>
      )}
      { category && (
        <span className="category" title="category">
          <img src={folderIcon} alt="folderIcon" />
          <i>{category}</i>
        </span>
      )}
      { tags && (
        <span className="tags" title="tags">
          <img src={tagsIcon} alt="tagsIcon" />
          <i>{
            tags.map((tag, index) => {
              return <b key={`${tag}_${index}`}>{tag}</b>
            })
          }</i>
        </span>
      )}
    </div>
  )
}