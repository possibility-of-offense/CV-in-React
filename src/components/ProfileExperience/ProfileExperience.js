import { useMemo } from "react";
import ProfileExperienceJob from "./ProfileExperienceJob";

import classes from "./styles/ProfileExperience.module.css";

const ProfileExperience = () => {
  const memoizedJobs = useMemo(() => ({
    jobs: [
      {
        title: "Restaurant Supervisor",
        company: "The Restaurant Group plc",
        start: "06/09/2014",
        finish: "01/05/2019",
        responsibilities: [
          "Managing Front of House stuff",
          "Ensuring great customer service",
          "Oversee employees performance",
          "Helping when needed on the bar and in the kitchen",
          "Ensuring that the work environment is safe and secure",
        ],
      },
      {
        title: "Web Developer",
        company: "Webselo Ltd.",
        start: "01/05/2020",
        finish: "05/03/2022",
        responsibilities: [
          "Building performant websites and e-commerce shop",
          "Making responsive and mobile design",
          "Creating UI elements on customers demand",
          "Designing and refining presentatinal websites",
        ],
      },
    ],
  }));

  return (
    <div className={classes["profile-experience"]}>
      <h2>Professional Experience</h2>
      <div className={classes["profile-experience__line"]}></div>
      <div className={classes["profile-experience__jobs"]}>
        {memoizedJobs.jobs.length > 0 &&
          memoizedJobs.jobs.map((job) => (
            <ProfileExperienceJob
              key={job.title.split(" ").join("").toLowerCase()}
              job={job}
            />
          ))}
      </div>
    </div>
  );
};

export default ProfileExperience;
