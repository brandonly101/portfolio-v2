// Copyright 2017 Brandon Ly all rights reserved.

// Node package imports.
import React from 'react';
import FontAwesome from 'react-fontawesome';

// Custom imports.
import { Container } from './grid.js';
import '../style/_footer.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="footer">
                    <div className="footer-copyright">
                        <FontAwesome name="copyright" aria-hidden="true"/> 2017 Brandon Ly.
                    </div>
                    <div className="footer-contact">
                        <a href="mailto:brandonly@live.com" target="_blank"><FontAwesome name="envelope"/></a>
                        <a href="https://www.linkedin.com/in/brandon-ly-1a412b73" target="_blank"><FontAwesome name="linkedin"/></a>
                        <a href="https://www.github.com/brandonly101" target="_blank"><FontAwesome name="github"/></a>
                    </div>
                </div>
            </div>
        );
    }
}


