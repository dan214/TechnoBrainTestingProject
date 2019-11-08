import React from "react"
import { Link } from "gatsby";
import Img from "gatsby-image";
import ReadMoreReact from 'read-more-react';

export default class HomeComponent extends React.Component {

    constructor(props){
        super(props)
        //creates a reference for your element to use
        this.newsdiv = React.createRef()
     }

    handleOnClick = e => {
        console.log("e");
        console.log(e);
        if(this.newsdiv.current){
            this.newsdiv.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }

    render(){

        const blogPosts = this.props.data;

        console.log("blogposts");
        console.log(blogPosts);

        return(

        <div className="home">

        <div className="topHome">
          <div className="video">
          <video muted id="background-video" loop autoPlay playsInline poster="https://images.ctfassets.net/aliqirq3u5g5/4ysOha8df4qRKGwszbOuNl/96bd66397dbac3a2c71b0b6310c17520/testingProject.PNG?h=250">
            <source src="https://videos.ctfassets.net/aliqirq3u5g5/7vqHpWIaM8r42SAOFJaglK/abe1ca0a0c647549955c76e8214063d4/Particles_5___45s___4k_res.mp4" type="video/mp4" />
            <source src="https://videos.ctfassets.net/aliqirq3u5g5/7vqHpWIaM8r42SAOFJaglK/abe1ca0a0c647549955c76e8214063d4/Particles_5___45s___4k_res.mp4" type="video/ogg" />
            Your browser does not support the video tag.
</video>
</div>
        
          <div className="animated headline fadeInRight">
            <h1>Hello There</h1>
            <p>Welcome to our news site</p>
            <p><i>Providing you with the latest news at your fingertips!</i></p>
            <div className="animated delay-1s fadeInUp">
             <button className="btn" onClick={this.handleOnClick}>Browse our news posts</button>

            </div>
          </div>

        </div>


        <div className="news-section" ref={this.newsdiv}>
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
        )
 
    }
}