import fetch from 'isomorphic-fetch';

export const fetchOverwatchStats = (battletag) => {
    return fetch(`https://owapi.net/api/v3/u/${battletag}/blob`)
}