import React from 'react';
import { Card, Grid, Icon, Image, Segment } from 'semantic-ui-react';
import { Statistic } from 'semantic-ui-react'
import PlatinumBadge from './assets/images/rank/platinum.png';
import * as Heroes from './Heroes';
import { getCompetitiveRank, getLevel } from './utils/statsUtils';
import './stylesheets/PlayerComponent.css';

const items = [
  { label: 'Level', value: '200' },
  { label: 'Role', value: 'Flex' },
  { label: 'Rank', value: '3023' },
]

const getHeroMain = (heroes) => {
    let main = '';
    let currentMax = 0;
    Object.keys(heroes.playtime.quickplay).map((key) => {
        if(heroes.playtime.quickplay[key] > currentMax) {
            currentMax = heroes.playtime.quickplay[key];
            main = key;
        }
    });
    return main;
}

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


const PlayerComponent = ({battletag, data, position}) => (
  <Card className='player-component'>
    <Image className="profile" src={heroImageSource(getHeroMain(data.heroes))} />
    <Card.Content>
      <Card.Header>
        {battletag}
      </Card.Header>
      <Card.Description>
        <Grid columns='equal'>
            <Grid.Row>
            <Grid.Column>
               {getCompetitiveRank(data.stats) ? `${getCompetitiveRank(data.stats)}SR` : 'Unranked'}
            </Grid.Column>
            <Grid.Column>
                Level {getLevel(data.stats)}
            </Grid.Column>
            <Grid.Column>
                {position}
            </Grid.Column>
            </Grid.Row>
        </Grid>
      </Card.Description>
    </Card.Content>
  </Card>
)

export default PlayerComponent
