import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import courseImage from '../../asset/images/course1.jpg'
import courseImage2 from '../../asset/images/course2.jpg'
import courseImage3 from '../../asset/images/course3.jpg'
import courseImage4 from '../../asset/images/course4.jpg'
import courseImage5 from '../../asset/images/course5.jpg'
import courseImage6 from '../../asset/images/course6.jpg'
import {Link} from "react-router-dom";

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
                 <Container className="text-center">
                <h1 className="courseMainTitle">OUR COURSES</h1>
                     <Row>
                         <Col lg={6} md={12} sm={12} className="mt-2">
                             <Row>
                                 <Col lg={6} md={6} sm={12} className="p-2">
                                     <img className="courseImg " src={courseImage}/>
                                 </Col>
                                 <Col lg={6} md={6} sm={12}>
                                     <h5 className="text-justify courseTitle">Software Development</h5>
                                     <p className="text-justify courseDes">I build native and cross platfrom mobile app for your business app for your business</p>
                                     <Link className="courseDetails float-left" target="_blank" to="/SoftCourseDetails">Details</Link>
                                 </Col>
                             </Row>
                         </Col>
                         <Col lg={6} md={12} sm={12} className="mt-2">
                             <Row>
                                 <Col lg={6} md={6} sm={12} className="p-2">
                                     <img className="courseImg "  src={ courseImage2}/>
                                 </Col>
                                 <Col lg={6} md={6} sm={12} className="p-2">
                                     <h5 className="text-justify courseTitle">Web Development</h5>
                                     <p className="text-justify courseDes" >I build native and cross platfrom mobile app for your business app for your business</p>
                                     <Link className="courseDetails float-left" target="_blank" to="/details">Details</Link>
                                 </Col>
                             </Row>
                         </Col>


                         <Col lg={6} md={12} sm={12} className="mt-2">
                             <Row>
                                 <Col lg={6} md={6} sm={12} className="p-2">
                                     <img className="courseImg "  src={courseImage3}/>
                                 </Col>
                                 <Col lg={6} md={6} sm={12} className="p-2">
                                     <h5 className="text-justify courseTitle">Professional Networking</h5>
                                     <p className="text-justify courseDes" >I build native and cross platfrom mobile app for your business app for your business</p>
                                     <Link className="courseDetails float-left" target="_blank" to="/NetworkingCourseDetails">Details</Link>
                                 </Col>
                             </Row>
                         </Col>


                         <Col lg={6} md={12} sm={12} className="mt-2">
                             <Row>
                                 <Col lg={6} md={6} sm={12} className="p-2">
                                     <img className="courseImg"  src={courseImage4}/>
                                 </Col>
                                 <Col lg={6} md={6} sm={12}>
                                     <h5 className="text-justify courseTitle">Mobile App development</h5>
                                     <p className="text-justify courseDes" >I build native and cross platfrom mobile app for your business app for your business</p>
                                     <Link className="courseDetails float-left" target="_blank" to="/AppCourseDetails">Details</Link>
                                 </Col>
                             </Row>
                         </Col>
                         <Col lg={6} md={12} sm={12} className="mt-2">
                             <Row>
                                 <Col lg={6} md={6} sm={12} className="p-2">
                                     <img className="courseImg "  src={courseImage5}/>
                                 </Col>
                                 <Col lg={6} md={6} sm={12}>
                                     <h5 className="text-justify courseTitle">UI/UX Design</h5>
                                     <p className="text-justify courseDes" >I build native and cross platfrom mobile app for your business app for your business</p>
                                     <Link className="courseDetails float-left" target="_blank" to="/details">Details</Link>
                                 </Col>
                             </Row>
                         </Col>
                         <Col lg={6} md={12} sm={12} className="mt-2">
                             <Row>
                                 <Col lg={6} md={6} sm={12} className="p-2">
                                     <img className="courseImg"  src={courseImage6}/>
                                 </Col>
                                 <Col lg={6} md={6} sm={12} className="p-2">
                                     <h5 className="text-justify courseTitle">Programing Course</h5>
                                     <p className="text-justify courseDes" >I build native and cross platfrom mobile app for your business app for your business</p>
                                     <Link className="courseDetails float-left" target="_blank" to="/programming">Details</Link>
                                 </Col>
                             </Row>
                         </Col>


                     </Row>
                </Container>

            </Fragment>
        );
    }
}

export default AllCourses