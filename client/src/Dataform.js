import React, { Component } from "react";
import axios from "axios";
import curlirize from "axios-curlirize";

// initializing axios-curlirize with your axios instance
curlirize(axios);

export class Dataform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "0",
      duration: "0"
    };
  }
  //handle form event
  handleChangeAmount = event => {
    this.setState({ amount: event.target.value });
  };
  //handle form event
  handleChangeDuration = event => {
    this.setState({ duration: event.target.value });
  };
  //child to parent via callback
  handleInstallements = data => {
    this.props.installments(data);
  };
  //handle sumbit button
  handleSubmit = async event => {
    event.preventDefault();
    //axios post and retrive data from backend
    await axios
      .post("http://localhost:5000/calculate", {
        amount: this.state.amount,
        duration: this.state.duration
      })
      .then(res => {
        console.log(res.data);
        this.handleInstallements(res.data.installments);
        console.log("success");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="Form-data">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group mb-2">
            <label htmlFor="inputAmount" className="sr-only">
              Email
            </label>
            <input
              type="number"
              className="form-control"
              id="inputAmount"
              placeholder="Amount"
              onChange={this.handleChangeAmount}
            />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="inputDuration" className="sr-only">
              Password
            </label>
            <input
              type="number"
              className="form-control"
              id="inputDuration"
              placeholder="Duration"
              onChange={this.handleChangeDuration}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Calculate
          </button>
        </form>
      </div>
    );
  }
}

export default Dataform;
