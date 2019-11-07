import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image"
import Layout from "../components/layout";
import ReadMoreReact from 'read-more-react';


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
       
          
      {blogPosts.map(({ node: post }) => (
         <div className="row">
          <div className="col-lg-12 news-item" key={post.id}>
            <div className="row">
              <div className="col-lg-3">
            <Img alt={post.title} sizes={post.image.sizes}/>
            </div>
            <div className="col-lg-8 text-div">
            <div className="tags">
          {post.tags.map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
            <div className="row">
              <div className="col-lg-12">
            <Link to={`/blogpost/${post.slug}`}>{post.title}</Link>
            </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
              <ReadMoreReact text={post.body.body}
                min={80}
                ideal={100}
                max={200}
                readMoreText="Read more"/>
            <p className="body-text"></p>
            </div>
            </div>
            </div>
            </div>
          </div>
          </div>
        ))}
        
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