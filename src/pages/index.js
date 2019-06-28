import React from "react";

import Head from "../components/head";
import Layout from "../components/layout";

import "../styles.scss";

const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <h1>You're on the landing page</h1>
  </Layout>
);

export default IndexPage;
