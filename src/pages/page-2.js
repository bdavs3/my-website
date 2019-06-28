import React from "react";
import { Link } from "gatsby";

import Head from "../components/head";
import Layout from "../components/layout";

const SecondPage = () => (
  <Layout>
    <Head title="Page 2" />
    <h1>Hi from the second page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
