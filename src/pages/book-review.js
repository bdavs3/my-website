import React from "react";
import { Link } from "gatsby";

import Head from "../components/head";
import Layout from "../components/layout";

const BookReview = () => (
  <Layout>
    <Head title="Book Review" />
    <h1>Hi from the book review</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default BookReview;
