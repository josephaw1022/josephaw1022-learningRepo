import React, { Component } from "react";
import { connect } from "react-redux";
import { submitValue } from "../Redux/Actions/submittedValueActions";
import { Button, Input as InputC, Col } from "reactstrap";
import Output from "./Output";
import { Form, FormGroup, Label } from "reactstrap";
import { Container } from "react-bootstrap";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.defaultInput,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  } 

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }
    this.props.onSubmitValue(this.state.inputValue);
  }

  handleReset(event) {
    this.setState(
      (state) => ({ inputValue: " " }),
      () => {
        this.props.onSubmitValue(this.state.inputValue);
      }
    );
  }

  render() {
    return (
      <div className='section' style={{ marginBottom: "80px" }}>
        <Container style={{zIndex:"0"}}>
          <Form>
            <FormGroup row>
              <Label for='exampleText' sm={2}>
                Text Area
              </Label>
              <Col sm={10}>
                <InputC
                  type='text'
                  name='text'
                  id='exampleText' 
                  value={this.state.inputValue}
                  onChange={this.handleChange}
                  style={{zIndex:"-1"}}
                />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 4, offset: 2 }}>
                <FormGroup check row >
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button
                      className='myButton'
                      onClick={() => this.handleSubmit()}
                    >
                      Submit
                    </Button>
                    {"   "}
                    <Button onClick={() => this.handleReset()}>Reset </Button>
                  </Col>
                </FormGroup>
              </Col>
            </FormGroup>
          </Form>
          <br />
          <Output />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    defaultInput: props.defaultInput + " " + state.submittedValue,
  };
};

const mapActionsToProps = {
  onSubmitValue: submitValue,
};

export default connect(mapStateToProps, mapActionsToProps)(Input);
