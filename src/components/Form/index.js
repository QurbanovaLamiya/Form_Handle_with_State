import React, { Component } from "react";
import "./Form.css";
import formImg from "../../image/formImage.png";

class Form extends Component {
  constructor() {
    super();

    this.userNameRef = React.createRef();
    this.userEmailRef = React.createRef();
    this.userPasswordRef = React.createRef();

    this.state = {
      form: {
        userName: "",
        userEmail: "",
        userPassword: "",
      },
      isValidate: {
        userName: false,
        userEmail: false,
        userPassword: false,
      },
      successAccount: false,
    };
  }

  createAccount() {
    let userName = this.userNameRef.current.value;
    let userEmail = this.userEmailRef.current.value;
    let userPassword = this.userPasswordRef.current.value;

    if (!userName) {
      this.setState({ isValidate: { userName: true } });
      return;
    }

    if (!userEmail) {
      this.setState({ isValidate: { userEmail: true } });
      return;
    }

    if (!userPassword) {
      this.setState({ isValidate: { userPassword: true } });
      return;
    }

    this.setState({
      form: { userName, userEmail, userPassword },
      isValidate: { userName: false, userEmail: false, userPassword: false },
      successAccount: true,
    });

    setTimeout(() => {
      this.setState({
        successAccount: false,
      });
    }, 4000);

    this.userNameRef.current.value = "";
    this.userEmailRef.current.value = "";
    this.userPasswordRef.current.value = "";
  }

  render() {
    return (
      <div className="section">
        <img src={formImg} alt="" width={120} height={120} />
        <div className="container">
          <input ref={this.userNameRef} placeholder="Name" type="text" />
          {this.state.isValidate.userName && <span>Name is required</span>}
          <input ref={this.userEmailRef} placeholder="Email" type="email" />
          {this.state.isValidate.userEmail && <span>Email is required</span>}
          <input
            ref={this.userPasswordRef}
            placeholder="Password"
            type="password"
          />
          {this.state.isValidate.userPassword && (
            <span>Password is required</span>
          )}
        </div>
        <button onClick={() => this.createAccount()}>Create Account</button>
        {this.state.successAccount && (
          <div className="success">Your account has been created</div>
        )}
      </div>
    );
  }
}

export default Form;
