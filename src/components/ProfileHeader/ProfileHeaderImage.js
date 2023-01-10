// import image from "./me.jpg";
import classes from "./styles/ProfileHeaderImage.module.css";

const ProfileHeaderImage = ({ title }) => {
  return (
    <div className={classes["profile-header__image"]}>
      {/* <img alt={title} title={title} src={image} /> */}
      <img
        alt={title}
        title={title}
        src="https://drive.google.com/uc?export=view&id=1nmK9EhRruGJTEHOiz9o3VlHrJabznici"
      />
    </div>
  );
};

export default ProfileHeaderImage;
