/**
 * @author: lencx
 * @create_at: Mar 11, 2020
 */

import React from 'react';
import createReactClass from 'create-react-class';

import styles from './editor.mod.scss';

interface EditorProps {
  placeholder?: string;
  html?: string;
  onChange: (value: string) => void;
}

const ContentEditable = createReactClass({
  render: function() {
    return (
      <div
        ref={node => (this.node = node)}
        onInput={this.emitChange}
        onBlur={this.emitChange}
        contentEditable
        placeholder={this.props.placeholder}
        dangerouslySetInnerHTML={{ __html: this.props.html }}
      />
    );
  },

  shouldComponentUpdate: function(nextProps: EditorProps) {
    return (
      nextProps.html !== this.node.innerHTML ||
      this.props.placeholder !== nextProps.placeholder
    );
  },

  componentDidUpdate: function() {
    if (this.props.html !== this.node.innerHTML) {
      this.node.innerHTML = this.props.html;
    }
  },

  emitChange: function() {
    const html = this.node.innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange({
        target: {
          value: html,
        },
      });
    }
    this.lastHtml = html;
  },
});

const Editor = (props: EditorProps) => (
  <div className={styles.textarea}>
    <ContentEditable {...props} />
  </div>
);

export default Editor;
