import React from 'react';
import './Contact.css';
import ContactUs from '../../assets/images/contact.gif';
import { FaLinkedinIn, FaGithubSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Rotate from "react-reveal/Rotate";
import Jump from "react-reveal/Jump";
const Contact = () => {
  return (
    <>
     <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                 <Rotate>
                    <img
                      src={ContactUs}
                      alt="ocontact"
                      className="image"
                    />
                    </Rotate>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
             <Jump>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Connect With Me
                        <a href="https://www.linkedin.com/in/sarvjyoti05/"><FaLinkedinIn color="#333" size={30} className="ms-2" /></a>
                        <a href="https://github.com/RSarvjyoti"><FaGithubSquare color="#333" size={30} className="ms-2" /></a>
                        <a href="https://twitter.com/Sarvjyoti4"><FaXTwitter color="#333"size={30} className="ms-2" /></a>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                       
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                       
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" >
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
                </Jump>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
