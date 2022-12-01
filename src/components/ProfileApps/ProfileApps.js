import { useMemo } from "react";
import Box from "../REUSABLES/Box";
import ProfileApp from "./ProfileApp";

import classes from "./styles/ProfileApps.module.css";

const ProfileApps = () => {
  const memoizedApps = useMemo(
    () => ({
      apps: [
        {
          name: "Social Media Attempt",
          url: "https://github.com/possibility-of-offense/Social-Media-Attempt",
        },
        {
          name: "Todo Manager with Redux and React Router",
          url: "https://github.com/possibility-of-offense/Todo-Manager-Redux-React-Router",
        },
        {
          name: "Simple Blog with Redux",
          url: "https://github.com/possibility-of-offense/Simple-Blog-with-Redux",
        },
        {
          name: "Static React Calendar",
          url: "https://github.com/possibility-of-offense/react-calendar",
        },
        {
          name: "Funny Questions Game",
          url: "https://github.com/possibility-of-offense/funny-questions-game",
        },
        {
          name: "Truth Table with React",
          url: "https://github.com/possibility-of-offense/truth-table-react",
        },
        {
          name: "Expense Tracker",
          url: "https://github.com/possibility-of-offense/Expense-tracker-with-React",
        },
        {
          name: "React order app with Context API based views",
          url: "https://github.com/possibility-of-offense/React-order-app-with-Context-API-based-views",
        },
        {
          name: "Partial IMDb single movie page",
          url: "https://github.com/possibility-of-offense/Partial-IMDb-single-movie-page",
        },
      ],
    }),
    []
  );

  return (
    <div>
      <Box bgColor="#000" heading="Projects">
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
