import { useMemo } from "react";
import Box from "../REUSABLES/Box";
import ProfileSkill from "./ProfileSkill";

import classes from "./styles/ProfileSkills.module.css";

const ProfileSkills = () => {
  const memoizedSkills = useMemo(
    () => ({
      skills: [
        {
          name: "HTML, CSS, SASS",
          level: 8,
        },
        {
          name: "JavaScript",
          level: 10,
        },
        {
          name: "Express",
          level: 7,
        },
        {
          name: "React, Redux",
          level: 9,
        },
        {
          name: "NextJS",
          level: 9,
        },
        {
          name: "React Native",
          level: 7,
        },
        {
          name: "React Router",
          level: 9,
        },
        {
          name: "TypeScript",
          level: 7,
        },
        {
          name: "Python",
          level: 7,
        },
        {
          name: "Apex",
          level: 9,
        },
        {
          name: "Lightning Web Components",
          level: 10,
        },
        {
          name: "Docker, Kubernetes",
          level: 7,
        },
      ],
    }),
    []
  );

  return (
    <Box bgColor="#1B2124" heading="Skills">
      <div className={classes["profile-skill__skills"]}>
        <ul>
          {memoizedSkills.skills.length > 0 &&
            memoizedSkills.skills.map((skill) => (
              <ProfileSkill
                key={skill.name.split(" ").join("").toLowerCase()}
                skill={skill}
              />
            ))}
        </ul>
      </div>
    </Box>
  );
};

export default ProfileSkills;
