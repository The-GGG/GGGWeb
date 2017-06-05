import fetch from 'isomorphic-fetch';

export const fetchOverwatchStats = (battletag) => {
    return fetch(`http://ggg-spotify.azurewebsites.net/owstats/${battletag}`)
}