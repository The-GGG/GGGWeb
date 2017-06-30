import React, { Component } from 'react';
import $ from 'jquery';
window.jQuery = $;
require('../../node_modules/semantic-ui-calendar/dist/calendar');

class TimeComponent extends React.Component {

  componentDidMount() {
    $('#example3').calendar({
    type: 'time'
    });
  }

  render() {
    return <div className="ui calendar" id="example3">
        <div className="ui input left icon">
          <i className="time icon"></i>
          <input type="text" placeholder="Time"/>
        </div>
    </div>
  }
}

export default TimeComponent;