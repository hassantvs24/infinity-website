import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Mobile from "../../asset/images/mobileApp.jpg";

class CourseDetailsProgramming extends Component {
    render() {
        return (
            <Fragment>

                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={6} md={6}>
                            <h1 className="AboutName text-justify">What you learn</h1>
                            <hr/>
                            <h1 className="AboutName text-justify">C programming</h1>
                            <h1 className="AboutName text-justify">C++</h1>


                        </Col>


                        <Col sm={12} lg={6} md={6}>

                            <img  className="CourseDetailsImg" src={Mobile}/>

                        </Col>



                    </Row>
                </Container>


            </Fragment>
        );
    }
}

export default CourseDetailsProgramming;