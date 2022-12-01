import image from "./me.jpg";
import classes from "./styles/ProfileHeaderImage.module.css";

const ProfileHeaderImage = ({ title }) => {
  return (
    <div className={classes["profile-header__image"]}>
      <img alt={title} title={title} src={image} />
    </div>
  );
};

export default ProfileHeaderImage;
