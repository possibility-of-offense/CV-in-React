const ProfileApp = ({ app }) => {
  return (
    <li>
      <p>
        <a href={app.url} target="_blank">
          {app.name}
        </a>
      </p>
    </li>
  );
};

export default ProfileApp;
