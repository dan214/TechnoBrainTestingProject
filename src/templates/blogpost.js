import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image"

const BlogPost = ({ data }) => {
  const { title, body, image, tags } = data.contentfulBlogPost;
  return (
    <Layout>
      <SEO title={title} />
      <div className="news-section">
      <div className="container news-page">
        <div className="row offset-lg-1">
      <div className="col-lg-11 blogpost news-item">
        <h1>{title}</h1>
        <Img alt={title} sizes={image.sizes}/>
        <div className="tags">
          {tags.map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <p className="body-text">{body.body}</p>
        <Link to="/blogposts">View more posts</Link>
        <Link to="/">Back to Home</Link>
        </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
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
`;