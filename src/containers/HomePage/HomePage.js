import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HomeHeader />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
