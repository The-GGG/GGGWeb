import React, { Component } from 'react';
import { fetchOverwatchStatsAction } from './action';
import { Header, Image, Container, Card, Embed } from 'semantic-ui-react'
import { StyleSheet, css } from 'aphrodite';

import PlayerComponent from './PlayerComponent';
import AssembleModal from './components/AssembleModal';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = ({players}) => {

  return (
<div className="pusher">
  <div className="ui inverted vertical masthead center aligned segment">
    <div className={`${css(styles.mainHeaderContainer)} ui text container`}>
      <h1 className={`${css(styles.mainHeader)} ui inverted header`}>
        The GGG Overwatch Team
      </h1>
      <AssembleModal/>
    </div>
  </div>

  <div className={`${css(styles.body)} ui vertical stripe segment`}>
    <div className={`${css(styles.app)} ui grid`}>
        <Container className={css(styles.appcontainer)}>
        <Header as='h1' className={css(styles.rosterHeader)}>Roster</Header>
        <Card.Group className={css(styles.roster)} itemsPerRow={3} stackable={true}>
          {
            players.map((player)=> {
            return <PlayerComponent battletag={player.battletag} data={player.data}
             position={player.position} twitchId={player.twitchId} name={player.name} />
          })}
        </Card.Group>
        </Container>
    </div>
  </div>

  <div className="ui inverted vertical footer segment">
    <div className="ui container">
      <div className="ui stackable inverted divided equal height stackable grid">
        <div className="sixteen wide column">
          <h4 className="ui inverted header">©2017 The GGG. All rights reserved.</h4>
          <p>All other trademarks referenced herein are the properties of their respective owners.</p>
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
    mainHeader: {
      'font-size': '64px',
      'font-family': 'bignoodletoo',
      'color': '#ffffff',
    },
    mainHeaderContainer: {
      'position': 'absolute',
      'bottom': '0',
      'left': '0',
      'right': '0',
      'padding-bottom': '1em',
    },
    rosterHeader: {
      'font-size': '48px',
      'font-family': 'bignoodletoo',
      'color': '#485166',
      'position': 'relative',
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
      'padding-bottom': '24px'
    }
});

export default App;