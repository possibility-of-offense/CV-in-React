import ProfileHeaderImage from "../ProfileHeader/ProfileHeaderImage";
import ProfileHeaderInfo from "../ProfileHeader/ProfileHeaderInfo";
import ProfileDescription from "../ProfileDescription/ProfileDescription";
import ProfileContact from "../ProfileSidebar/ProfileContact/ProfileContact";
import ProfileSkills from "../ProfileSkills/ProfileSkills";
import ProfileExperience from "../ProfileExperience/ProfileExperience";

import classes from "./styles/FirstView.module.css";
import Pagination from "../Pagination/Pagination";

const FirstView = () => {
  let description = `Hello! My name is Ventsislav Iliev! I'm Front-End Developer from Blagoevgrad, Bulgaria who is looking for a job including JavaScript and React! I'm passionate about learning new things and dealing with daily challenges! If you're looking for a front-end developer who can work with React and is not afraid of writing HTML and CSS as well, I'm the person you're looking for :)`;

  return (
    <div className={classes["profile-container__first"]}>
      <header className={classes["profile-container__header"]}>
        <ProfileHeaderImage title="Ventsislav Iliev - Front-end Developer" />
        <ProfileHeaderInfo
          name="Ventsislav Iliev"
          title="Front-End Developer"
          address="Blagoevgrad Elenovo 62 A fl.6 ap.18"
        />
        <section className={classes["profile-container__description"]}>
          <ProfileDescription
            title="Front-End Developer"
            description={description}
          />
        </section>
      </header>
      <main>
        <aside className={classes["sidebar"]}>
          <ProfileContact />
          <h3 className={classes["profile-container__skills--heading"]}>
            Skills
          </h3>
          <ProfileSkills />
        </aside>
        <section className={classes["main-container"]}>
          <ProfileExperience />
        </section>
      </main>

      <Pagination num="1" routing="/second" />
    </div>
  );
};

export default FirstView;
