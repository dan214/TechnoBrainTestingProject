import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";


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

      <Link to="/blogposts/">View all posts</Link>

    </div>
  </Layout>
  )
};

export default IndexPage;

