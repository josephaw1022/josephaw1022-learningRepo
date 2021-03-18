import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

import { myOwnAction } from "../Redux/Actions/onMyOwnAction";

//  naming our props from the store's states
const mapStateToProps = (state) => {
  return {
    onMyOwnValue: state.onMyOwnValue,
  };
};

// Mapping our changes to the props
const mapActionsToProps = {
  afterClickValue: myOwnAction,
};

class onMyOwn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countValue: this.props.onMyOwnValue,
    };
  }

  handleCountState() {
    this.setState({ countValue: this.state.countValue + 1 });
  }

  handleClick(event) {
    this.handleCountState();

    this.props.afterClickValue(this.state.countValue + 1);
  }

  render() {
    return (
      <>
        <div>
          <Button size='lg' onClick={() => this.handleClick()}>
            Click ME
          </Button>
        </div>
        <div>
          <p>my try at it: {this.props.onMyOwnValue} 👍</p>
        </div>
      </>
    );
  }
}

// Connecting mapStateToProps lets this component get state from the Redux Store as this.props
export default connect(mapStateToProps, mapActionsToProps)(onMyOwn);
