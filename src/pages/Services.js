import React from 'react'
import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';
import ser1 from '../assets/ser1.jpg';
import ser2 from '../assets/ser2.jpg';
import ser3 from '../assets/ser3.jpg';
import ser4 from '../assets/ser4.jpg';
import ser5 from '../assets/ser5.jpg';
import Last from '../components/Last'

const Services = () => {
  return (
    <div>
      <>
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={one}
                className="d-block w-100"
                alt="..."
                height="500px"
                width="100%"
              />
              <div className="carousel-caption d-none d-md-block">
                <div className="-mt-96 text-[32px] text-white">
                  <h5>Empowering Small Businesses for Success.</h5>
                  <p>
                    {" "}
                    Tools, expertise, and support necessary for small businesses
                    to achieve their goals and reach new heights.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={two}
                className="d-block w-100"
                alt="..."
                height="500px"
                width="100%"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Tailored Solutions for Startup Growth</h5>
                <p>
                  Customized strategies and solutions that specifically address
                  the unique challenges faced by new businesses.{" "}
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={three}
                className="d-block w-100"
                alt="..."
                height="500px"
                width="100%"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Your Partner in Overcoming Business Challenges.</h5>
                <p>
                  Emphasizing your role in helping businesses navigate and
                  conquer the various obstacles and hurdles.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="head text-[32px] ml-5 font-bold">Services</div>
        <hr className="featurette-divider" />
        <div className="content">
          We offer the following services to help new organizations.
        </div>
        <div className="container1">
          <div className="row lg-1 ">
            <div className="col-lg-4 ">
              <div
                className="card bg-body-secondary card text-center"
                style={{ width: "100%" }}
              >
                <img
                  src={ser1}
                  className="card-img-top"
                  alt="..."
                  height="200px"
                />
                <div className="card-body">
                  <h4 className="card-title">Web Services</h4>
                  <p className="card-text ">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>

                  <a
                    href="/webservices"
                    className="btn btn-md btn-outline-danger"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="card bg-body-secondary card text-center"
                style={{ width: "100%" }}
              >
                <img
                  src={ser2}
                  className="card-img-top"
                  alt="..."
                  height="200px"
                />
                <div className="card-body">
                  <h4 className="card-title">Technology Services</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="/techservices"
                    className="btn btn-outline-danger btn-md"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="card bg-body-secondary card text-center"
                style={{ width: "100%" }}
              >
                <img
                  src={ser3}
                  className="card-img-top"
                  alt="..."
                  height="200px"
                />
                <div className="card-body">
                  <h4 className="card-title">Marketing Services</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-outline-danger btn-md">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="subhead">Others</div>
        <div className="container2 flex  justify-between">
          <div className="row lg-1 ">
            <div className="col-lg-6 ">
              <div
                className="card bg-body-secondary card text-center"
                style={{ width: "100%" }}
              >
                <img
                  src={ser4}
                  className="card-img-top"
                  alt="..."
                  height="200px"
                />
                <div className="card-body">
                  <h4 className="card-title">Investors</h4>
                  <p className="card-text ">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/investors" className="btn btn-md btn-outline-danger">
                    See More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="card bg-body-secondary card text-center"
                style={{ width: "100%" }}
              >
                <img
                  src={ser5}
                  className="card-img-top"
                  alt="..."
                  height="200px"
                />
                <div className="card-body">
                  <h4 className="card-title">Resources</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-outline-danger btn-md">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <div className="mt-4">
        <Last></Last>
      </div>
    </div>
  );
}

export default Services
