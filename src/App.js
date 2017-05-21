import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import HeaderContainer from './containers/header/HeaderContainer';
import ScreenContainer from './containers/screen/ScreenContainer';

import './app.css';

class App extends Component {

    render() {
        const features = ['Vehicles', 'Vehicle Owners', 'Invoices', 'Settings'];
        return (
            <Router>
                <Grid fluid={true}>
                    <HeaderContainer features={features} />
                    <ScreenContainer />
                </Grid>
            </Router>
        );
    }
}

export default App;
