import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import CaruoselSlider from "../components/carousel-slider";
import { graphql } from 'gatsby'


const IndexPage = ({ data }) => {

  return(
  <Layout>
    <div className="home">
      <h1>Hello There</h1>
      <p>Welcome</p>
      <div>
        <div
          style={{
            maxWidth: `300px`,
            margin: "0 auto 1.45rem"
          }}
        >
        </div>
      </div>

      <CaruoselSlider />


      <Link to="/blogposts/">View all posts</Link>

    </div>
  </Layout>
  )
};

export default IndexPage;
