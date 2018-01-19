import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";
import Channel from "./Channel"

class Chat extends Component {
  render() {
    return (
      <div className="Chat">
        <div className="Channels">
          {this.props.channels.map((channel, index) => (
            <NavLink
              key={index}
              to={`${this.props.match.url}/${channel}`}
            >
              {channel}
            </NavLink>
          ))}
        </div>

        <Route path={`${this.props.match.url}/:channel`} render={routerProps => (
            <Channel
              channel={routerProps.match.params.channel}
            />
          )}
        />
        <Route exact path={this.props.match.url} render={() => (
          <div className="Channel">
            <h3>Please select a channel.</h3>
          </div>
        )} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  }
}

export default connect(mapStateToProps)(Chat);
