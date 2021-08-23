import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import ProjectLogo from '../../asset/images/noorlogo.jpg'
import ProjectLogoTwo from '../../asset/images/images2.png'
import ProjectLogoThree from '../../asset/images/images3.jpg'

class Project extends Component {
    render() {
        return (
            <Fragment>
                <Container  className="  text-center ">
                  <h1 className="projectMainTitle">OUR FEW PROJECTS</h1>
                    <Row>
                        <Col sm={12} md={6} lg={4} className="p-2">

                            <Card className="projectCard p-0">
                                <Card.Img  className="projectImg" variant="top" src={ProjectLogo} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Noorjahan Group:HOTEL NOORJAHAN GRAND</Card.Title>

                                    <Button variant="warning"><a className="projectLink" target="_blank"href="//www.noorjahangrand.com/">Go To Site</a></Button>
                                </Card.Body>
                            </Card>


                        </Col >
                        <Col sm={12} md={6} lg={4} className="p-2">

                                <Card className="projectCard">
                                    <Card.Img className="projectImg" variant="top" src={ProjectLogoTwo} />
                                    <Card.Body>
                                        <Card.Title className="projectCardTitle">Permanent Mission of Bangladesh Geneva</Card.Title>

                                        <Button variant="warning"><a className="projectLink" target="_blank" href="//genevamission.mofa.gov.bd/">Go To Site</a></Button>
                                    </Card.Body>
                                </Card>


                        </Col >

                        <Col sm={12} md={6} lg={4} className="p-2">

                                <Card className="projectCard">
                                    <Card.Img className="projectImg" variant="top" src={ProjectLogoThree} />
                                    <Card.Body>
                                        <Card.Title className="projectCardTitle">Leading UniversitySylhet.
                                            Bangladesh</Card.Title>

                                        <Button variant="warning"><a variant="outline-warning"  className="projectLink" target="_blank" href="//www.iqaclu.com/">Go To Site</a></Button>
                                    </Card.Body>
                                </Card>

                        </Col >



                    </Row>



                </Container>



            </Fragment>
        );
    }
}

export default Project;