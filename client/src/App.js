import React, { Component } from "react";
import "./App.css";

import FormData from "./Dataform";
import DisplayMessage from "./Messageboard";

export default class App extends Component {
  state = {
    installments: 0
  };
  // callback from data form
  callbackInstallments = (installment) => {
    this.setState({installments: installment})
  };

  render() {
    return (
      <div className="App-header">
        <FormData installments = {this.callbackInstallments}/>
        <hr />
        <div className="display-data">
          <DisplayMessage installments={this.state.installments} />
        </div>
      </div>
    );
  }
}
