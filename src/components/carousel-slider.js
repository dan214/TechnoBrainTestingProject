
import React from 'react'
import CarouselSlider from 'react-carousel-slider';
import { StaticQuery, graphql } from 'gatsby'

const Header = ({ data }) => {
    console.log("data");
    console.log(data);
    return null;
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
