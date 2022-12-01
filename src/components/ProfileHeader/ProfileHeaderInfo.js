import classes from "./styles/ProfileHeaderInfo.module.css";

const ProfileHeaderInfo = ({ name, title, address }) => {
  const [firstName, lastName] = name.split(" ");
  return (
    <div className={classes["profile-header__info"]}>
      <h1 className={classes["profile-header__info--heading"]}>
        <span>{firstName}</span>
        <span>{lastName}</span>
      </h1>
      <div className={classes["profile-header__info--job-title"]}>{title}</div>
      <p className={classes["profile-header__info--address"]}>
        Address : {address}
      </p>
      <br />
      <br />
      <p>This CV was created as a React App - check it out</p>
    </div>
  );
};

export default ProfileHeaderInfo;
