// Action types
import { fetchOverwatchStats } from './api/owapi';

export const REQUEST_OVERWATCH_STATS = 'REQUEST_OVERWATCH_STATS';
export const RECEIVE_OVERWATCH_STATS_SUCCESS = 'RECEIVE_OVERWATCH_STATS_SUCCESS';
export const RECEIVE_OVERWATCH_STATS_FAILURE = 'RECEIVE_OVERWATCH_STATS_FAILURE';

export const requestOverwatchStats = (battletag) => ({
  type: REQUEST_OVERWATCH_STATS,
});
export const receiveOverwatchStatsSuccess = (battletag, data, stats) => ({
  type: RECEIVE_OVERWATCH_STATS_SUCCESS,
  battletag: battletag,
  data: data,
});
export const receiveOverwatchStatsFailure = () => ({
  type: RECEIVE_OVERWATCH_STATS_FAILURE,
});

export const fetchOverwatchStatsAction = (battletag) => {
    return (dispatch) => {
        dispatch(requestOverwatchStats(battletag));
        return fetchOverwatchStats(battletag).then(response => {
          if(!response.ok){
            throw Error(response.status);
          }
          return response.json();
        })
        .then(json => dispatch(receiveOverwatchStatsSuccess(battletag, json.us)))
        .catch(status => 
        {
          if(parseInt(status.message, 10) === 429)
          {
            setTimeout(()=> {
              dispatch(fetchOverwatchStatsAction(battletag))}, 3000)
          }
        }
        )
    }
}