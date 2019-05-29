import React from 'react';

function About() {
    return (
        <section id="about">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="section-title">
                        <h1 className="display-5">About Me</h1>
                        <span className="animate-border ml-auto mr-auto"></span>
                    </div>
                    <blockquote className="blockquote">
                        <h5 className="card-text text-black">
                           I'm a student from Delhi Technological University pursuing B.Tech. in Computer Science and Engineering. I'm a full stack web developer with keen interest in upcoming technlogies.
                          Check out my latest works in<a href="#projects">Projects section</a>.
                        </h5>
                        <h5 className="card-text text-black">
                            If you want to contact me or ask me anything 
                            you can reach me here.
                            <a href="#contact">Let's Talk</a>
                        </h5>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}

export default About;
