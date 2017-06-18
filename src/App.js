import React, { Component } from 'react';
import { fetchOverwatchStatsAction } from './action';
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
<div className="pusher">
  <div className="ui inverted vertical masthead center aligned segment">
    <div className="ui text container">
      <h1 className="ui inverted header">
        The GGG Overwatch
      </h1>
    </div>
  </div>

  <div className={`${css(styles.body)} ui vertical stripe segment`}>
    <div className={`${css(styles.app)} ui grid`}>
        <Container className={css(styles.appcontainer)}>
        <Header as='h1'>Roster</Header>
        <Card.Group className={css(styles.roster)} itemsPerRow={3} stackable={true}>
          {
            players.map((player)=> {
            return <PlayerComponent battletag={player.battletag} data={player.data} position={player.position} />
          })}
        </Card.Group>
        </Container>
    </div>
  </div>

  <div className="ui inverted vertical footer segment">
    <div className="ui container">
      <div className="ui stackable inverted divided equal height stackable grid">
        <div className="sixteen wide column">
          <h4 className="ui inverted header">Footer Header</h4>
          <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
        </div>
      </div>
    </div>
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
        'left': '0'
      }
    },
    body: {
      'background-color': '#f0edf2'
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
      'padding-bottom': '24px'
    }
});

export default App;