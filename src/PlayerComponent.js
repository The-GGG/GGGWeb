import React from 'react';
import { Card, Grid, Icon, Image, Segment } from 'semantic-ui-react';
import { Statistic } from 'semantic-ui-react'
import PlatinumBadge from './assets/images/rank/platinum.png';
import * as Heroes from './Heroes';
import { getHeroMain } from './utils/heroUtils';
import { getCompetitiveRank, getLevel } from './utils/statsUtils';
import { StyleSheet, css } from 'aphrodite';
import { getUserPicture } from './PowerPuff'

const heroImageSource = (heroName) => {
    switch(heroName){
        case 'pharah':
            return Heroes.Pharah;
        case 'soldier76':
            return Heroes.Soldier76;
        case 'mercy':
            return Heroes.Mercy;
        case 'junkrat':
            return Heroes.Junkrat;
        case 'dva':
            return Heroes.Dva;
        case 'lucio':
            return Heroes.Lucio;
        case 'reinhardt':
            return Heroes.Reinhardt;
        case 'roadhog':
            return Heroes.Roadhog;
        case 'zarya':
            return Heroes.Zarya;
        default:
            break;
    }
}

const PlayerComponent = ({battletag, data, position, twitchId, name}) => (
  <Card className='player-component'>
    <div className="ui slide masked reveal image">
        <div className='visible content'>
        <Image className={`${css(styles.image)}`} src={heroImageSource(getHeroMain(data.heroes))} />
        </div>
        <div className={`hidden content`}>
            <Image className={`${css(styles.image)}`} src={getUserPicture(name)} />
        </div>
    </div>
    <Card.Content>
      <Card.Header className={`${css(styles.battletag)} center aligned`}>
        {battletag.replace('-','#').toUpperCase()}
      </Card.Header>
      <Card.Description>
        <Grid columns='equal'>
            <Grid.Row className={`${css(styles.row)}`}>
            <Grid.Column className="center aligned">
               {getCompetitiveRank(data.stats) ? `${getCompetitiveRank(data.stats)}SR` : 'Unranked'}
            </Grid.Column>
            <Grid.Column className="center aligned">
                Level {getLevel(data.stats)}
            </Grid.Column>
            <Grid.Column className="center aligned">
                {position}
            </Grid.Column>
            </Grid.Row>
        </Grid>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name={`${css(styles.twitch)} twitch`} />
        {twitchId}
      </a>
    </Card.Content>
  </Card>
)

const styles = StyleSheet.create({
    battletag: {
      'font-family': 'bignoodletoo',
      'font-weight': 'bold',
      'font-size': '2em',
    },
    twitch: {
      'color': '#6441A4',
    },
    row: {
      'font-size': '1.5em',
    },
    image: {
        'height': '200px',
        'object-fit': 'contain',
        'width': '100%',
    },
    name: {
        'position': 'absolute',
        'bottom': 0,
        'right': 0,
        'padding-right': '5px',
    }
});

export default PlayerComponent
