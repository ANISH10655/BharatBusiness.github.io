import React from 'react'
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.png';
import t3 from '../assets/t2.png';
import t4 from '../assets/t4.png';
import t5 from '../assets/t5.png';
import t6 from '../assets/t6.png';
import Last from "../components/Last";

const Servicetalk = () => {
  return (
    <div>
      <>
        <div className="introSec1">
          <div className="int">
            <p>The best ever technology minds are ready for your asistance!</p>
          </div>
        </div>

        <div className="divider">
          <h1 className="head text-white text-[60px] -mt-36 ml-[190px]">
            Technology Services
          </h1>
          <hr className="featurette-divider" />
        </div>
        <div className="Incubators mt-10  bg-teal-400">
          <div className="IncubHead"></div>
          <div className="container1">
            <div className="row lg-1 ">
              <div className="col-lg-4 ">
                <div
                  className="card bg-info-subtle card text-center"
                  style={{ width: "100%" }}
                >
                  <img
                    src={t1}
                    className="card-img-top h-[200px]"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Samsung</h4>
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
                    src={t2}
                    className="card-img-top h-[200px]"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Cloudworx</h4>
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
                    src={t3}
                    className="card-img-top h-[200px]"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Sony</h4>
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
                    src={t4}
                    className="card-img-top h-[200px]"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h4 className="card-title">WOL 3D</h4>
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
                    src={t5}
                    className="card-img-top h-[200px]"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h4 className="card-title">PrimeBook</h4>
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
                    src={t6}
                    className="card-img-top h-[200px]"
                    alt="..."
                    height="200px"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Texas Instruments</h4>
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
      <div className='-mt-20'>
        <Last></Last>
      </div>
    </div>
  );
}

export default Servicetalk
