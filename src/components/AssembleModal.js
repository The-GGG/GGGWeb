import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import GGG from '../assets/images/ggg.jpg';
import { StyleSheet, css } from 'aphrodite';

const AssembleModal = (isAuthenticated) => (
<Modal className={css(styles.modal)} trigger={
    <div className="ui orange button">ASSEMBLE THE GGG!</div>}  closeIcon='close'>
    <Modal.Content image className={css(styles.content)}>
    <div className={css(styles.header)}>
    <div>ARE YOU SURE YOU WANT TO ASSEMBLE THE GGG?</div>
      <a className={css(styles.button)} href="https://slack.com/oauth/authorize?scope=identity.basic,identity.team&client_id=71819641744.173400203236">
        <div className="ui orange button">ASSEMBLE!</div>
      </a>
    </div>
    </Modal.Content>
  </Modal>
)

const styles = StyleSheet.create({
    header: {
      'text-align': 'center',
      'font-family': 'bignoodletoo',
      'font-size': '48px',
      'color': '#FFFFFF',
      'position': 'relative',
    },
    button: {
      'align-self': 'center',
      'margin-top': '20px',
      'font-family': 'bignoodletoo',
    },
    image: {
      'align-self': 'center',
    },
    content: {
      'height': '400px',
      'flex-direction': 'column',
      'background-image':'url(http://theggg.azurewebsites.net/static/media/soldier76_bg.jpg)',
      'background-size': 'cover',
      'justify-content': 'center',
      ':before': {
        'content': '" "',
        'background-image': 'url(http://theggg.azurewebsites.net/static/media/ow-logo-top.jpg)',
        'height': '100%',
        'background-size': '100%',
        'position': 'absolute',
        'top': '0',
        'left': '0',
        'width': '100%',
        'opacity': '.8',
        'background-size': 'cover',
      },
    }
})

export default AssembleModal
