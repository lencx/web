import React, { Component } from 'react'

export default function withUtterances (
  WrappedComponent, container, repo, theme = 'github-light', term = 'pathname'
) {
  return class extends Component {
    componentDidMount() {
      this.initUtterances()
    }

    injectScript = () => {
      const script = document.createElement('script')
      script.src = 'https://utteranc.es/client.js'
      script.async = true
      script.setAttribute('repo', repo)
      script.setAttribute('theme', theme)
      script.setAttribute('issue-term', term)
      document.querySelector(container).appendChild(script)
    }

    injectPrefetch = () => {
      document.head.insertAdjacentHTML(
        'beforeend',
        '<link rel="prefetch" href="https://utteranc.es/client.js" />'
      )
    }

    injectPreload = () => {
      document.head.insertAdjacentHTML(
        'beforeend',
        '<link rel="preload" href="https://utteranc.es/client.js" as="script" />'
      )
    }

    initUtterances = () => {
      this.injectPrefetch()
      this.injectPreload()
      this.injectScript()
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}