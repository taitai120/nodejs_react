import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import _ from "lodash";

class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      id: "",
    };
  }

  componentDidMount() {
    let { userEdit } = this.props;
    if (userEdit && !_.isEmpty(userEdit)) {
      this.setState({
        email: userEdit?.email,
        password: userEdit?.password,
        firstName: userEdit?.firstName,
        lastName: userEdit?.lastName,
        address: userEdit?.address,
        id: userEdit?.id,
      });
    }
  }

  checkValidate = () => {
    let isValidate = true;
    let arrayInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrayInput.length; i++) {
      if (this.state[arrayInput[i]] === "") {
        alert(`${arrayInput[i]} can't be empty`);
        isValidate = false;
        break;
      }
    }

    return isValidate;
  };

  handleChangeInput = (e) => {
    let { value, name } = e.target;
    let inputs = { ...this.state };
    inputs[name] = value;
    this.setState({
      ...inputs,
    });
  };

  handleSubmit = () => {
    let isValidate = this.checkValidate();

    if (isValidate) {
      this.props.editUser(this.state);
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.props.toggleModal()}
        className="modal-user-container"
        size="lg"
        centered
      >
        <ModalHeader toggle={() => this.props.toggleModal()}>
          Edit user
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input
                type="text"
                value={this.state.email}
                name="email"
                onChange={(e) => this.handleChangeInput(e)}
                disabled
              />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input
                type="password"
                value={this.state.password}
                name="password"
                onChange={(e) => this.handleChangeInput(e)}
                disabled
              />
            </div>
            <div className="input-container">
              <label>First Name</label>
              <input
                type="text"
                value={this.state.firstName}
                name="firstName"
                onChange={(e) => this.handleChangeInput(e)}
              />
            </div>
            <div className="input-container">
              <label>Last Name</label>
              <input
                type="text"
                value={this.state.lastName}
                name="lastName"
                onChange={(e) => this.handleChangeInput(e)}
              />
            </div>
            <div className="input-container max-width-input">
              <label>Adress</label>
              <input
                type="text"
                value={this.state.address}
                name="address"
                onChange={(e) => this.handleChangeInput(e)}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.handleSubmit()}
          >
            Submit
          </Button>
          <Button
            color="secondary"
            className="px-3"
            onClick={() => this.props.toggleModal()}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
