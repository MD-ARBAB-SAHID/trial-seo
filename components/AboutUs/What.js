import Styles from "./WhatUs.module.css";
import Image from "next/image"
const WhatUs = () => {
  return (
    <div className={`row ${Styles["what-us"]}`}>
      {
        <>
          <div
            className={`col-lg-4 col-md-5 col-sm-12 ${Styles["img-section"]}`}
          >
            <img src="https://tekmentors.s3.ap-south-1.amazonaws.com/About+Us/what.jpg" alt="What Us"/>
          </div>
          <div className={`col-lg-8 col-md-7 col-sm-12 ${Styles["content"]}`}>
          <h3>What ?</h3>
            <div>
              <p>Doing</p>
              <span>Tools and knowledge you bring</span>
            </div>
            <div>
              <p>Being</p>
              <span>
                How do you help build the learning mindset within the teams, how
                you facilitate the sharing of knowledge with the team, how you
                interact with people, how you exhibit a learning mindset
              </span>
              <br />
              <span>
                The qualities common to most successful agile coaches reflect
                openness, people orientation, and a deep and passionate pursuit
                of personal and professional excellence.
              </span>
              <br />
             <span>We take pride in developing others, listening and giving space,
              and accepting people for what they are, even though their
              performance may be judged critically in terms of what they are
              capable of doing. </span>
            </div>
            <div>
              <p>
                We mentor at two levels {"-"} at the individual level and at the
                team level.
              </p>
              <span>
                Within the sessions, we focus on imparting knowledge to the
                complete team. But in between the sessions, we interact with the
                individual team members to address their issues and provide
                feedback to them. Then again towards the end when we do the
                project work, we focus on how the team has delivered the project
                as a whole.<br/>
              </span>
              <span>
              One-on-one mentoring – meet them half step ahead, guarantee safety, create a positive intent.
              </span>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default WhatUs;
