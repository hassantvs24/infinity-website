import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class CourseDetailsBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0" >
                    <div className="topPageOverlay">
                        <Container className="CourseTopPageContent">
                            <Row>
                                <Col className="text-center">
                                    <h4 className="CoursePageTitle">{this.props.pageTilte}</h4>
                                    <h5 className="CoursePageSubTitle">{this.props.pageSubTilte}</h5>
                                    <h5 className="CoursePageSubTitle">{this.props.pageSubTilteOne}</h5>
                                    <h5 className="CoursePageSubTitle">{this.props.pageSubTilteTwo}</h5>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetailsBanner;