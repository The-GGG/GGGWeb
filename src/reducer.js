import { Map, List } from 'immutable';

import {
    REQUEST_OVERWATCH_STATS,
    RECEIVE_OVERWATCH_STATS_FAILURE,
    RECEIVE_OVERWATCH_STATS_SUCCESS,
    RECEIVE_OVERWATCH_VIDEOS_SUCCESS,
} from './action';

const initialState = Map({
    players: List([]),
    videos: List([
        'https://clips-media-assets.twitch.tv/vod-149854398-offset-4670.888333333313-14.166666666666671.mp4',
        'https://clips-media-assets.twitch.tv/vod-152180280-offset-5708.333333333333-16.333333333333343.mp4',
        'https://clips-media-assets.twitch.tv/vod-151973134-offset-1495.996-15.33333333333331.mp4',
        'https://clips-media-assets.twitch.tv/vod-150095329-offset-3858.2803333333536-15.8333333333333.mp4',
        'https://clips-media-assets.twitch.tv/vod-147029359-offset-38.58333333333324-16.083333333333357.mp4',
        'https://clips-media-assets.twitch.tv/vod-140227580-offset-2028.4643333333333-16.083333333333332.mp4',
        'https://clips-media-assets.twitch.tv/vod-140227580-offset-1566.948-16.000000000000004.mp4',
        'https://clips-media-assets.twitch.tv/vod-142006055-offset-4605.745333333313-16.749999999999993.mp4',
        'https://clips-media-assets.twitch.tv/vod-142006055-offset-3962.5956666666466-16.833333333333346.mp4',
        'https://clips-media-assets.twitch.tv/vod-136651967-offset-36.mp4',
        'https://media.giphy.com/media/3oKIP9gyYmdwfhy6WY/giphy-hd.mp4',
        'https://clips-media-assets.twitch.tv/vod-152876582-offset-1216.5663333333332-22.75000000000002.mp4',
    ])
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
    case RECEIVE_OVERWATCH_VIDEOS_SUCCESS:
        return state.set('videos', action.videos);
    default:
      return state
  }
}

export default overwatchReducer;