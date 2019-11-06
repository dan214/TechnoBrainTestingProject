
import React from 'react'
import CarouselSlider from 'react-carousel-slider';
import { graphql } from 'gatsby'

export default class CaruoselSlider extends React.Component {
    constructor(data) {
        super(data);
      
        console.log("data");
        console.log();
    }
    render() {
    
        let data = [
            {
                des: "1",
                imgSrc: "https://i.imqur.com/yourImage.jpg"
            },
            {
                des: "2",
                imgSrc: "https://i.imqur.com/yourImage2.jpg"
            }
        ];
        
        return <CarouselSlider slideItems = {data} />;
    }
}
