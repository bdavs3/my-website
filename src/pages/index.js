import React from "react";
import { IconContext } from "react-icons";
import { BsCodeSlash, BsMusicNoteBeamed } from "react-icons/bs";
import { BiRun } from "react-icons/bi";

import Head from "../components/head";
import Layout from "../components/layout";

import "../styles.scss";
import "./styles/index.scss";
import FluidImage from "../components/utilities/fluid-image";

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
          <div className="column">
            <p>
              Hi! I'm Ben, a software developer originally from Phoenix, AZ. 
              I have also spent several years living in Los Angeles, first at
              Loyola Marymount University, then in the beach town of El
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
      <section className="section index-section" style={{ paddingTop: "25px" }}>
        <h1 className="is-centered">Some of my favorite things...</h1>
        <div className="columns" style={{ paddingTop: "25px" }}>
          <div className="column">
            <h2>Coding</h2>
            <IconContext.Provider
              value={{ className: "react-icons center-horizontal" }}
            >
              <BsCodeSlash />
            </IconContext.Provider>
          </div>
          <div className="column">
            <h2>Running</h2>
            <IconContext.Provider
              value={{ className: "react-icons center-horizontal" }}
            >
              <BiRun />
            </IconContext.Provider>
          </div>
          <div className="column">
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
