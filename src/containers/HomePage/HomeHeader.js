import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fa-solid fa-bars"></i>
                            <div className="header-logo"></div>
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div>
                                    <b>Chuyên khoa</b>
                                </div>
                                <div className="subs-title">
                                    Tìm bác sỹ theo chuyên khoa
                                </div>
                            </div>
                            <div className="child-content">
                                <div>
                                    <b>Cơ sở y tế</b>
                                </div>
                                <div className="subs-title">
                                    Chọn bệnh viện phòng khám
                                </div>
                            </div>
                            <div className="child-content">
                                <div>
                                    <b>Bác sỹ</b>
                                </div>
                                <div className="subs-title">
                                    Chọn bác sỹ giỏi
                                </div>
                            </div>
                            <div className="child-content">
                                <div>
                                    <b>Gói khám</b>
                                </div>
                                <div className="subs-title">
                                    Khám sức khỏe tổng quát
                                </div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support">
                                <i class="fa-solid fa-circle-question"></i> Hỗ
                                trợ
                            </div>
                            <div className="flag">VN</div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1">NỀN TẢNG Y TẾ</div>
                        <div className="title2">
                            CHĂM SÓC SỨC KHỎE TOÀN DIỆN
                        </div>
                        <div className="search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Tìm phòng khám" />
                        </div>
                    </div>
                    <div className="content-down">
                        <div className="options">
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fa-solid fa-hospital"></i>
                                </div>
                                <div className="text-child">
                                    Khám chuyên khoa
                                </div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fa-solid fa-mobile-screen-button"></i>
                                </div>
                                <div className="text-child">Khám từ xa</div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fa-solid fa-bed"></i>
                                </div>
                                <div className="text-child">Khám tổng quát</div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fa-solid fa-microscope"></i>
                                </div>
                                <div className="text-child">
                                    Xét nghiệm y học
                                </div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i class="fa-solid fa-user-doctor"></i>
                                </div>
                                <div className="text-child">
                                    Sức khỏe tinh thần
                                </div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fa-solid fa-tooth"></i>
                                </div>
                                <div className="text-child">Khám nha khoa</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);