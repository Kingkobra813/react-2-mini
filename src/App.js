import React, { Component } from "react";

// Components
import EditToggle from "./components/EditToggle";
import ColorChanger from "./components/ColorChanger";
import SizeChanger from "./components/SizeChanger";
import FamilyChanger from "./components/FamilyChanger";
import TextContainer from "./components/TextContainer";

class App extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      fontColor: "black",
      fontSize: 12,
      fontFamily: "monospace",
      allowEdit: "true"
    };
  }

  // updateColor
  updateColor = color => {
    this.setState({ fontColor: color });
  };
  // updateSize
  updateSize = size => {
    this.setState({ fontSize: size });
  };
  // updateFamily
  updateFamily = family => {
    this.setState({ fontFamily: family });
  };
  // updateEditStatus
  updateEditStatus = status => {
    console.log("runnin", status);
    this.setState({ allowEdit: status });
  };

  render() {
    return (
      <div>
        <div className="headerBar">
          {/* Render EditToggle */}
          <EditToggle
            update={this.updateEditStatus}
            allowEdit={this.state.allowEdit}
          />
          {/* Render ColorChanger */}
          <ColorChanger
            update={this.updateColor}
            allowEdit={this.state.allowEdit}
          />
          {/* Render SizeChanger */}
          <SizeChanger
            update={this.updateSize}
            allowEdit={this.state.allowEdit}
          />
          {/* Render FamilyChanger */}
          <FamilyChanger
            update={this.updateFamily}
            allowEdit={this.state.allowEdit}
          />
        </div>
        <div className="textArea">
          <TextContainer
            fontColor={this.state.fontColor}
            fontFamily={this.state.fontFamily}
            fontSize={this.state.fontSize}
          />
        </div>
      </div>
    );
  }
}

export default App;
