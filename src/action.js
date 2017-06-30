// Action types
import { fetchOverwatchStats, fetchVideoReel, fetchSlackUserInfo, postAssembleMessage } from './api/owapi';

export const REQUEST_OVERWATCH_STATS = 'REQUEST_OVERWATCH_STATS';
export const RECEIVE_OVERWATCH_STATS_SUCCESS = 'RECEIVE_OVERWATCH_STATS_SUCCESS';
export const RECEIVE_OVERWATCH_STATS_FAILURE = 'RECEIVE_OVERWATCH_STATS_FAILURE';

export const REQUEST_OVERWATCH_VIDEOS = 'REQUEST_OVERWATCH_VIDEOS';
export const RECEIVE_OVERWATCH_VIDEOS_SUCCESS = 'RECEIVE_OVERWATCH_VIDEOS';

export const REQUEST_MEMBERS = 'REQUEST_MEMBERS';
export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS';

export const SET_AUTHENTICATION_TOKEN = 'SET_AUTHENTICATION_TOKEN';

export const REQUEST_SLACK_INFO = 'REQUEST_SLACK_INFO';
export const RECEIVE_SLACK_INFO = 'RECEIVE_SLACK_INFO';

export const POST_REQUEST_ASSEMBLE = 'POST_REQUEST_ASSEMBLE';
export const POST_RECEIVE_ASSEMBLE_SUCCESS = 'POST_RECEIVE_ASSEMBLE_SUCCESS';

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

export const receiveSlackInfo = (token, username) => ({
  type: RECEIVE_SLACK_INFO,
  token,
  username
})

export const fetchSlackUserInfoAction = (token) => {
  return (dispatch) => {
    return fetchSlackUserInfo(token).then(response => {
          return response.json();
        })
        .then(json => dispatch(receiveSlackInfo(token, json.user.name)));
  }
}

export const postRequestAssemble = () => ({
  type: POST_REQUEST_ASSEMBLE,
})
export const postAssembleSuccess = () => ({
  type: POST_RECEIVE_ASSEMBLE_SUCCESS
})

export const postAssembleAction = (token, message) => {
  return (dispatch) => {
    dispatch(postRequestAssemble());
    return postAssembleMessage(token, message).then(response => {
      if(response.ok)
      {
        dispatch(postAssembleSuccess());
      }
    })
    .catch((err) => {

    })
  }
}