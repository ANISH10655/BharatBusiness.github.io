import React from "react";
import h1 from "../assets/h1.png";
import h2 from "../assets/h2.png";
import h3 from "../assets/h3.png";
import h4 from "../assets/h4.jpeg";
import h5 from "../assets/h5.png";
import h6 from "../assets/h6.png";
import Last from "../components/Last";
const Webservices = () => {
  return (
    <div>
      <>
        <div className="introSec ">
          <div className="int">
            <div className="-mt-15"></div>
          </div>
        </div>

        <div className="content">
          <h1 className="head -mt-24 font-bold text-white text-[40px] ml-[600px]">Web Services</h1>
        </div>

        <div className="Incubators bg-yellow-400 -mt-4">
          <div className="IncubHead text-[20px] ml-[600px] font-bold mt-4">
            Seek help from top service providers!
          </div>
          <div className="container1">
            <div className="row lg-1 ">
              <div className="col-lg-4 ">
                <div
                  className="card bg-info-subtle card text-center"
                  style={{ width: "100%" }}
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
          <div className="container1">
            <div className="row lg-1 ">
              <div className="col-lg-4 ">
                <div
                  className="card bg-info-subtle card text-center"
                  style={{ width: "100%" }}
                >
                  <img
                    src={h4}
                    className="card-img-top h-[200px]"
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
                    className="card-img-top h-[200px]"
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
                    className="card-img-top h-[200px]"
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
        </div>
      </>
      <div className="-mt-16">
        <Last></Last>
      </div>
    </div>
  );
};

export default Webservices;
