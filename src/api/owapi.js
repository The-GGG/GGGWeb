import fetch from 'isomorphic-fetch';

const SERVER_HOST = 'http://localhost:5000';

export const fetchMembers = () => {
    return fetch(`${SERVER_HOST}/members`);
}

export const fetchOverwatchStats = (battletag) => {
    return fetch(`${SERVER_HOST}/ow/stats/${battletag}`)
}

export const fetchVideoReel = () => {
    return fetch(`${SERVER_HOST}/ow/videos`);
}

export const fetchSlackUserInfo = (token) => {
    return fetch(`https://slack.com/api/users.identity?token=${token}`);
}

export const postAssembleMessage = (token, message) => {
    return fetch(`${SERVER_HOST}/assemble`,
    {
        method: 'POST',
        body: JSON.stringify({message: message}),
        headers: {
            'X-Slack-Token': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}