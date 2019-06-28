import React from "react";
import { Link } from "gatsby";

import Head from "../components/head";
import Layout from "../components/layout";

const ReadingCorner = () => (
  <Layout>
    <Head title="Reading Corner" />
    <h1>Hi from the reading corner</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default ReadingCorner;
