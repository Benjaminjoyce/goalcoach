import React, { Component } from "react";
import { Link } from "react-router";
import { firebaseApp } from "../firebase";

// SignIn.jsx and SignUp.jsx are very similiar and could be refactored into a single component.
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  }

  signIn() {
    console.log("this.state", this.state);
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    return (
      <div className="form-inline" style={{ margin: "5%" }}>
        <h2>Sign In</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            style={{ marginRight: "5px" }}
            placeholder="email"
            onChange={event => this.setState({ email: event.target.value })}
            // Something to keep in mind is that using "onChange" here to call set state would call a complete re-render every keypress.
            // While "onBlur" and "onFocus" come with their own issues they can both be used here to fix this, you might find how ever
            // setting the "value" can become tricky that way.
            // forms are tricky in react so in this case "onChange" will get the job done easy enough.
          />
          <input
            className="form-control"
            type="password"
            style={{ marginRight: "5px" }}
            placeholder="password"
            onChange={event => this.setState({ password: event.target.value })}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signIn()}
          >
            Sign In
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div>
          <Link to={"/signup"}>Sign up instead</Link>
        </div>
      </div>
    );
  }
}

export default SignIn;
