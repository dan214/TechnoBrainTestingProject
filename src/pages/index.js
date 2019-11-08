import React from "react";

import Layout from "../components/layout";
import HomeComponent from "../components/homeComponent";
import 'animate.css/animate.css';


const IndexPage = ({ data }) => {

  const blogPosts = data.allContentfulBlogPost.edges;

  return (
    <Layout>
      <HomeComponent data={blogPosts}/>
    </Layout>
  )
};

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
          title
          slug
          body {
            body
          }
          image {
            sizes(resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
             }
          }
          tags
        }
      }
    }
  }
`;