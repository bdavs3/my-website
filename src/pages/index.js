import React from "react";
import { Link } from "gatsby";

import Head from "../components/head";
import Layout from "../components/layout";

import "../styles.scss";

const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <h1>You're on the landing page</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
