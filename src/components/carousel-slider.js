
import React from 'react'
import CarouselSlider from 'react-carousel-slider';
import { StaticQuery, graphql } from 'gatsby'

const Header = ({ data,section }) => {

    const blogPosts = data.allContentfulSliderImage.nodes;

    var images = [
      {
        "des":"First image with some description",
        "imgSrc":"./src/images/img1.jpg"
      }
    ];
  
    for (var item of blogPosts) {
      var imgObj = {"des":item.name,"imgSrc": item.imageFile.resolutions.src};
      images.push(imgObj);
    }


    return (
        <CarouselSlider slideItems = {images} />
    )
}

export default class CaruoselSlider extends React.Component {
  constructor(data) {
    super(data);
    this.state = {
        currentSection: false
    }
}
  componentDidMount(){
    this.state = {
      currentSection: true
  }
  }
    render() {
      const{currentSection}  = this.state;
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
            render={ data => <Header section={currentSection} data={data}/>}
          />)
    }
}
