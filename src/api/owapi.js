import fetch from 'isomorphic-fetch';

const SERVER_HOST = 'https://ggg-spotify.azurewebsites.net'
export const fetchOverwatchStats = (battletag) => {
    return fetch(`${SERVER_HOST}/owstats/${battletag}`)
}

export const fetchVideoReel = () => {
    return fetch(`${SERVER_HOST}/owvideos`);
}