import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => (
    <StaticQuery 
        query={graphql`
            query profileImage {
                file(relativePath: { eq: "param-profile.jpg" }){
                    childImageSharp {
                        sizes(maxWidth: 500, maxHeight: 500) {
                        ...GatsbyImageSharpSizes
                        }
                    }
                }
            }
        `}
        render={data => (    
            <section id="header">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="col-12">
                            <div className="card bg-dark shadow-lg">
                            <div className="card-body bg-warning about">
                                <div className="row">
                                <div className="col-md-3 col-xs-12 d-flex justify-content-center">
                                    <Img  sizes={data.file.childImageSharp.sizes} src={data.file.childImageSharp.sizes.src}  className="shadow-lg p-2 photo" alt="Paramvir Singh" />
                                </div>
                                <div className="col-md-9 col-xs-12 about-text">
                                    <h1 className="card-text text-black">Hi, I'm Paramvir Singh</h1>
                                    <h4 className="card-text text-black">STUDENT | DEVELOPER | DTU</h4>
                                    <hr/>
                                    <h4>
                                    <div>
                                        <a title="Github" href="https://github.com/Paramvir109" className="card-link text-black"><i className="fa fa-github" /></a>
                                        <a title="Twitter" href="https://twitter.com/_Paramvir_Singh" className="card-link text-black"><i className="fa fa-twitter" /></a>
                                        <a title="Email" href="mailto:paramvir109@gmail.com" className="card-link text-black"><i className="fa fa-envelope" /></a>
                                        <a title="Linkedin" href="https://www.linkedin.com/in/paramvir109/" className="card-link text-black"><i className="fa fa-linkedin" /></a>
                                    </div>

                                    </h4>
                                </div>
                                </div>
                            </div>
                            <div className="card-body bg-dark shadow-lg">
                                <h5 className="card-title">My Toolbox</h5>
                                <h2 className="card-text">Javascript, jQuery, HTML5, JAVA, C++, CSS3, ReactJS, Redux, NodeJS, DB(Mongodb, MySQL), Git,GraphQl, GatsbyJS.</h2>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )}  
    />
)
