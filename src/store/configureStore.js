import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import overwatchReducer from '../reducer'
import { fetchOverwatchStatsAction } from '../action';

let middleware = applyMiddleware(thunkMiddleware);
middleware = compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(overwatchReducer, middleware);

const players = [
    {name: 'dan', twitchId: 'coppio', battletag: 'beast-1807', position: 'flex', data: {}},
    {name: 'cat', twitchId: 'zii604', battletag: 'zii-1831', position: 'support', data: {}},
    {name: 'matt', twitchId: 'aliacha84', battletag: 'Aliacha-1521', position: 'tank', data: {}},
    {name: 'adrian', twitchId: 'akwok87', battletag: 'Zarth-1784', position: 'tank', data: {}},
    {name: 'jeff', twitchId: 'jefdotc', battletag: 'rftr-1562', position: 'flex', data: {}},
    {name: 'tina', twitchId: '00tuna', battletag: 'tuna-12309', position: 'support', data: {}},
    {name: 'edward', twitchId: 'the_sinologist', battletag: 'Coldie-1799', position: 'dps', data: {}},
    {name: 'JP', twitchId: 'superjipped', battletag: 'Jipped-11636', position: 'dps', data: {}},
    {name: 'irwin', twitchId: 'irwinbilling', battletag: 'stormh4x-1653', position: 'dps', data: {}},
    {name: 'christine', twitchId: 'stingpan', battletag: 'stingpan-1838', position: 'tank', data: {}},
    {name: 'dan', twitchId: 'coppio', battletag: 'grapefruit-11670', position: 'flex', data: {}},
    {name: 'tina', twitchId: '00tuna', battletag: 'ori0n-11251', position: 'support', data: {}},
]

players.forEach((player)=>{
    store.dispatch(fetchOverwatchStatsAction(player));
});
  
export default store;