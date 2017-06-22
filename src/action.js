// Action types
import { fetchOverwatchStats, fetchVideoReel } from './api/owapi';

export const REQUEST_OVERWATCH_STATS = 'REQUEST_OVERWATCH_STATS';
export const RECEIVE_OVERWATCH_STATS_SUCCESS = 'RECEIVE_OVERWATCH_STATS_SUCCESS';
export const RECEIVE_OVERWATCH_STATS_FAILURE = 'RECEIVE_OVERWATCH_STATS_FAILURE';

export const REQUEST_OVERWATCH_VIDEOS = 'REQUEST_OVERWATCH_VIDEOS';
export const RECEIVE_OVERWATCH_VIDEOS_SUCCESS = 'RECEIVE_OVERWATCH_VIDEOS';

export const SET_AUTHENTICATION_TOKEN = 'SET_AUTHENTICATION_TOKEN';

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

export const requestOverwatchVideos = () => ({
  type: REQUEST_OVERWATCH_VIDEOS,
})

export const receiveOverwatchVideosSuccess = (videos) => ({
  type: RECEIVE_OVERWATCH_VIDEOS_SUCCESS,
  videos
})

export const fetchOverwatchVideosAction = () => {
  return (dispatch) => {
    dispatch(requestOverwatchVideos());
    return fetchVideoReel().then(response => {
      return response.json();
    })
    .then(json => dispatch(receiveOverwatchVideosSuccess(json)));
  }
}

export const setAuthenticationToken = (token) => ({
  type: SET_AUTHENTICATION_TOKEN,
  token
})