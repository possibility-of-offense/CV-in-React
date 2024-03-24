import ProfileHeaderImage from "../ProfileHeader/ProfileHeaderImage";
import ProfileHeaderInfo from "../ProfileHeader/ProfileHeaderInfo";
import ProfileDescription from "../ProfileDescription/ProfileDescription";
import ProfileContact from "../ProfileSidebar/ProfileContact/ProfileContact";
import ProfileSkills from "../ProfileSkills/ProfileSkills";
import ProfileExperience from "../ProfileExperience/ProfileExperience";

import classes from "./styles/FirstView.module.css";
import Pagination from "../Pagination/Pagination";

const FirstView = () => {
  let description = `Hello! My name is Ventsislav Iliev! I'm Full-Stack Developer from Blagoevgrad, 
  Bulgaria who is looking for a job including with NodeJs, React or Python! 
  I'm passionate about learning new things and dealing with daily challenges! 
  I'm a certified Salesforce Commerce Cloud developer and a creator the
  Commerce Assistant for Commerce Cloud, which is an AI-driven live chat,
  which has the purpose of showing product recommendations.`;

  return (
    <div className={classes["profile-container__first"]}>
      <header className={classes["profile-container__header"]}>
        <ProfileHeaderImage title="Ventsislav Iliev - Full-Stack Developer" />
        <ProfileHeaderInfo
          name="Ventsislav Iliev"
          title="Full-Stack Developer"
          address="Blagoevgrad Elenovo 62 A fl.6 ap.18"
        />
        <section className={classes["profile-container__description"]}>
          <ProfileDescription
            title="Full-Stack Developer"
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
