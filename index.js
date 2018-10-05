// Copyright 2017 Brandon Ly all rights reserved.

// Main React.js file which loads everything for the website.

// Node package imports.
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Custom imports.
import { Container } from './components/grid.js';
import Header from './components/header.js';
import Body from './components/body.js';
import Footer from './components/footer.js';
import NotFound from './components/notfound.js';
import './style/main.scss';
import './style/_skills.scss';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Body page={this.props.route.page}/>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" page="work" component={Main}/>
        <Route path="/projects" page="projects" component={Main}/>
        <Route path="/about" page="about" component={Main}/>
        <Route path="/*" component={NotFound}/>
    </Router>,
    document.getElementById('root')
);
