import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ceo from "../../asset/images/nazmul-hossain.jpg";
import md from "../../asset/images/mohammed-faisal.jpg";
import cmo from "../../asset/images/cmo.jpg";
import hdm from "../../asset/images/hdm.jpg";
import pro from "../../asset/images/pro.jpeg";
import andDev from "../../asset/images/AnnDev.jpg";
import marketing from "../../asset/images/marketing.jpeg";


class Team extends Component {
    render() {
        return (
            <Fragment>

                <Container className="text-center">
                    <h1 className="serviceMainTitle">OUR TEAM MEMBERS AND MANAGEMENT</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="TeamCard text-center">
                                <img className="teamImg" src={ceo}/>
                                <h2 className="TeamName">Nazmul Hossain</h2>
                                <h2 className="TeamSubTitle">CEO</h2>

                            </div>

                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="TeamCard text-center">

                                <img className="teamImg" src={md}/>
                                <h2 className="TeamName">Mohammed Faisal</h2>
                                <h2 className="TeamSubTitle">Managing Director</h2>


                            </div>

                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="TeamCard  text-center">
                                <img className="teamImg" src={cmo}/>
                                <h2 className="TeamName">Abdullah Nahian</h2>
                                <h2 className="TeamSubTitle">CMO</h2>

                            </div>

                        </Col>


                        <Col lg={4} md={6} sm={12}>
                            <div className="TeamCard  text-center " >
                                <img className="teamImg" src={andDev}/>
                                <h2 className="TeamName">amimul Ihsan Mahadi</h2>
                                <h2 className="TeamSubTitle">App Developer</h2>

                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="TeamCard  text-center">
                                <img className="teamImg" src={marketing}/>
                                <h2 className="TeamName">Nayem Islam</h2>
                                <h2 className="TeamSubTitle">Marketing Officer</h2>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="TeamCard  text-center">
                                <img className="teamImg" src={pro}/>
                                <h2 className="TeamName">Musa. Julina Jahan</h2>
                                <h2 className="TeamSubTitle">Public Relation Officer</h2>
                            </div>
                        </Col>


                    </Row>






                </Container>

            </Fragment>
        );
    }
}

export default Team;