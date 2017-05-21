import React, {PropTypes} from 'react';
import { Col, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './screens-container.css';

const ScreenContainer = ({property}) => {

    return (
        <Router>
            <Row>
                <Col sm={12}>
                    <div className="screens-container">Feature  Screens Goes Here</div>
                </Col>
            </Row>
        </Router>
    );
};

ScreenContainer.propTypes = {
    property: PropTypes.object
};

export default ScreenContainer;
