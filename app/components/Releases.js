import React from 'react'
import ReactMarkdown from 'react-markdown'

import markdownFile from '../HEX-RELEASE.md'

require('./Releases.less')

const Releases = () => (
  <div className="Releases">
    <ReactMarkdown source={markdownFile} escapeHtml={false} />
  </div>
)

export default Releases
