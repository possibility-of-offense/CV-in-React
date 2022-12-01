import { useMemo } from "react";
import Box from "../REUSABLES/Box";
import ProfileSkill from "./ProfileSkill";

import classes from "./styles/ProfileSkills.module.css";

const ProfileSkills = () => {
  const memoizedSkills = useMemo(
    () => ({
      skills: [
        {
          name: "HTML",
          level: 10,
        },
        {
          name: "CSS",
          level: 10,
        },
        {
          name: "SASS",
          level: 8,
        },
        {
          name: "JavaScript",
          level: 10,
        },
        {
          name: "Vue Js",
          level: 8,
        },
        {
          name: "React",
          level: 9,
        },
        {
          name: "React Router",
          level: 9,
        },
        {
          name: "Redux",
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
