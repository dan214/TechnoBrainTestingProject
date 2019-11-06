import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import CarouselSlider from 'react-carousel-slider';
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const blogPosts = data.allContentfulSliderImage.nodes;

  var images = [];

  for (var item of blogPosts) {
    var imgObj = {"des":item.name,"imgSrc": item.imageFile.resolutions.src};
    images.push(imgObj);
  }

  console.log("images");
  console.log(images);

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

      <CarouselSlider slideItems = {images} />

      <Link to="/blogposts/">View all posts</Link>

    </div>
  </Layout>
  )
};

export default IndexPage;

export const query = graphql`
query MyQuery {
    allContentfulSliderImage {
      nodes {
        name
        imageFile {
          resolutions {
            src
          }
        }
      }
    }
  }
`;