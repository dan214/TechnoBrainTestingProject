import React from "react";
import Layout from "../components/layout";

const Contact = () => {

    return (
        <Layout>
        
            <div className="container">
                <div className="news-item contact-div contact-us">
                    <div className="">
                <h2>{"We would love to hear from you!"}</h2>
                    <form name="contact" netlify-honeypot="bot-field" action="/success" method="POST" data-netlify="true">
                    <input type="hidden" name="bot-field" />
                        <div class="form-group row">

                            <label className="col-lg-2">Name: </label>
                            <input type="text" className="form-control col-lg-6" name="name" />

                        </div>
                        <div class="form-group row">

                            <label className="col-lg-2">Email: </label>
                            <input className="form-control col-lg-6" type="email" name="email" />

                        </div>

                        <div class="form-group row">

                            <label className="col-lg-2">Message: </label>
                            <textarea className="form-control col-lg-6" name="message"></textarea>

                        </div>

                        <button className="btn" type="submit">Send</button>

                    </form>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default Contact;

