import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import soft from "../../asset/images/software.jpg";

class CourseDetailsSoft extends Component {
    render() {
        return (
            <Fragment>

                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={6} md={6}>
                            <h1 className="AboutName text-justify">Following The Course plane</h1>
                            <hr/>
                            <ul>
                                <h1 className="AboutName text-justify">What You Learn</h1>


                                        <li>Object-Oriented Programming (PHP) fundamental</li>
                                        <li>Create your own projects with Laravel</li>
                                        <li>Make the most of your work tools (Php Strom, Git, Github, Composer, PHP artisan and Laravel</li>
                                        <li>Generate and maintain the structure of the database in an automated way with Laravel and the PHP Artisan console</li>
                                        <li>Use PHP Artisan effectively and be much more efficient</li>
                                        <li>Create and configure your own local development environment</li>
                                        <li>Properly configure your development environment for all your projects</li>
                                        <li>Hone the main HTTP methods/verbs for HTTP and RESTful APIs</li>
                                        <li>Use free professional tools to improve your productivity</li>
                                        <li>JavaScript Object fundamental</li>
                                        <li>Vue JS fundamental</li>
                                        <li>You will learn How to generate Json Web Token in Laravel and how-to login and logout with Token</li>
                                        <li>Able to use Vuetify along with Vue js</li>
                                        <li>Update: Use Laravel WebSocket package to make Realtime system free</li>



                                <h1 className="AboutName text-justify">Course Topics</h1>

                                        <li>Using Git and Github</li>
                                        <li>Installing Laravel</li>
                                        <li>Using the Laravel PHP artisan for code and components generation</li>
                                        <li>Usage and creation of middleware on Laravel</li>
                                        <li>The Laravel Resource routes and controllers (ideal for RESTful APIs)</li>
                                        <li>Fully supported JSON format responses for a JSON RESTful API</li>
                                        <li>Validation of requests directly from the Laravel Controllers</li>
                                        <li>Handling all types of exceptions and errors from Laravel handler</li>
                                        <li>operations involving up to three resources/models for a specific operation</li>
                                        <li>Complex operations involving up to three resources/models for a specific operation</li>
                                        <li>Usage of Laravel dependency injection and model binding</li>
                                        <li>Generation of the database structure using Laravel migrations</li>
                                        <li>Automatic insertion of fake data into the database through “faker,” using Laravel factories, and seeders</li>
                                        <li>Laravel Sessions and access token access for the RESTful API. Yes Both!</li>
                                        <li>Using Laravel Passport to protect the RESTful API with OAuth2</li>
                                        <li>Pagination of results using Laravel collections</li>
                                        <li>Using URL parameters to execute actions (the RESTful approach)</li>
                                        <li>Sorting results based on URL parameters with a RESTful approach</li>
                                        <li>Filtering results using URL parameters</li>
                                        <li>Caching responses using Laravel Cache System</li>
                                        <li>Limitation of requests using the Laravel middleware</li>
                                        <li>Using PHP Fractal for transforming responses</li>
                                        <li>Usage of CORS on the API responses to allow JavaScript-based clients and web browsers.</li>
                                        <li>Use the Laravel Policies and Gates to handle the user’s authorization layer.</li>
                                        <li>Vuetify implementation in laravel</li>
                                        <li>Setting Up Vue-Router</li>
                                        <li>How to transform any model for your API</li>
                                        <li>How to use Postman for checking API endpoints.</li>
                                        <li>Handling Errors and Exceptions</li>
                                        <li>Much more!!</li>



                            </ul>
                        </Col>


                        <Col sm={12} lg={6} md={6}>

                            <img  className="CourseDetailsImg" src={soft}/>

                        </Col>



                    </Row>
                </Container>


            </Fragment>
        );
    }
}

export default CourseDetailsSoft;