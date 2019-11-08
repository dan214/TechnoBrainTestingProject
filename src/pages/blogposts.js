import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import ReadMoreReact from 'read-more-react';
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPosts = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      
      <div className="container">
      <SEO title="Blog posts" />
            <h1>{"Here's a list of all blogposts!"}</h1>
      <div className="blogposts">
        {blogPosts.map(({ node: post }) => (
                      <div key={post.id} className="row animated bounceIn">
                      <div className="col-lg-12 news-item" key={post.id}>
                          <div className="row">
                              <div className="col-lg-3">
                                  <Img alt={post.title} sizes={post.image.sizes} />
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
                                              readMoreText="Read more" />
                                          <p className="body-text"></p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
   
        ))}
        <span className="mgBtm__24" />
        <Link to="/">Go back to the homepage</Link>
      </div>
      </div>
      
    </Layout>
  );
};

export default BlogPosts;

export const query = graphql`
  query BlogPostsPageQuery {
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
