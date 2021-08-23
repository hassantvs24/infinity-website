import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AboutUs extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={12} md={12}>
                            <h1 className="AboutName text-justify">About Us</h1>
                            <hr/>
                            <p className="AboutDescription text-justify">
                                <p><strong>Infinity Flame Soft</strong> is the largest software solutions &amp; service provider in Sylhet Division. This software company was founded in 2016. </p>

                                <p>In response to customer needs and in order to fully cover the range of IT services such as ERP Solutions, Software &amp; Mobile Apps Development, Website design &amp; development, Digital marketing, Freelancer training, e-commerce site design &amp; development are available in our IT farm. 
                                We deliver the most comprehensive suite of managed IT services to small and medium-sized businesses across Bangladesh and the World.</p> 

                                <p>If you want to get the first page your website in Google search engine, we have top IT Consultants &amp; SEO specialists.</p>

                                <p>Our known Quality Service allows us to provide all our clients with an efficient, seamless and worry-free “Remote IT department. Our Head office &amp; IT training departemnt.</p>
                            </p>

                        </Col>
                    </Row>
                </Container>

            </Fragment>

        );
    }
}
export default AboutUs;