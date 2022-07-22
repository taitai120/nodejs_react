import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import "./Login.scss";
import { FormattedMessage } from "react-intl";

import { handleLoginApi } from "../../services/userService";
import { userLoginSuccess } from "../../store/actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      turnOnPassword: false,
      errMessage: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });
    try {
      console.log(`username -> ${this.state.username}`);
      console.log(`password -> ${this.state.password}`);

      const response = await handleLoginApi(
        this.state.username,
        this.state.password
      );

      if (response && response.errCode !== 0) {
        this.setState({
          errMessage: response.errMessage,
        });
      }

      if (response && response.errCode === 0) {
        this.props.userLoginSuccess(response.user);
      }
    } catch (e) {
      if (e.response) {
        if (e.response.data) {
          this.setState({
            errMessage: e.response.data.message,
          });
        }
      }
    }
  };

  turnOnPassword = () => {
    this.setState({
      turnOnPassword: !this.state.turnOnPassword,
    });
  };

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 login-input">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={this.state.username}
                onChange={this.handleOnChange}
              />
            </div>
            <div className="col-12 login-input">
              <label>Password</label>
              <div className="custom-input-password">
                <input
                  type={
                    this.state.turnOnPassword === false ? "password" : "text"
                  }
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleOnChange}
                />
                <i
                  className={
                    this.state.turnOnPassword === false
                      ? "fa-solid fa-eye"
                      : "fa-solid fa-eye-slash"
                  }
                  onClick={this.turnOnPassword}
                ></i>
              </div>
            </div>
            <div className="col-12">
              <p className="text-danger">{this.state.errMessage}</p>
            </div>
            <div className="col-12">
              <button className="btn-login" onClick={this.handleLogin}>
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forgot your password?</span>
            </div>
            <div className="col-12 text-center mt-3">
              <span className="text-other-login">Or login with:</span>
            </div>
            <div className="col-12 social-login mt-3">
              <i className="fa-brands fa-google-plus-g google"></i>
              <i className="fa-brands fa-facebook-f facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
