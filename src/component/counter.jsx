import React from "react";
class Counter extends React.Component {
  state = {
    count: 0,
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <p>Current Value : {this.state.count}</p>
        <button className="increment" onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    );
  }
}
export default Counter;
