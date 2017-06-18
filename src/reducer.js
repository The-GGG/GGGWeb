import { Map, List } from 'immutable';

import {
    REQUEST_OVERWATCH_STATS,
    RECEIVE_OVERWATCH_STATS_FAILURE,
    RECEIVE_OVERWATCH_STATS_SUCCESS,
} from './action';

const initialState = Map({
    players: List([])
})

const overwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_OVERWATCH_STATS_SUCCESS:
        return state.update('players', players => players.concat({
            battletag: action.player.battletag,
            position: action.player.position,
            twitchId: action.player.twitchId,
            name: action.player.name,
            data: action.data,
        }));
    case RECEIVE_OVERWATCH_STATS_FAILURE:
    default:
      return state
  }
}

export default overwatchReducer;