import classes from "./styles/ProfileSkill.module.css";

const ProfileSkill = ({ skill }) => {
  const diff = (10 - skill.level) * 10;

  return (
    <li className={classes["profile-skill"]}>
      <div>
        <div style={{ left: `${diff}%` }}></div>
      </div>
      <div>{skill.name}</div>
    </li>
  );
};

export default ProfileSkill;
