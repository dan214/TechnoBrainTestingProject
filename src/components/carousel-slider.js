
import React from 'react'
import CarouselSlider from 'react-carousel-slider';
import { StaticQuery, graphql } from 'gatsby'

const Header = ({ data }) => {

    const blogPosts = data.allContentfulSliderImage.nodes;

    var images = [];
  
    for (var item of blogPosts) {
      var imgObj = {"des":item.name,"imgSrc": item.imageFile.resolutions.src};
      images.push(imgObj);
    }
  
    console.log("images");
    console.log(images);

    return (
        <CarouselSlider slideItems = {images} />
    )
}

export default class CaruoselSlider extends React.Component {

    render() {
        
        return(   <StaticQuery
            query={graphql`
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
            `}
            render={data => <Header data={data} />}
          />)
    }
}
