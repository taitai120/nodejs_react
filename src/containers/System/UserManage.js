import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import ModalEditUser from "./ModalEditUser";
import "./UserManage.scss";
import {
  getAllUsers,
  createUserApi,
  deleteUserApi,
  updateUserApi,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import { emitter } from "../../utils/emitter";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isOpenModal: false,
      isOpenModalEdit: false,
      userEdit: {},
    };
  }
  async componentDidMount() {
    await this.getAllUsers();
  }

  getAllUsers = async () => {
    let response = await getAllUsers("all");

    if (response && response.errCode === 0) {
      this.setState({
        users: response.users,
      });
    }
  };

  handleAddNewUser = () => {
    this.setState({
      isOpenModal: true,
    });
  };

  toggleModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };

  createNewUser = async (data) => {
    let response = await createUserApi(data);
    if (response.errCode != 0) {
      alert(`Error Create: ${response.errMessage}`);
    } else {
      await this.getAllUsers();
      this.setState({
        isOpenModal: false,
      });
      emitter.emit("EVENT_CLEAR_MODAL_DATA");
    }
  };

  deleteUser = async (id) => {
    try {
      let response = await deleteUserApi(id);
      if (response.errCode != 0) {
        console.log(`Delete user error: ${response.errMessage}`);
      } else {
        await this.getAllUsers();
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleEditUser = (user) => {
    this.setState({
      isOpenModalEdit: true,
      userEdit: user,
    });
  };

  toggleModalEdit = () => {
    this.setState({
      isOpenModalEdit: !this.state.isOpenModalEdit,
      userEdit: {},
    });
  };

  editUser = async (user) => {
    try {
      let response = await updateUserApi(user);
      if (response.errCode != 0) {
        console.log(`Edit user error: ${response.errMessage}`);
      } else {
        await this.getAllUsers();
        this.setState({
          isOpenModalEdit: false,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  renderTable() {
    return this.state.users?.map((user, i) => {
      return (
        <tr key={i}>
          <td>{user.email}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.address}</td>
          <td>
            <button
              className="action-btn btn-edit mr-3"
              onClick={() => this.handleEditUser(user)}
            >
              <i className="fa-solid fa-pen"></i>
            </button>
            <button
              className="action-btn btn-delete"
              onClick={() => this.deleteUser(user.id)}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="users-container">
        <div className="title text-center">Manage users</div>
        <div className="mx-1">
          <button
            className="btn-add px-3"
            onClick={() => this.handleAddNewUser()}
          >
            <i className="fa-solid fa-plus"></i> Add new user
          </button>
        </div>
        <div className="users-table mt-3 mx-1">
          <table id="customers">
            <thead>
              <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>
        <ModalUser
          isOpen={this.state.isOpenModal}
          toggleModal={this.toggleModal}
          createNewUser={this.createNewUser}
        />
        {this.state.isOpenModalEdit && (
          <ModalEditUser
            isOpen={this.state.isOpenModalEdit}
            toggleModal={this.toggleModalEdit}
            userEdit={this.state.userEdit}
            editUser={this.editUser}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
