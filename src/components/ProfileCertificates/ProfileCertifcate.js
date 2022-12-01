import classes from "./styles/ProfileCertificate.module.css";

const ProfileCertificate = ({ certificate }) => {
  return (
    <div className={classes["profile-certificate"]}>
      <div>
        <h4>
          <a target="_blank" href={certificate.url}>
            {certificate.name}
          </a>
        </h4>
      </div>
      <img src={certificate.img} />
    </div>
  );
};

export default ProfileCertificate;
