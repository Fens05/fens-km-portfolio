import React from 'react';
import coverImage from '../../assests/images';

function About() {
    return (
        <section className="row ">
            <h1 id="about">About Me</h1>
            <img src={coverImage} className=""></img>
            <div className="col md">
                <p>
                    Hello my name is Krista. I have a general knowlege of front end framework.
                    I love to dable in color schemes and layouts. 
                </p>
            </div>

        </section>
    );
}
export default About;
