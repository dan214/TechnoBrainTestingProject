import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image"
import Layout from "../components/layout";
import ReadMoreReact from 'read-more-react';
import { Player } from 'video-react';


import 'animate.css/animate.css';


const IndexPage = ({ data }) => {

  const blogPosts = data.allContentfulBlogPost.edges;

  return (
    <Layout>
      <div className="home">

        <div className="topHome">
          <div className="video">
          <video playsinline muted id="background-video" loop autoPlay playsinline poster="https://images.ctfassets.net/aliqirq3u5g5/4ysOha8df4qRKGwszbOuNl/96bd66397dbac3a2c71b0b6310c17520/testingProject.PNG?h=250">
            <source src="https://videos.ctfassets.net/aliqirq3u5g5/7vqHpWIaM8r42SAOFJaglK/abe1ca0a0c647549955c76e8214063d4/Particles_5___45s___4k_res.mp4" type="video/mp4" />
            <source src="https://videos.ctfassets.net/aliqirq3u5g5/7vqHpWIaM8r42SAOFJaglK/abe1ca0a0c647549955c76e8214063d4/Particles_5___45s___4k_res.mp4" type="video/ogg" />
            Your browser does not support the video tag.
</video>
</div>
        
          <div className="animated headline fadeInRight">
            <h1>Hello There</h1>
            <p>Welcome</p>
            <div className="animated fadeInUp">
              <Link className="btn" title="Contact us today" aria-label="News" to="/contact">Contact us today</Link>
            </div>
          </div>



        </div>


        <div className="news-section">
          <div className="container">


            {blogPosts.map(({ node: post }) => (
              <div key={post.id} className="row animated bounceInUp delay-1s">
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