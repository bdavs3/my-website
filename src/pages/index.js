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
    </div>
  </Layout>
);

export default IndexPage;
