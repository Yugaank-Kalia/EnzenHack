import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import Upload from './Upload'
import "./Image.css";
class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: undefined,
    };
  }

  renderButton() {
    if(!!this.state.selectedFile) {
      return;
    } else {
      <Upload />
    }
  }

  render() {
    return (
      <div className="Image">
        <div className="upload-btn-wrapper">
          {this.renderButton}
          <Button type="danger" className="btn-img" onClick={this.handleClick}>
            Upload a file
          </Button>
          <Input type="file" onChange={this.fileSelectHandler} />
        </div>
      </div>
    );
  }
}

export default Image;
