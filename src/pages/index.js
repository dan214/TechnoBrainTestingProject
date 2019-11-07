import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image"
import Layout from "../components/layout";


const IndexPage = ({ data }) => {

  const blogPosts = data.allContentfulBlogPost.edges;

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

      <div className="container">
        <div className="row">
          <div className="offset-lg-1"></div>
      {blogPosts.map(({ node: post }) => (
          <div className="col-lg-3 news-item" key={post.id}>
            <div>
            <Img alt={post.title} sizes={post.image.sizes}/>
            </div>
            <Link to={`/blogpost/${post.slug}`}>{post.title}</Link>
            <p className="body-text">{post.body.body}</p>
          </div>
        ))}
        </div>
        </div>

      <Link to="/blogposts/">View all posts</Link>

    </div>
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