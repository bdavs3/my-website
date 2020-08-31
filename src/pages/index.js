import React from "react";
import AOS from "Aos";

import Head from "../components/head";
import Layout from "../components/layout";

import "../styles.scss";
import "./styles/index.scss";
import "aos/dist/aos.css";

AOS.init();

const IndexPage = () => (
  <Layout>
    <div className="index-wrapper">
      <Head title="Home" />
      <section className="section index-section">
        <div className="columns">
          <div className="column">One</div>
          <div className="column">
            <p>
              Hi, I'm Ben, a software developer originally from Phoenix, AZ. I
              have been living in Los Angeles since I started at Loyola
              Marymount University in the Fall of 2015. After graduating, I
              moved to the sleepy beach town of El Segundo. <br /> <br />
              This website was a fun project that now serves as a way to keep
              track of my thoughts from time to time. If you'd like to get in
              touch, your best bet is to reach out to my email, which can be
              found in the footer.
            </p>
          </div>
        </div>
      </section>
      <section className="section index-section">Three</section>
    </div>
  </Layout>
);

export default IndexPage;
