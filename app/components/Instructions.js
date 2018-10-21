import React from 'react'
import ReactMarkdown from 'react-markdown'

import markdownFile from '../HEX-README.md'

require('./Instructions.less')

const Instructions = () => (
  <div className="Instructions">
    <ReactMarkdown source={markdownFile} escapeHtml={false} />
  </div>
)

export default Instructions
