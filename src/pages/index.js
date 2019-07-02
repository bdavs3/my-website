import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Head from "../components/head";
import Layout from "../components/layout";

import "../styles.scss";

const IndexPage = ({ data }) => (
  <Layout>
    <Head title="Home" />
    <section id="home-main-image" className="section">
      <Img
        fluid={data.fileName.childImageSharp.fluid}
        alt="home-full-screen-image"
      />
    </section>
    <section id="about" className="section">
      <h1 className="title is-2 has-text-centered">About me</h1>
      <p className="has-text-centered">
        Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Praesent
        porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a
        pretium mi sem ut ipsum. Fusce neque. Aenean posuere, tortor sed cursus
        feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
        lacus. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
        metus.
      </p>
    </section>
    <section id="skills" className="section">
      <h1 className="title is-2 has-text-centered">Skills</h1>
      <p>Here are my skills</p>
    </section>
    <section id="education" className="section">
      <h1 className="title is-2 has-text-centered">Education</h1>
      <section className="hero">
        <div className="hero-body is-paddingless">
          <div className="container">
            <h1 className="title is-4">Loyola Marymount University</h1>
            <h2 className="subtitle">
              2015 – 2019, <em>B.S. in Computer Science</em>
            </h2>
          </div>
          <div className="container">
            <h1 className="title is-4">Desert Vista High School</h1>
            <h2 className="subtitle">2011 - 2015</h2>
          </div>
        </div>
      </section>
    </section>
    <section id="experience" className="section">
      <h1 className="title is-2 has-text-centered">Experience</h1>
      <section className="hero">
        <div className="hero-body is-paddingless">
          <div className="container">
            <h1 className="title is-4">Mobiedock</h1>
            <h2 className="subtitle">
              Aug. 2018 – Jun. 2019, <em>Director of Software</em>
            </h2>
          </div>
          <div className="container">
            <h1 className="title is-4">ProGuides</h1>
            <h2 className="subtitle">
              Aug. 2018 – Nov. 2018, <em>Content Creator</em>
            </h2>
          </div>
          <div className="container">
            <h1 className="title is-4">Stein Creative Agency</h1>
            <h2 className="subtitle">
              May 2018 – Oct. 2018, <em>Web Developer</em>
            </h2>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export const query = graphql`
  query HomePageQuery {
    fileName: file(relativePath: { eq: "1920x1080.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
