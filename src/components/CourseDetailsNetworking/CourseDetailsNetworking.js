import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Networking from "../../asset/images/web.jpg";

class CourseDetailsNetworking extends Component {
    render() {
        return (
            <Fragment>

                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={6} md={6}>
                            <h1 className="AboutName text-justify">What you learn</h1>
                            <hr/>
                            <ul>

                                        <li>Network basics</li>
                                        <li>Network architectures (OSI Model)</li>
                                        <li>What are hubs, switches, routers?</li>
                                        <li>How is data forwarded through a network?</li>
                                        <li>IP addresses</li>
                                         <li>Ethernet basics</li>
                                         <li>Cabling and network topologies</li>
                                         <li>DNS and DHCP</li>
                                         <li>Routing</li>
                                         <li>VLANs</li>
                                         <li>Cisco device initial configurations</li>
                                         <li>ACLs</li>
                                         <li>Network naming</li>
                                         <li>Wan Technologies</li>
                                         <li>Quality of Service (QoS)</li>
                                         <li>Optical Fiber</li>
                                         <li>FTTH Technology</li>




                            </ul>
                        </Col>


                        <Col sm={12} lg={6} md={6}>

                            <img  className="CourseDetailsImg" src={Networking}/>

                        </Col>



                    </Row>
                </Container>


            </Fragment>
        );
    }
}

export default CourseDetailsNetworking;