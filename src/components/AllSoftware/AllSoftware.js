import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Hrm from "../../asset/images/HRM.svg";
import {Link} from "react-router-dom";
import Army from "../../asset/images/Kash-Army.svg";
import Agro from "../../asset/images/Agro-Meg.svg";
import Billing from "../../asset/images/billing-express.svg";
import cube from "../../asset/images/Cube.svg";
import Lab from "../../asset/images/Lab-bond.svg";
import Shodai from "../../asset/images/shodai-ghor.svg";

class AllSoftware extends Component {

    render() {
        return (
            <Fragment>
                <div className="softHr">
                    <hr className=" bg-info w-50"/>
                </div>
                <Container className="text-center">

                    <h1 className="SoftwareMainTitle">SOFTWARE SOLUTIONS</h1>
                    <h4 className="SoftwareSubTitle"> We provide state of the art IT solutions for several types of business, industry and corporate facilities.
                        Few of these out of more than 20 software solutions;</h4>


                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="SoftwareCard text-center">
                                <img className="softwareImg" src={Hrm}/>


                                <Link className="softLink" to="/software">Details</Link>
                            </div>

                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="SoftwareCard text-center">

                                <img className="softwareImg" src={Army}/>

                                <Link className="softLink" to="/software">Details</Link>
                            </div>

                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="SoftwareCard text-center">
                                <img className="softwareImg" src={Agro}/>

                                <Link className="softLink" to="/software">Details</Link>

                            </div>

                        </Col>


                        <Col lg={4} md={6} sm={12}>
                            <div className="SoftwareCard text-center">
                                <img  className="softwareImg" src={Billing}/>

                                <Link className="softLink" to="/software">Details</Link>

                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="SoftwareCard text-center " >
                                <img className="softwareImg" src={cube}/>

                                <Link  className="softLink" to="/software">Details</Link>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="SoftwareCard text-center">
                                <img className="softwareImg" src={Lab}/>

                                <Link className="softLink" to="/software">Details</Link>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="SoftwareCard text-center">
                                <img className="softwareImg" src={Shodai}/>

                                <Link className="softLink" to="/software">Details</Link>
                            </div>
                        </Col>



                    </Row>






                </Container>

            </Fragment>
        );
    }
}

export default AllSoftware;