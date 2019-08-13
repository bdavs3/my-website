import React from "react";
import AOS from "Aos";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Head from "../components/head";
import Layout from "../components/layout";
import Image from "../components/image";

import "../styles.scss";
import "./styles/index.scss";
import "aos/dist/aos.css";

AOS.init();

const IndexPage = () => (
  <Layout>
    <div className="index-wrapper">
      <Head title="Home" />
      <section className="section">
        <section className="hero main-img">
          <Image fileName="1920x1080.png" />
        </section>
        <section className="hero">
          <div className="navigator hero-body has-text-centered">
            <div className="columns">
              <div className="navigator-item column">
                <AnchorLink href="#past" offset="25">
                  <h1 className="navigator-heading title">My Past</h1>
                </AnchorLink>
              </div>
              <div className="navigator-item column">
                <AnchorLink href="#present" offset="25">
                  <h1 className="navigator-heading title">My Present</h1>
                </AnchorLink>
              </div>
              <div className="navigator-item column">
                <AnchorLink href="#future" offset="25">
                  <h1 className="navigator-heading title">My Future</h1>
                </AnchorLink>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section id="past" className="section content">
        <h1 className="is-1 title has-text-centered">My Past</h1>
        <section className="hero">
          <div className="hero-body">
            Fusce convallis metus id felis luctus adipiscing. Etiam sit amet
            orci eget eros faucibus tincidunt. Fusce neque. Aenean imperdiet.
            Cras sagittis. Donec vitae sapien ut libero venenatis faucibus. Nunc
            nulla. Pellentesque libero tortor, tincidunt et, tincidunt eget,
            semper nec, quam. Aenean viverra rhoncus pede. Nulla sit amet est.
          </div>
        </section>
      </section>
      <section id="present" className="section content">
        <h1 className="title is-1 has-text-centered">My Present</h1>
        <section className="hero">
          <div className="hero-body">
            Fusce convallis metus id felis luctus adipiscing. Etiam sit amet
            orci eget eros faucibus tincidunt. Fusce neque. Aenean imperdiet.
            Cras sagittis. Donec vitae sapien ut libero venenatis faucibus. Nunc
            nulla. Pellentesque libero tortor, tincidunt et, tincidunt eget,
            semper nec, quam. Aenean viverra rhoncus pede. Nulla sit amet est.
          </div>
        </section>
      </section>
      <section id="future" className="section content">
        <h1 className="title is-1 has-text-centered">My Future</h1>
        <section className="hero">
          <div className="hero-body">
            Fusce convallis metus id felis luctus adipiscing. Etiam sit amet
            orci eget eros faucibus tincidunt. Fusce neque. Aenean imperdiet.
            Cras sagittis. Donec vitae sapien ut libero venenatis faucibus. Nunc
            nulla. Pellentesque libero tortor, tincidunt et, tincidunt eget,
            semper nec, quam. Aenean viverra rhoncus pede. Nulla sit amet est.
          </div>
        </section>
      </section>
      '
    </div>
  </Layout>
);

export default IndexPage;
