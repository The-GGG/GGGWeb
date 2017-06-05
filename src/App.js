import React, { Component } from 'react';
import { fetchOverwatchStatsAction } from './action';
import AppBar from 'material-ui/AppBar';
import { Header, Image, Container, Card, Embed } from 'semantic-ui-react'
import { StyleSheet, css } from 'aphrodite';

import logo from './logo.svg';
import PlayerComponent from './PlayerComponent';
import Portrait from './components/Portrait';
import OverwatchIcon from './assets/images/ow_logo.png';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = ({players}) => {

  return (
    <div className={`${css(styles.app)} ui grid`}>
      <div className="sixteen wide column">
        <Container className={css(styles.appcontainer)}>
        <Header as='h1'>Roster</Header>
        <div className={css(styles.divider)}/>
        <Card.Group className={css(styles.roster)} itemsPerRow={3} stackable={true}>
          {
            players.map((player)=> {
            return <PlayerComponent battletag={player.battletag} data={player.data} position={player.position} />
          })}
        </Card.Group>
        </Container>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
    app: {
      'font-family': 'bignoodletoo',
      'background-color': 'transparent',
      'background-image': 'url(http://www.overwatchcontenders.com/images/bg/content-bg-bottom.png)',
      'height': '100%',
      'background-size': '100%',
      'background-repeat': 'no-repeat',
      'background-position': 'center bottom',
      ':before': {
        'content': '" "',
        'background-image': 'url(http://www.overwatchcontenders.com/images/bg/content-bg-top.png)',
        'height': '100%',
        'background-size': '100%',
        'background-repeat': 'no-repeat',
        'background-position': 'center top',
        'position': 'absolute',
        'width': '100%',
      }
    },
    videoplayer: {
      'position': 'absolute',
      'right': '0',
      'bottom': '0',
      'height': '100%',
    },
    appcontainer: {
      'padding-top': '16px',
    },
    appbar: {
      'background-color': "#000",
    },
    appbaricon: {
      'height': '50px'
    },
    divider: {
      'height': '4px',
      'width': '100%',
      'max-width': '1280px',
      'margin': '0 auto',
      'background': '-moz-linear-gradient(left,rgba(47,60,85,0) 0%,#2f3c55 20%,#2f3c55 80%,rgba(47,60,85,0) 100%)',
      'background': '-webkit-linear-gradient(left,rgba(47,60,85,0) 0%,#2f3c55 20%,#2f3c55 80%,rgba(47,60,85,0) 100%)',
      'background': 'linear-gradient(to right,rgba(47,60,85,0) 0%,#2f3c55 20%,#2f3c55 80%,rgba(47,60,85,0) 100%)',
      'position': 'relative',
      'opacity': '.5'
    },
    roster: {
      'padding-top': '24px',
    }
});

export default App;