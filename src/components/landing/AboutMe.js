import React, { Component } from 'react';
import '../../css/landing/AboutMe.css';

export class AboutMe extends Component {
    render() {
        return (
            <div className="about-outer-container">
                <div className="about-container container">
                    <hr />
                    <div className="about-text">
                        <p>
                            <span className="about-header" > Hello! </span> I'm Justin Yau, a local NYC Developer with 1+ year(s) of
                            professional experience implementing technological solutions for various companies. While I am not developing,
                            I like to aquascape tanks and cook. I also have a great deal of interest in researching algae's use as a
                            bio-fuel as an alternative to fossil fuels.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
