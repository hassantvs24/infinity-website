import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";


class Analysis extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {Technology: 'Java', Projects: 60},
                {Technology: 'Kotlin', Projects: 40},
                {Technology: 'Sql', Projects: 90},
                {Technology: 'Bootstrap', Projects: 95},
                {Technology: 'Laravel', Projects:100},
                {Technology: 'React', Projects: 90},
                {Technology: 'Angular', Projects: 65}
            ]
        }
    }
        render() {
        var blue="rgba(0,115,230,0.8)"
        return (
            <Fragment>

                <Container className="text-center">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <Row>
                        <Col style={{width:'100%', height:'300px'}} lg={6} md={12} sm={12}>

                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology"/>
                                    <Tooltip/>
                                    <Bar dataKey="Projects" fill={blue} >
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>


                        </Col>

                        <Col lg={6} md={12} sm={12}>

                            <p className="text-justify des">To build native android apps we use Java as well as kotline and java mainly. React JS is used for cross platform mobile application. We use MySQL database for relational database system. To build NoSQL application we use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.
                                we always build dynamic application. Admin panel is the heart of such kinds of application. We always try to provide sufficient features in admin panel to dominate application. According to client demand we use PHP OOP,  Laravel to build admin panel section.We also use Wordpress for website build
                                Application security is a big deal for commercial application. We always ensure security portion of my application, moreover We build a security alert system, to notify admin when his system at risk. </p>

                        </Col>


                    </Row>


                </Container>

            </Fragment>
        );
    }
}

export default Analysis;