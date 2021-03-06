import React from "react";
import Helmet from "react-helmet";
// import { graphql } from "gatsby"
// import Img from "gatsby-image"

import Header from '../components/header';
import Projects from '../components/project';
import Contact from '../components/contact';
import About from '../components/about';
import Banner from '../components/banner';
import Footer from '../components/footer';
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import {
  siteTitle,
  siteDescription,
  siteUrl
} from "../../site-config";

import favicon32 from "../static/images/param32.jpg";
import favicon16 from "../static/images/param16.jpg";
import ogImage from "../static/images/param250.jpg";

export default () => {
  return (
  <React.Fragment>
    <Helmet
      title={siteTitle}
      meta={[
        { name: "description", content: siteDescription },
        { property: "og:url", content: siteUrl },
        { property: "og:image", content: "https://paramvir109.github.io/" + ogImage },
        { property: "og:title", content: siteTitle },
        { property: "og:type", content: "website" },
        { property: "og:description", content: siteDescription }
      ]}

      link={[
        { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16 },
        { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32 },
        { rel: "canonical", href: "https://paramvir109.github.io/" },
      ]}

      >
      <html lang="en" />
      </Helmet>
      <h1 hidden>
        full stack developer, javascript developer, software engineer, web developer, react developer, reactjs developer, node developer, nodejs developer, graphql developer, front end developer.
        {siteDescription}
      </h1>
      <div className="container-fluid">
        <Header />
        <Banner />
        <About />
        <Projects />
        <hr className="large-hr" />
        <Contact />
        <Footer />
      </div>
      <h1 hidden>
        software enginer, ui developer, build website, full stack developer, freelancer in india, font end developer in india, full stack developer in india, javascript developer, software engineer, web developer, react developer, reactjs developer, node developer, nodejs developer, graphql developer, angular developer, typescript developer, front end developer.
      </h1>
  </React.Fragment>)
};
