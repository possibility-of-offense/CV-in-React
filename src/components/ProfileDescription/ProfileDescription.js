import classes from "./styles/ProfileDescription.module.css";

const ProfileDescription = ({ title, description }) => {
  const [first, last] = title.split(" ");

  return (
    <div className={classes["profile-description"]}>
      <div className={classes["profile-description__role"]}>
        <div>
          <div>{first}</div>
          <div>
            <div className={classes["empty"]}></div>
            <div>{last}</div>
          </div>
        </div>
      </div>
      <div className={classes["profile-description__msg"]}>{description}</div>
    </div>
  );
};

export default ProfileDescription;
