import React from "react";
import AOS from "Aos";
import { IconContext } from "react-icons";
import { BsCodeSlash, BsMusicNoteBeamed } from "react-icons/bs";
import { BiRun } from "react-icons/bi";

import Head from "../components/head";
import Layout from "../components/layout";

import "../styles.scss";
import "./styles/index.scss";
import "aos/dist/aos.css";
import FluidImage from "../components/utilities/fluid-image";

AOS.init();

const IndexPage = () => (
  <Layout>
    <div className="index-wrapper">
      <Head title="Home" />
      <section className="section index-section">
        <div className="columns">
          <div className="column">
            <div>
              <FluidImage fileName="headshot.jpg" />
            </div>
          </div>
          <div className="column" data-aos="fade-up">
            <p>
              Hi! I'm <span className="name">Ben</span>, a software developer
              originally from Phoenix, AZ. I have been living in Los Angeles
              since I started at Loyola Marymount University in the Fall of
              2015. After graduating, I moved to the sleepy beach town of El
              Segundo. <br /> <br />
              This website serves as a way to keep track of my thoughts from
              time to time. You can view the source code for it{" "}
              <a
                href="https://github.com/bdavs3/my-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <section
        className="section index-section"
        style={{ paddingTop: "25px" }}
        data-aos="fade-up"
      >
        <h1 className="is-centered">Some of my favorite things...</h1>
        <div className="columns" style={{ paddingTop: "25px" }}>
          <div className="column" data-aos="fade-up">
            <h2>Coding</h2>
            <IconContext.Provider
              value={{ className: "react-icons center-horizontal" }}
            >
              <BsCodeSlash />
            </IconContext.Provider>
          </div>
          <div className="column" data-aos="fade-up">
            <h2>Running</h2>
            <IconContext.Provider
              value={{ className: "react-icons center-horizontal" }}
            >
              <BiRun />
            </IconContext.Provider>
          </div>
          <div className="column" data-aos="fade-up">
            <h2>Music Production</h2>
            <IconContext.Provider
              value={{ className: "react-icons center-horizontal" }}
            >
              <BsMusicNoteBeamed />
            </IconContext.Provider>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
