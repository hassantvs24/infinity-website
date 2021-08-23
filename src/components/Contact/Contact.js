import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

import Iframe from 'react-iframe';
const AnyReactComponent = ({ text }) => <div>{text}</div>
class Contact extends Component {


                render() {
                return (
                <Fragment>
                <Container className="mt-5">
                <Row>
                <Col lg={6} md={12} sm={12} >
                <h1 className="ContactName Text-center">Quick Connect</h1>
                    <hr/>

                <Form>

                     <Form.Group>
                        <Form.Label className="serviceDescription " >Subject</Form.Label>
                        <Form.Control type="text"  />
                      </Form.Group>
                     <Form.Group>
                        <Form.Label className="serviceDescription" >Name</Form.Label>
                        <Form.Control type="text"  />
                     </Form.Group>
                     <Form.Group>
                         <Form.Label className="serviceDescription" >Email Address</Form.Label>
                         <Form.Control type="email" />
                     </Form.Group>

                     <Form.Group>
                        <Form.Label className="serviceDescription" >Message</Form.Label>
                        <Form.Control  as="textarea" rows="3" />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>

                </Col>
                    <Col lg={6} md={12} sm={12}>

                        <h1 className="AddName">Map</h1>
                        <hr/>


                        <div className="MapMain " >
                            <Iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7238.448260402737!2d91.86697307320762!3d24.890335418473423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751ab2a9b71b28f%3A0x5a6277f00574d4f3!2sBandar%20Bazar%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1603895106140!5m2!1sen!2sbd"
                                width="500" height="450" frameBorder="0" style="border:0;" allowFullScreen=""
                                aria-hidden="false" tabIndex="0">

                            </Iframe>


                        </div>



                    </Col>

                </Row>
                </Container>
                </Fragment>

        );
    }
}

export default Contact;