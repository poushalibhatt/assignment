import React from "react";
import Rectangle from "./Rectangle";

class Button extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      color: "red",
      shoWText: false,
    };
  }

  handleColorChange = () => {
    this.setState({
      color: "green",
      shoWText: !this.state.shoWText,
    });
  };
  render() {
    return (
      <>
        <Rectangle
          color={this.state.color}
        />
        <button onClick={this.handleColorChange} className="button">
          Press
        </button>
        {this.state.shoWText && <p>Button Clicked</p>}
      </>
    );
  }
}

export default Button;
