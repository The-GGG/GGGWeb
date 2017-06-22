import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import GGG from '../assets/images/ggg.jpg';
import { StyleSheet, css } from 'aphrodite';

const AssembleModal = () => (
<Modal className={css(styles.modal)} trigger={
    <div className="ui orange button">ASSEMBLE THE GGG!</div>}>
    <Modal.Header className={css(styles.header)}>Assemble the GGG</Modal.Header>
    <Modal.Content image className={css(styles.content)}>
      <Image wrapped size='medium' src={GGG} />
    <a className={css(styles.button)} href="https://slack.com/oauth/authorize?scope=identity.basic,identity.team&client_id=71819641744.173400203236">
      <div className="ui orange button">ASSEMBLE!</div></a>
    </Modal.Content>
  </Modal>
)

const styles = StyleSheet.create({
    header: {
      'text-align': 'center',
      'font-family': 'bignoodletoo',
      'font-size': '36px',
    },
    modal: {
      'width':'auto',
    },
    button: {
      'align-self': 'center',
      'margin-top': '20px',
      'font-family': 'bignoodletoo',
    },
    content: {
      'flex-direction': 'column',
    }
})

export default AssembleModal
