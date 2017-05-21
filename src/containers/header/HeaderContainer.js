import React, {PropTypes} from 'react';
import { Col, Row } from 'react-bootstrap';
import './header.css';

const HeaderContainer = ({features}) => {

    const featureComponents = features.map((f,k) => toFeatureComponents(f,k));

    return (
            <Row>
                <Col sm={2}>
                    <div className="logo">Logo</div>
                </Col>
                <Col sm={8}>
                    <div className="features">
                        <Row>
                            {featureComponents}
                        </Row>
                    </div>
                </Col>
                <Col sm={2}>
                    <div className="user">User</div>
                </Col>
            </Row>
    );
};

function toFeatureComponents(f, k) {

    return(
        <Col key={k} sm={3}>
            <div>
                <i className="fa fa-camera-retro fa-lg"></i>
                <div>{f}</div>
            </div>
        </Col>
    );
}

HeaderContainer.propTypes = {
    features: PropTypes.array
};


export default HeaderContainer;
