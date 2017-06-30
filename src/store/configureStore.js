import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import overwatchReducer from '../reducer'
import { fetchOverwatchStatsAction, fetchOverwatchVideosAction, fetchSlackUserInfoAction } from '../action';
import { getCookie } from '../utils/cookieUtils';
let middleware = applyMiddleware(thunkMiddleware);
if (process.env.NODE_ENV === 'development') {
middleware = compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(overwatchReducer, middleware);

const players = [
    {name: 'dan', twitchId: 'coppio', battletag: 'beast-1807', discordId: 'danny#2128', position: 'flex', data: {}},
    {name: 'cat', twitchId: 'zii604', battletag: 'zii-1831', discordId: 'CAT#6845', position: 'support', data: {}},
    {name: 'matt', twitchId: 'aliacha84', battletag: 'Aliacha-1521', discordId: 'Aliacha#2180', position: 'tank', data: {}},
    {name: 'adrian', twitchId: 'akwok87', battletag: 'Zarth-1784', discordId: 'akwok#5648', position: 'tank', data: {}},
    {name: 'jeff', twitchId: 'jefdotc', battletag: 'rftr-1562', discordId: 'rftr#2546', position: 'flex', data: {}},
    {name: 'tina', twitchId: '00tuna', battletag: 'tuna-12309', discordId: 'tuna#0575', position: 'support', data: {}},
    {name: 'edward', twitchId: 'the_sinologist', battletag: 'Coldie-1799', discordId: 'Edward#4024', position: 'dps', data: {}},
    {name: 'jp', twitchId: 'superjipped', battletag: 'Jipped-11636', discordId: 'Jipped#7732', youtube: {id: 'UC7zJ4YzO72PVZDYbtjhSY5A', name: 'Jipped'}, position: 'dps', data: {}},
    {name: 'irwin', twitchId: 'irwinbilling', battletag: 'stormh4x-1653', discordId: 'irwin#0368', position: 'dps', data: {}},
    {name: 'christine', twitchId: 'stingpan', battletag: 'stingpan-1838', discordId: 'sting#5792', position: 'tank', data: {}},
    {name: 'dan', twitchId: 'coppio', battletag: 'grapefruit-11670', discordId: 'danny#2128', position: 'flex', data: {}},
    {name: 'tina', twitchId: '00tuna', battletag: 'ori0n-11251', discordId: 'tuna#0575', position: 'support', data: {}},
]


let token = getCookie('token');

// First check if token exists in cookie then check query parameter.
if(!token) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    token = url.searchParams.get("token");
    if(token) {
        document.cookie = `token=${token}`;
        store.dispatch(fetchSlackUserInfoAction(token));
    }
} else {
    store.dispatch(fetchSlackUserInfoAction(token));
}

players.forEach((player)=>{
    store.dispatch(fetchOverwatchStatsAction(player));
});

store.dispatch(fetchOverwatchVideosAction());

export default store;