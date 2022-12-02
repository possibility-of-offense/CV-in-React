import { useMemo } from "react";
import classes from "./styles/ProfileEducation.module.css";

const ProfileEducation = () => {
  const memoizedSchools = useMemo(
    () => ({
      schools: [
        {
          name: "High school 'Arseni Kostencev'",
          place: "Blagoevgrad, Bulgaria",
          start: 2005,
          finish: 2009,
          specialty: ["Mathematics", "Informatics"],
          subjects: ["Mathematics", "Informatics", "English", "German"],
        },
        {
          name: "South-west university 'Neofit Rilski'",
          place: "Blagoevgrad, Bulgaria",
          start: 2009,
          finish: 2014,
          specialty: ["Philosophy"],
          subjects: [
            "Logic",
            "Ethics",
            "Aesthetics",
            "Religious Philosophy",
            "Gnoseology",
            "Social Philosophy",
            "Phenomenology",
            "Existential Psychotherapy",
            "Dialectics",
          ],
        },
      ],
    }),
    []
  );

  return (
    <div className={classes["profile-education__wrapper"]}>
      <h2>Education</h2>
      {memoizedSchools.schools.length > 0 && (
        <div className={classes["profile-education__wrapper--schools"]}>
          {memoizedSchools.schools.map((school) => (
            <div
              className={classes["profile-education__wrapper--schools-single"]}
              key={school.name.split(" ").join("").toLowerCase()}
            >
              <div>
                <h4>{school.name}</h4>
                <p>{school.place}</p>
                <p>
                  {school.start} - {school.finish}
                </p>
              </div>
              <div>
                <h4>
                  Specialty: <br />
                  <p>{school.specialty.join(" and ")}</p>
                </h4>
                <div
                  className={
                    classes["profile-education__wrapper--schools-single__keys"]
                  }
                >
                  <p>Key subjects:</p>
                  <ul>
                    {school.subjects.map((subject) => (
                      <li key={subject.split(" ").join("").toLowerCase()}>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileEducation;
