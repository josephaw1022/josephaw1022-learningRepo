import React, { Component } from "react";

import { Container } from "reactstrap";
import "./App.css";

// import { Counter } from "./features/counter/Counter";
import Input from "./Components/Input";
// import Output from "./Components/Output"
import OnMyOwn from "./Components/onMyOwn";
import Navbar from "./Components/Navbar";
import "./Components/style.scss";
import $ from "jquery";

class App extends Component {
  componentDidUpdate() {
    console.log(document.documentElement.scrollTop);
    console.log($(document).height);
  }
  render() {
    return (
      <>
        <div style={{ marginBottom: "40px" }}>
          <Navbar />
          
        </div>

        <div className='App'>
          <Container>
            <Input defaultInput={""} />
            <Input defaultInput={""} />
            <Input defaultInput={""} />
            <Input defaultInput={""} />
            <Input defaultInput={""} />
            <OnMyOwn />
          </Container>
        </div>
      </>
    );
  }
}

export default App;
