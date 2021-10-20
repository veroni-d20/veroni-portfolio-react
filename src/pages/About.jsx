import React from "react";
import { ReactComponent as SchoolIcon } from "../asstes/images/graduation-cap.svg";
import { ReactComponent as WorkIcon } from "../asstes/images/graduation-cap.svg";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export default function About() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  return (
    <div className="container p-5">
      <div className="container">
        <h2 className="my-2">About</h2>
        <p className="my-2 py-3">Do know what to say :(</p>
        <div>
          <h2 className="my-2">Skills</h2>
          <div className="row py-3 py-md-4">
            <div className="col">
              <span className="badge rounded-pill  mx-2">HTML</span>
              <span className="badge rounded-pill  mx-2">CSS</span>
              <span className="badge rounded-pill  mx-2">PHP</span>
              <span className="badge rounded-pill  mx-2">PYTHON</span>
              <span className="badge rounded-pill  mx-2">JAVA</span>
              <span className="badge rounded-pill  mx-2">C | C++</span>
              <span className="badge rounded-pill  mx-2">JAVASCRIPT</span>
              <span className="badge rounded-pill  mx-2">TYPESCRIPT</span>
            </div>
          </div>
          <div className="row py-3 py-md-4">
            <div className="col">
              <span className="badge rounded-pill  mx-2">MYSQL</span>
              <span className="badge rounded-pill  mx-2">MARIADB</span>
              <span className="badge rounded-pill  mx-2">GIT</span>
              <span className="badge rounded-pill  mx-2">GITHUB</span>
              <span className="badge rounded-pill  mx-2">FIREBASE</span>
              <span className="badge rounded-pill  mx-2">VERCEL</span>
              <span className="badge rounded-pill  mx-2">CLOUDFLARE</span>
              <span className="badge rounded-pill  mx-2">HEROKU</span>
              <span className="badge rounded-pill  mx-2">APACHE</span>
              <span className="badge rounded-pill  mx-2">POSTMAN</span>
              <span className="badge rounded-pill  mx-2">ADOBE XD</span>
              <span className="badge rounded-pill  mx-2">PHOTOSHOP</span>
              <span className="badge rounded-pill  mx-2">ILLUSTRATOR</span>
            </div>
          </div>
          <div className="row py-3 py-md-4">
            <div className="col">
              <span className="badge rounded-pill  mx-2">REACTJS</span>
              <span className="badge rounded-pill  mx-2">FLASK</span>
              <span className="badge rounded-pill  mx-2">ASP.NET</span>
              <span className="badge rounded-pill  mx-2">MICROPYTHON</span>
              <span className="badge rounded-pill  mx-2">BOOTSTRAP</span>
              <span className="badge rounded-pill  mx-2">MATERIAL UI</span>
              <span className="badge rounded-pill  mx-2">REDUX</span>
              <span className="badge rounded-pill  mx-2">FRAMER MOTION</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="my-2">Experience</h2>
          <VerticalTimeline>
            {timelineElements.map((element) => {
              let isWorkIcon = element.icon === "work";
              let showButton =
                element.buttonText !== undefined &&
                element.buttonText !== null &&
                element.buttonText !== "";

              return (
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                  </h5>
                  <p id="description">{element.description}</p>
                  {showButton && (
                    <a
                      className={`button ${
                        isWorkIcon ? "workButton" : "schoolButton"
                      }`}
                      href="/"
                    >
                      {element.buttonText}
                    </a>
                  )}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}
