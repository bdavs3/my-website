import React from "react";
import { Link } from "gatsby";

import Head from "../components/head";
import Layout from "../components/layout";

const Portfolio = () => (
  <Layout>
    <Head title="Portfolio" />
    <h1>Hi from the portfolio page.</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Portfolio;
