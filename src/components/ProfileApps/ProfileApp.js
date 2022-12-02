import classes from "./styles/ProfileApp.module.css";

const Icon = (icon) => {
  const iconElement = icon.icon;
  return iconElement;
};

const ProfileApp = ({ app }) => {
  const icons = app.technologies;

  return (
    <li>
      <div className={classes["icons"]}>
        {Object.keys(icons).length > 0 &&
          Object.keys(icons).map((icon) => (
            <Icon key={icon} icon={icons[icon]} />
          ))}
      </div>
      <p>
        <a href={app.url} target="_blank">
          {app.name}
        </a>
      </p>
    </li>
  );
};

export default ProfileApp;
