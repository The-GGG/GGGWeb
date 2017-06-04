import React from 'react';
import { Card, Grid, Icon, Image, Segment } from 'semantic-ui-react';
import { Statistic } from 'semantic-ui-react'
import PlatinumBadge from './assets/images/rank/platinum.png';
import { Ana, Lucio, Reinhardt, Roadhog } from './Heroes';
import { getLevel } from './utils/statsUtils';
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

const getCompetitiveRank = (stats, mode) => {

}

const heroImageSource = (heroName) => {
    switch(heroName){
        case 'lucio':
            return Lucio;
        case 'reinhardt':
            return Reinhardt;
        case 'roadhog':
            return Roadhog;
        default:
            break;
    }
}


const PlayerComponent = ({battletag, data}) => (
  <Card className='player-component'>
    <Image className="profile" src={heroImageSource(getHeroMain(data.heroes))} />
    <Card.Content>
      <Card.Header>
        {`${battletag}`}
      </Card.Header>
      <Card.Description>
        <Grid columns='equal'>
            <Grid.Row>
            <Grid.Column>
               2000 SR
            </Grid.Column>
            <Grid.Column>
                Level {getLevel(data.stats)}
            </Grid.Column>
            <Grid.Column>
                Support
            </Grid.Column>
            </Grid.Row>
        </Grid>
      </Card.Description>
    </Card.Content>
  </Card>
)

export default PlayerComponent
