import React from "react";

import aboutus from "../assets/aboutus.jpg";
import { Link } from "react-router-dom";
import investors from "../assets/investors.jpg";
import Marketing from "../assets/Marketing-Services-1.jpg";
import ts from '../assets/pic_01-technical-support.jpg';
import character from '../assets/Characteristics-of-web-services.webp';
import resources from '../assets/resources.webp';
import h1 from '../assets/h1.png';
import h2 from '../assets/h2.png';
import h3 from '../assets/h3.png';
import h4 from '../assets/h4.jpeg';
import h5 from '../assets/h5.png';
import h6 from '../assets/h6.png';
import Last from '../components/Last'



const Home = () => {
  return (
    <div>
      <div>
        <div className="bg1 ">
          <div className="absolute h-[400px] w-[900px] mx-auto flex flex-col mt-[90px] justify-center items-center gap-3 ">
            <div className="container w-[400px] inline-block">
              <p className="text-orange-400  text-[70px] text-center font-bold tracking-widest decoration-4 typing-demo">
                BHARAT <span className="text-green-800">BUSINESS</span>
              </p>
            </div>

            <p className="text-pink-300 text-[40px] font-bold text-center font-serif animate__animated wow animate__backInRight">
              The Future of Business is here{" "}
            </p>
            <p className="text-pink-300 text-[40px] font-bold text-center font-serif animate__animated wow animate__backInLeft">
              Invest Create Fascinate
            </p>
          </div>
        </div>
      </div>

      <div className="w-[1550px] h-[500px] flex bg-red-600">
        <div className="flex-col mt-24 ml-6 w-[800px] gap-4 text-white">
          <p className="text-[32px] text-white">About us</p>
          <p>
            Bharat Business is a Small Business Digital Support Platform based
            in Patna Division, BR. We understand that small local businesses
            often face challenges in competing effectively in the digital age.
            That's why we connect these businesses with skilled volunteers who
            can provide assistance in areas like marketing, web design, and
            technology. Our goal is to empower small businesses to thrive in the
            digital world by leveraging the expertise and knowledge of our
            dedicated volunteers. Bharat Business is a Small Business Digital
            Support Platform based in Patna Division, BR. We understand that
            small local businesses often face challenges in competing
            effectively in the digital age. That's why we connect these
            businesses with skilled volunteers who can provide assistance in
            areas like marketing, web design, and technology. Our goal is to
            empower small businesses to thrive in the digital world by
            leveraging the expertise and knowledge of our dedicated volunteers.
          </p>
        </div>

        <div className="mt-20 mr-[30px]">
          <img src={aboutus} className="w-[600px]"></img>
        </div>

        <div>
          <Link to="/help">
            <button
              type="button"
              class="btn btn-primary -ml-[1437px] mt-[400px] border-4"
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className=" flex-wrap bg-red-900 w-[1550px] h-[500px]">
        <>
          <div className="hero">
            <h1 className="text-[40px] text-white top-2">Our Services</h1>
          </div>
          <div className="products flex gap-1 mt-10">
            <div className="card h-[350px] w-[500px]">
              <img
                className="card-img-top"
                src={character}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Web services</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/webservices" className="btn btn-primary">
                  read more
                </a>
              </div>
            </div>
            <div className="card h-[350px] w-[500px]">
              <img
                className="card-img-top"
                src={Marketing}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Marketing Support</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  read more
                </a>
              </div>
            </div>
            <div className="card h-[350px] w-[500px]">
              <img className="card-img-top" src={ts} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Technical support</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/techservices" className="btn btn-primary">
                  read more
                </a>
              </div>
            </div>
            <div className="card h-[350px] w-[500px]">
              <img
                className="card-img-top"
                src={resources}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Resources</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  read more
                </a>
              </div>
            </div>
            <div className="card h-[350px] w-[500px]">
              <img
                className="card-img-top h-[150px]"
                src={investors}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Investors</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/investors" className="btn btn-primary">
                  read more
                </a>
              </div>
            </div>
          </div>
        </>
      </div>

      <div className="w-[1550px] h-[800px] bg-yellow-200">
        <h1 className="text-[25px] text-black ">Success Stories</h1>
        <div className="-mt-10">
          <>
            <div className="container1">
              <div className="row lg-1 ">
                <div className="col-lg-4">
                  <div
                    className="card bg-info-subtle card text-center "
                    style={{ width: "100% " }}
                  >
                    <img
                      src={h1}
                      className="card-img-top h-[200px]"
                      alt="..."
                      height="200px"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Bluehost</h4>
                      <p className="card-text ">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-md btn-outline-danger">
                        Approach
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card bg-info-subtle card text-center"
                    style={{ width: "100%" }}
                  >
                    <img
                      src={h2}
                      className="card-img-top h-[200px]"
                      alt="..."
                      height="200px"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Hostinger</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-outline-danger btn-md">
                        Approach
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card bg-info-subtle card text-center"
                    style={{ width: "100%" }}
                  >
                    <img
                      src={h3}
                      className="card-img-top h-[200px]"
                      alt="..."
                      height="200px"
                    />
                    <div className="card-body">
                      <h4 className="card-title">HostGator</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-outline-danger btn-md">
                        Approach
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container1 -mt-1">
              <div className="row lg-1 ">
                <div className="col-lg-4 ">
                  <div
                    className="card bg-info-subtle card text-center"
                    style={{ width: "100%" }}
                  >
                    <img
                      src={h4}
                      className="card-img-top h-[130px]"
                      alt="..."
                      height="200px"
                    />
                    <div className="card-body">
                      <h4 className="card-title">DreamHost</h4>
                      <p className="card-text ">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-md btn-outline-danger">
                        Approach
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card bg-info-subtle card text-center"
                    style={{ width: "100%" }}
                  >
                    <img
                      src={h5}
                      className="card-img-top h-[130px]"
                      alt="..."
                      height="200px"
                    />
                    <div className="card-body">
                      <h4 className="card-title">SiteGround</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-outline-danger btn-md">
                        Approach
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card bg-info-subtle card text-center"
                    style={{ width: "100%" }}
                  >
                    <img
                      src={h6}
                      className="card-img-top h-[130px]"
                      alt="..."
                      height="200px"
                    />
                    <div className="card-body">
                      <h4 className="card-title">A2 Hosting</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-outline-danger btn-md">
                        Approach
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>

      <div className="bg-cyan-900">
        <p className="text-[32px] ml-4 text-white">Contact Form</p>

        <div>
          <form
            action="https://formspree.io/f/mvojoyzq"
            method="POST"
            className="flex flex-col gap-4 justify-center py-6 px-9 rounded-lg animate__animated wow animate__slideInUp"
          >
            <label className="flex flex-col gap-1">
              <p className="text-[1rem] text-white mb-1 leading-[1.375rem] ml-4 font-serif">
                Name<sup className="text-red-800">*</sup>
              </p>

              <input
                required
                type="text"
                placeholder="Enter your name"
                name="name"
                autoComplete="off"
                className="bg-white rounded-[0.5rem] ml-3 text-black w-[40%] p-[12px] border-2 border-black"
              />
            </label>

            <label className="flex flex-col gap-1">
              <p className="text-[1rem] text-white mb-1 leading-[1.375rem] ml-4 font-serif">
                Mobile no<sup className="text-red-800">*</sup>
              </p>

              <input
                required
                type="text"
                pattern="[789][0-9]{9}"
                autoComplete="off"
                title="Please enter valid phone number"
                placeholder="Enter your Mobile Number"
                name="tel"
                className="bg-white rounded-[0.5rem] ml-3 text-black w-[40%] p-[12px] border-2 border-black"
              />
            </label>

            <label className="flex flex-col gap-1">
              <p className="text-[1rem] text-white mb-1 leading-[1.375rem] ml-4 font-serif">
                Email<sup className="text-red-800">*</sup>
              </p>

              <input
                required
                type="email"
                placeholder="Enter your email"
                name="email"
                autoComplete="off"
                className="bg-white rounded-[0.5rem] ml-3 text-black w-[40%] p-[12px] border-2 border-black"
              />
            </label>
            <label className="flex flex-col gap-1">
              <p className="text-[1rem] text-white mb-1 leading-[1.375rem] ml-4 font-serif">
                Ask your query
              </p>
              <textarea
                placeholder="Enter your message"
                name="textarea"
                autoComplete="off"
                className="bg-white rounded-[0.5rem] ml-3 text-white w-[40%] border-2 border-black"
              />
            </label>

            <button className="bg-yellow-400 rounded-[8px] w-[20%] h-10 font-medium px-6 py-2 -mt-2 ml-7  text-black text-xl text-center ">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Last></Last>
    </div>
  );
};

export default Home;
