import React, { Component } from "react";
import { Link } from "react-router-dom";
import Record from "./record";
import { Badge, Button } from "react-bootstrap";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: [],
      isLoaded: false,
      count: 0
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      );
  }

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading User Data...</div>;
    } else {
      return (
        <React.Fragment>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <img src={item.picture.large} alt="" />
              </li>
            ))}
            {items.map(item => (
              <li key={item.id}>
                Name: {this.jsUcfirst(item.name.title)}{" "}
                {this.jsUcfirst(item.name.first)}{" "}
                {this.jsUcfirst(item.name.last)}
              </li>
            ))}
            {items.map(item => (
              <li key={item.id}>Gender: {item.gender}</li>
            ))}
            {items.map(item => (
              <Record key="0" label="Email" value={item.email} />
            ))}
            {items.map(item => (
              <Record key="0" label="Phone" value={item.phone} />
            ))}
            <Button variant="warning" className="badge m-3">
              Address:
            </Button>

            {items.map(item => (
              <Record key="0" label="Street" value={item.location.street} />
            ))}
            {items.map(item => (
              <Record key="0" label="City" value={item.location.city} />
            ))}
            {items.map(item => (
              <Record key="0" label="State" value={item.location.state} />
            ))}
            {items.map(item => (
              <Record key="0" label="Postcode" value={item.location.postcode} />
            ))}
          </ul>
          {/* <Link className="btn btn-primary btn-md" to="/edit">
            Edit Profile
          </Link> */}
        </React.Fragment>
      );
    }
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "User Profile" : count;
  }

  jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

export default User;
