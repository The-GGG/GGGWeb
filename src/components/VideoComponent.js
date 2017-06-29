import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import $ from "jquery";

class VideoComponent extends React.Component {

  shouldComponentUpdate(nextProps) {
    return (this.props.videos !== nextProps.videos);
  }

  componentDidUpdate() {
    var self = this;
    var count=this.props.videos.length;
    var index = Math.floor(Math.random() * count);
    var player=document.getElementById('myVideo');
    var mp4Vid = document.getElementById('mp4Source');
    $(mp4Vid).attr('src', this.props.videos[index]);
    player.load();
    player.play();
    player.addEventListener('ended',myHandler,false);

    function myHandler(e)
    {
        
        index = (index+1) % count;
        if(!e) 
        {
            e = window.event; 
        }
        $(mp4Vid).attr('src', self.props.videos[index]);
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
      '@media (max-width: 1024px)': { display: 'none'}
    },
})

export default VideoComponent;