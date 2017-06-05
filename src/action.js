// Action types
import { fetchOverwatchStats } from './api/owapi';

export const REQUEST_OVERWATCH_STATS = 'REQUEST_OVERWATCH_STATS';
export const RECEIVE_OVERWATCH_STATS_SUCCESS = 'RECEIVE_OVERWATCH_STATS_SUCCESS';
export const RECEIVE_OVERWATCH_STATS_FAILURE = 'RECEIVE_OVERWATCH_STATS_FAILURE';

export const requestOverwatchStats = (battletag) => ({
  type: REQUEST_OVERWATCH_STATS,
});
export const receiveOverwatchStatsSuccess = (player, data, stats) => ({
  type: RECEIVE_OVERWATCH_STATS_SUCCESS,
  player: player,
  data: data,
});
export const receiveOverwatchStatsFailure = () => ({
  type: RECEIVE_OVERWATCH_STATS_FAILURE,
});

export const fetchOverwatchStatsAction = (player) => {
    return (dispatch) => {
        dispatch(requestOverwatchStats(player));
        return fetchOverwatchStats(player.battletag).then(response => {
          if(!response.ok){
            throw Error(response.status);
          }
          return response.json();
        })
        .then(json => dispatch(receiveOverwatchStatsSuccess(player, json.us)))
        .catch(status => 
        {
          if(parseInt(status.message, 10) === 429)
          {
            setTimeout(()=> {
              dispatch(fetchOverwatchStatsAction(player))}, 3000)
          }
        }
        )
    }
}