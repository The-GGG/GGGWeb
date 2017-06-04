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
    {battletag: 'beast-1807', position: 'flex'},
    {battletag: 'zii-1831', position: 'support'},
    {battletag: 'aliacha-1521', position: 'tank'},
    {battletag: 'zarth-1784', position: 'tank'},
    {battletag: 'rftr-1521', position: 'flex'},
    {battletag: 'tuna-12309', position: 'support'},
    {battletag: 'coldie-1799', position: 'dps'},
    {battletag: 'jipped-11636', position: 'dps'},
    {battletag: 'stormh4x-1653', position: 'dps'},
    {battletag: 'stingpan-1838', position: 'tank'},
]

// players.forEach((player)=>{
//     store.dispatch(fetchOverwatchStatsAction(player.battletag));
// });
  
export default store;