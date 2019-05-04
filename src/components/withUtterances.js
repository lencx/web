import React, { Component } from 'react'

export default function withUtterances (
  WrappedComponent, container, repo, theme = `github-${window.localStorage.theme}`, term = 'pathname'
) {
  return class extends Component {
    componentDidMount() {
      this.injectScript()
    }

    injectScript = () => {
      const script = document.createElement('script')
      script.src = 'https://utteranc.es/client.js'
      script.async = true
      script.setAttribute('repo', repo)
      script.setAttribute('theme', theme)
      script.setAttribute('issue-term', term)
      script.setAttribute('crossorigin', 'anonymous')
      document.querySelector(container).appendChild(script)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}