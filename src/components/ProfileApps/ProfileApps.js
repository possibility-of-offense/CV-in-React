import { useMemo } from "react";
import FirebaseIcon from "../Icons/FirebaseIcon";
import ReactIcon from "../Icons/ReactIcon";
import ReactRouterIcon from "../Icons/ReactRouterIcon";
import ReduxIcon from "../Icons/ReduxIcon";
import Box from "../REUSABLES/Box";
import ProfileApp from "./ProfileApp";

import classes from "./styles/ProfileApps.module.css";

const ProfileApps = () => {
  const memoizedApps = useMemo(
    () => ({
      apps: [
        {
          name: "iMDB Clone",
          url: "https://github.com/possibility-of-offense/iMDB-clone",
          technologies: {
            react: <ReactIcon />,
            redux: <ReduxIcon />,
            reactRouter: <ReactRouterIcon />,
            firebase: <FirebaseIcon />,
          },
        },
        {
          name: "Destinations App - React native",
          url: "https://github.com/possibility-of-offense/Destinations-app-with-React-Native",
          technologies: {
            react: <ReactIcon />,
          },
        },
        {
          name: "Social Media Attempt",
          url: "https://github.com/possibility-of-offense/Social-Media-Attempt",
          technologies: {
            react: <ReactIcon />,
            redux: <ReduxIcon />,
            reactRouter: <ReactRouterIcon />,
            firebase: <FirebaseIcon />,
          },
        },
        {
          name: "Todo Manager with Redux and React Router",
          url: "https://github.com/possibility-of-offense/Todo-Manager-Redux-React-Router",
          technologies: {
            react: <ReactIcon />,
            redux: <ReduxIcon />,
            reactRouter: <ReactRouterIcon />,
          },
        },
        {
          name: "Simple Blog with Redux",
          url: "https://github.com/possibility-of-offense/Simple-Blog-with-Redux",
          technologies: {
            react: <ReactIcon />,
            redux: <ReduxIcon />,
          },
        },
        {
          name: "Static React Calendar",
          url: "https://github.com/possibility-of-offense/react-calendar",
          technologies: {
            react: <ReactIcon />,
          },
        },
        {
          name: "Funny Questions Game",
          url: "https://github.com/possibility-of-offense/funny-questions-game",
          technologies: {
            react: <ReactIcon />,
            reactRouter: <ReactRouterIcon />,
          },
        },
        {
          name: "Truth Table with React",
          url: "https://github.com/possibility-of-offense/truth-table-react",
          technologies: {
            react: <ReactIcon />,
          },
        },
        {
          name: "Expense Tracker",
          url: "https://github.com/possibility-of-offense/Expense-tracker-with-React",
          technologies: {
            react: <ReactIcon />,
          },
        },
        {
          name: "React order app with Context API based views",
          url: "https://github.com/possibility-of-offense/React-order-app-with-Context-API-based-views",
          technologies: {
            react: <ReactIcon />,
          },
        },
      ],
    }),
    []
  );

  return (
    <div style={{ height: "100%" }}>
      <Box bgColor="#000" heading="Projects" additional={{ height: "100%" }}>
        <div className={classes["profile-apps"]}>
          <ul>
            {memoizedApps.apps.length > 0 &&
              memoizedApps.apps.map((app) => (
                <ProfileApp
                  key={app.name.split(" ").join("").toLowerCase()}
                  app={app}
                />
              ))}
          </ul>
        </div>
      </Box>
    </div>
  );
};

export default ProfileApps;
