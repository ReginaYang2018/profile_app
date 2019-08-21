import React from "react";
import { Component } from "react";
import { Badge } from "react-bootstrap";

class Record extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      label: this.props.label,
      value: this.props.value,
      isInEdit: false
    };
  }

  changeMode = () => {
    this.setState({ isInEdit: !this.state.isInEdit });
  };

  updateValue = () => {
    this.setState({
      isInEdit: false,
      value: this.input.current.value
    });
    console.log(this.input.current.value);
  };

  renderEditView = () => {
    return (
      <div>
        <Badge variant="info" className="badge m-3">
          {this.state.label}
        </Badge>
        <input
          className="mb-3"
          type="text"
          defaultValue={this.state.value}
          ref={this.input}
        />
        <button className="badge m-3 badge-primary" onClick={this.changeMode}>
          cancel
        </button>
        <button className="badge m-3 badge-warning" onClick={this.updateValue}>
          save
        </button>
      </div>
    );
  };

  render() {
    return this.state.isInEdit
      ? this.renderEditView()
      : this.renderDefaultView();
  }

  renderDefaultView() {
    return (
      <div onDoubleClick={this.changeMode}>
        <Badge variant="info" className="badge m-3">
          {this.state.label}
        </Badge>
        {this.state.value}
      </div>
    );
  }
}

export default Record;
