import React, { Component } from "react";
import { connect } from "react-redux";

class Output extends Component {
  render() {
    return (
      <div>
        <h3>
          Output:<b>{this.props.submittedValue}</b>
       </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

// Connecting mapStateToProps lets this component get state from the Redux Store as this.props
export default connect(mapStateToProps)(Output);
