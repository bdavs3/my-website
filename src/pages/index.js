import React from "react";

import Head from "../components/head";
import Layout from "../components/layout";
import Image from "../components/image";

import "../styles.scss";
import "./styles/index.scss";

const IndexPage = ({ data }) => (
  <Layout>
    <Head title="Home" />

    <section className="section">
      <Image fileName="1920x1080.png" />
    </section>

    <section id="about" className="section">
      <h1 className="title is-2 has-text-centered">About me</h1>
      <section className="hero">
        <div className="hero-body">
          Fusce convallis metus id felis luctus adipiscing. Etiam sit amet orci
          eget eros faucibus tincidunt. Fusce neque. Aenean imperdiet. Cras
          sagittis. Donec vitae sapien ut libero venenatis faucibus. Nunc nulla.
          Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec,
          quam. Aenean viverra rhoncus pede. Nulla sit amet est.
        </div>
      </section>
    </section>

    <section id="skills" className="section">
      <h1 className="title is-2 has-text-centered">Skills</h1>
      <section className="hero">
        <div className="hero-body">Here are my skills</div>
      </section>
    </section>

    <section id="education" className="section">
      <h1 className="title is-2 has-text-centered">Education</h1>
      <section className="hero">
        <div className="hero-body">
          <p>This is my education</p>
        </div>
      </section>
    </section>

    <section id="experience" className="section">
      <h1 className="title is-2 has-text-centered">Experience</h1>
      <section className="hero">
        <div className="hero-body">
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

export default IndexPage;
