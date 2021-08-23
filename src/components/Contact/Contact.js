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
                            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.1849429965123!2d91.8716468154655!3d24.891672450135154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751ab2b25be8105%3A0x4e97a32cf9300bf4!2sInfinity%20Flame%20Soft!5e0!3m2!1sen!2sbd!4v1629719215562!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></Iframe>
                        </div>
                    </Col>

                </Row>
                </Container>
                </Fragment>

        );
    }
}

export default Contact;