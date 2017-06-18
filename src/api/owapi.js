import fetch from 'isomorphic-fetch';

export const fetchOverwatchStats = (battletag) => {
    return fetch(`https://ggg-spotify.azurewebsites.net/owstats/${battletag}`)
}