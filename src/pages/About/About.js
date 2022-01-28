import React from "react";
import ABoutImg from "../../assets/About.jpg";
import AboutHeader from "../../assets/About-Header.png";
import "./About.css";
const About = () => {
  return (
    <div className="  About-Container " id="About">
      <div>
        <img
          src={AboutHeader}
          alt=""
          width="100%"
          height="200px"
          className="mb-3"
        />
      </div>
      <h2 className=" my-5 About-header p-3 m-3 text-center mx-auto"> About Travellerz</h2>
      <div className=" mb-4 ">
        <div className="row d-flex">
          <div className="col-md-6 my-auto">
            <img src={ABoutImg} alt="" width="100%" />
          </div>
          <div className="col-md-6  p-5 my-auto mx-auto">
            <h1 className="text-danger text-center ">
              <b>Travellerz</b>
            </h1>
            <h4 className="p-4 text-white">
              We are the most experienced & Leading tour operator and travel
              agency in Bangladesh. Our specialty is the best tourist
              attractions, best locations, best itineraries, value for money,
              professional experienced guide, support team, most reliable and
              trustworthy company. Even we offer something extra, an authentic
              cultural experience, and a responsible approach to travel that is
              sensitive to the impact on the environment and local communities.
              we are combining a sustainable travel approach to itineraries
              designed specifically for people new to Bangladesh travel.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
