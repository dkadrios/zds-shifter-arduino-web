import React from 'react'
import ReactDOM from 'react-dom'
import Instructions from './components/Instructions'
import Releases from './components/Releases'

require('./main.less')

ReactDOM.render(
  <div>
    <p>
      Gearbox is the operating system used by the {''}
      <a href="https://zendrumstudio.com/shifter/" target="_blank" rel="noopener noreferrer">
        ZDS Shifter
      </a>
      .<br />
    </p>
    <hr />
    <p className="downloadLink">
      <a href="https://zendrumstudio.com/includes/gearbox/gearbox-firmware.zip">
        <span>Download latest firmware</span>
      </a>
    </p>
    <hr />
    <h3>Updates</h3>
    <Releases />
    <hr />
    <h3>Applying the Update</h3>
    <Instructions />
  </div>,
  document.body.appendChild(document.createElement('div')),
)
