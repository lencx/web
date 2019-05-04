import React, { Component } from 'react'

export default function withUtterances (
  WrappedComponent, container, repo, theme, term = 'pathname'
) {
  const _theme = `github-${theme || (typeof window !== 'undefined' && window.localStorage.theme)}`
  return class extends Component {
    componentDidMount() {
      this.injectScript()
    }

    injectScript = () => {
      const script = document.createElement('script')
      script.src = 'https://utteranc.es/client.js'
      script.async = true
      script.setAttribute('repo', repo)
      script.setAttribute('theme', _theme)
      script.setAttribute('issue-term', term)
      script.setAttribute('crossorigin', 'anonymous')
      document.querySelector(container).appendChild(script)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}