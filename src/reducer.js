import { Map, List } from 'immutable';

import {
    REQUEST_OVERWATCH_STATS,
    RECEIVE_OVERWATCH_STATS_FAILURE,
    RECEIVE_OVERWATCH_STATS_SUCCESS,
    RECEIVE_OVERWATCH_VIDEOS_SUCCESS,
    SET_AUTHENTICATION_TOKEN,
    RECEIVE_SLACK_INFO,
    POST_REQUEST_ASSEMBLE,
    POST_RECEIVE_ASSEMBLE_SUCCESS,
} from './action';

const initialState = Map({
    players: List([]),
    videos: List([]),
    token: '',
    username: '',
    hasAssembled: 'no',
})

const overwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_OVERWATCH_STATS_SUCCESS:
        return state.update('players', players => players.concat({
            battletag: action.player.battletag,
            position: action.player.position,
            twitchId: action.player.twitchId,
            discordId: action.player.discordId,
            youtube: action.player.youtube,
            name: action.player.name,
            data: action.data,
        }));
    case RECEIVE_OVERWATCH_VIDEOS_SUCCESS:
        return state.set('videos', action.videos);
    case RECEIVE_SLACK_INFO:
        return state.set('token', action.token).set('username', action.username);
    case POST_REQUEST_ASSEMBLE:
        return state.set('hasAssembled', 'fetching')
    case POST_RECEIVE_ASSEMBLE_SUCCESS:
        return state.set('hasAssembled', 'yes')
    default:
      return state
  }
}

export default overwatchReducer;