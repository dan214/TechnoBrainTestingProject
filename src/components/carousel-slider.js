
import React from 'react'
import CarouselSlider from 'react-carousel-slider';
import { StaticQuery, graphql } from 'gatsby'

const Header = ({ data,section }) => {

  console.log("data");
  console.log(data)
  console.log(section)
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
