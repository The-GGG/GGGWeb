import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const AssembleModal = () => (
  <Modal trigger={<div className="ui orange button">ASSEMBLE THE GGG!</div>}
    header='Assemble the GGG!'
    content='Are you sure you want to assemble the GGG?'
    actions={[
      { key: 'no', content: 'No', color: 'red', triggerClose: true },
      { key: 'yes', content: 'Yes', color: 'green', triggerClose: true },
    ]} />
)

export default AssembleModal
