import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";

class SoftwareDetails extends Component {

            render() {
                return (
                    <Fragment>

                        <Container className="mt-5">
                            <Row>
                                <Col sm={12} lg={6} md={6}>
                                    <h1 className="softwareLearn text-justify">Our Software Function </h1>
                                    <hr/>
                                    <ul>
                                        <li>Front-End
                                            <ul>
                                                <li>PhotoShop</li>
                                                <li>HTML5</li>
                                                <li>CSS3</li>
                                                <li>PSD TO HTML</li>
                                                <li>RESPONSIVE DESIGN</li>

                                            </ul>

                                        </li>
                                        <li>Back-End
                                            <ul>
                                                <li>PHP</li>
                                                <li>JS</li>
                                                <li>MYSQL</li>
                                                <li>LIVE PROJECT WITH OOP</li>
                                                <li>WORDPRESS</li>
                                            </ul>
                                        </li>
                                    </ul>

                                </Col>
                                <Col sm={12} lg={6} md={6}>
                                    <h1 className="softwareLearn text-justify">You Can Learn From Following Video</h1>
                                    <hr/>
                                    <Player>
                                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                        <BigPlayButton position="center"/>
                                    </Player>


                                </Col>


                            </Row>
                        </Container>

                    </Fragment>
                );
            }
        }


export default SoftwareDetails;