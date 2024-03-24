import ProfileCertificates from "../ProfileCertificates/ProfileCertificates";
import ProfileApps from "../ProfileApps/ProfileApps";
import ProfileEducation from "../ProfileEducation/ProfileEducation";

import classes from "./styles/SecondView.module.css";
import Pagination from "../Pagination/Pagination";

const SecondView = () => {
  return (
    <div className={classes["profile-container__second"]}>
      <main>
        <aside>
          <h3 className={classes["profile-container__skills--heading"]}>
            Apps
          </h3>
          <ProfileApps />
          <Pagination num={2} position="left" routing="/" next={false} />
        </aside>
        <section>
          <ProfileCertificates />
          <ProfileEducation />
        </section>
      </main>
    </div>
  );
};

export default SecondView;
