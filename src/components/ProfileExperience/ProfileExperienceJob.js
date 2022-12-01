import classes from "./styles/ProfileExperienceJob.module.css";

const ProfileExperienceJob = ({ job }) => {
  const { title, company, start, finish, responsibilities } = job;

  return (
    <div className={classes["profile-experience__jobs--job"]}>
      <div>
        <p>{title}</p>
        <p>
          {start} - {finish}
        </p>
        <br />
        <p>Company: {company}</p>
      </div>
      <div>
        {responsibilities.length > 0 &&
          responsibilities.map((el) => (
            <p key={el.split(" ").join("").toLowerCase()}>{el}</p>
          ))}
      </div>
    </div>
  );
};

export default ProfileExperienceJob;
