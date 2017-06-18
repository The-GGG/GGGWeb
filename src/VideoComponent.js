import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import $ from "jquery";

class VideoComponent extends React.Component {
  componentDidMount() {
    const videos = [
        'https://clips-media-assets.twitch.tv/vod-149854398-offset-4670.888333333313-14.166666666666671.mp4',
        'https://clips-media-assets.twitch.tv/vod-152180280-offset-5708.333333333333-16.333333333333343.mp4',
        'https://clips-media-assets.twitch.tv/vod-151973134-offset-1495.996-15.33333333333331.mp4',
        'https://clips-media-assets.twitch.tv/vod-150095329-offset-3858.2803333333536-15.8333333333333.mp4',
        'https://clips-media-assets.twitch.tv/vod-147029359-offset-38.58333333333324-16.083333333333357.mp4'
    ];

    var count=videos.length;
    var index = 0;
    var player=document.getElementById('myVideo');
    var mp4Vid = document.getElementById('mp4Source');
    $(mp4Vid).attr('src', videos[index]);
        player.load();
        player.play();
    player.addEventListener('ended',myHandler,false);

    function myHandler(e)
    {
        
        index = (index+1)%count;
        if(!e) 
        {
            e = window.event; 
        }
        $(mp4Vid).attr('src', videos[index]);
        player.load();
        player.play();
    }
  }

  render() {
    return  <video id="myVideo" className={css(styles.video)} muted
    data-js="header-video">
      <source id="mp4Source" type="video/mp4"/>
    </video>
  }
}

const styles = StyleSheet.create({
    video: {
      'width': '1024px',
      'height': '576px',
      'background': 'black',
    }
})

export default VideoComponent;