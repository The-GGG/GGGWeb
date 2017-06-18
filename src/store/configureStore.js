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
    {battletag: 'beast-1807', position: 'flex', data: {}},
    {battletag: 'zii-1831', position: 'support', data: {}},
    {battletag: 'Aliacha-1521', position: 'tank', data: {}},
    {battletag: 'Zarth-1784', position: 'tank', data: {}},
    {battletag: 'rftr-1562', position: 'flex', data: {}},
    {battletag: 'tuna-12309', position: 'support', data: {}},
    {battletag: 'Coldie-1799', position: 'dps', data: {}},
    {battletag: 'Jipped-11636', position: 'dps', data: {}},
    {battletag: 'stormh4x-1653', position: 'dps', data: {}},
    {battletag: 'stingpan-1838', position: 'tank', data: {}},
    {battletag: 'grapefruit-11670', position: 'flex', data: {}},
    {battletag: 'ori0n-11251', position: 'support', data: {}},
]

players.forEach((player)=>{
    store.dispatch(fetchOverwatchStatsAction(player));
});
  
export default store;