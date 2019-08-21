import React, { Component } from "react";
import { Link } from "react-router-dom";
import { InputGroup, FormControl } from "react-bootstrap";
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      zipcode: ""
    };
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    // this.getUserDetails();
  }

  //   getUserDetails() {
  //     let userName = this.props.match.params.name;
  //   }

  componentDidMount() {
    // const { handle } = this.props.match.params;
    // const { firstName } = this.props.location.state;
  }

  onSubmit(e) {
    const newProfile = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
    };
    // this.editMeetup(newProfile);
    e.preventDefault();
  }

  render() {
    console.log(this.test);
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <br />
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                First Name
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <br />
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Last Name
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <br />
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Street
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <br />
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                City
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <br />
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                State
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <br />
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Zipcode
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          {/* <div className="input-field">
            <input
              type="text"
              name="address"
              ref="address"
              value={this.state.address}
              onChange={this.handleInputChange}
            />
            <label htmlFor="address">Address</label>
          </div> */}
          <input type="submit" value="Save" className="btn" />
          {/* <Link className="btn btn-primary btn-md" to="/">
            Back
          </Link> */}
        </form>
      </div>
    );
  }
}

export default EditProfile;
