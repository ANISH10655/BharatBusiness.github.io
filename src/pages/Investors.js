import React from 'react'
import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
import i4 from '../assets/i4.png';
import i5 from '../assets/i5.png';
import i6 from '../assets/i6.png';
import Last from '../components/Last';

const Investors = () => {
  return (
    <div>
      <>
        <div className="introSec2">
          <div className="int"></div>
        </div>

        <div className="divider -mt-12">
          <h1 className="head text-[32px] text-white ml-96 ">Investors</h1>
        </div>
        <div className="Incubators bg-emerald-500 -mt-6">
          <div className="IncubHead mt-8 text-[32px] ml-4">
            Investors Who Believed in Our Vision!
          </div>
          <div className="container1">
            <div className="row lg-1 ">
              <div className="col-lg-4 ">
                <div
                  className="card bg-info-subtle card text-center"
                  style={{ width: "100%" }}
                >
                  <img
                    src={i1}
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
                    src={i2}
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
                    src={i3}
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
                    src={i4}
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
                    src={i5}
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
                    src={i6}
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
      <div className='-mt-16'>
        <Last></Last>
      </div>
    </div>
  );
}

export default Investors
