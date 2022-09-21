import React from 'react';
import logoHeading from "../images/Artboard22.png"

export default function Intro() {
    return (
        <section id="intro">
            <div id='intro-back'>
                <div id="intro-heading" className='sub-heading'>
                    <img id="intro-logo" src={logoHeading} alt="Hair day" />
                    <h1>The place to <br />"Treat Yourself"</h1>
                    <button id="intro-book"><a href="#detail">Book Now!</a></button>
                </div>
            </div>
        </section>
    )
}