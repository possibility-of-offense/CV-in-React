import classes from "./styles/ProfileCertificates.module.css";

import programmingBasics from "./certificates/softuni-programming-basics.png";
import mathBasics from "./certificates/softuni-basics-math.png";
import fundamentalsJavascript from "./certificates/softuni-programming-fundaments-javascript.png";
import jsAdvanced from "./certificates/softuni-js-advanced.png";
import advancedCss from "./certificates/advanced-css.png";
import completeJS from "./certificates/complete-javascript-course.png";
import webAppsVueJs from "./certificates/build-web-apps-vue-js-3.png";
import modernJS from "./certificates/modern-javascript.png";

import { useMemo } from "react";
import ProfileCertificate from "./ProfileCertifcate";

const ProfileCertificates = () => {
  const memoizedCerttificates = useMemo(() => ({
    certificates: [
      {
        name: "Fundamentals in Mathematics",
        url: "https://softuni.bg/certificates/details/131336/7fe783c6",
        img: mathBasics,
      },
      {
        name: "Programming basics with Javascript",
        url: "https://softuni.bg/certificates/details/131336/7fe783c6",
        img: programmingBasics,
      },
      {
        name: "Programming Fundamentals with Javascript",
        url: "https://softuni.bg/certificates/details/139196/27dfb8d6",
        img: fundamentalsJavascript,
      },
      {
        name: "Javascript Advanced",
        url: "https://softuni.bg/certificates/details/145669/93db389f",
        img: jsAdvanced,
      },
      {
        name: "Advanced CSS",
        url: "https://www.udemy.com/certificate/UC-9378a704-74ae-4d55-b23c-3dbe10bd7642/",
        img: advancedCss,
      },
      {
        name: "The Complete JavaScript Course 2022: From Zero To Expert",
        url: "https://www.udemy.com/certificate/UC-c7722a49-2c2f-4fd7-8fdc-45561a6e4dc3/",
        img: completeJS,
      },
      {
        name: "Build Web Apps with Vue Js 3 and Firebase",
        url: "https://www.udemy.com/certificate/UC-4f94f016-ab79-4eba-bc3a-999e7d65490a/",
        img: webAppsVueJs,
      },
      {
        name: "Modern JavaScript from the Begining",
        url: "https://www.udemy.com/certificate/UC-d23a69b8-e9a3-4744-ad4f-6bf03be86509/",
        img: modernJS,
      },
    ],
  }));

  return (
    <div className={classes["profile-certificates"]}>
      <h2>Certificates</h2>
      <div className={classes["profile-certificates__line"]}></div>
      <div className={classes["profile-certificates__images"]}>
        {memoizedCerttificates.certificates.length > 0 &&
          memoizedCerttificates.certificates.map((cert) => (
            <ProfileCertificate
              key={cert.name.split(" ").join("").toLowerCase()}
              certificate={cert}
            />
          ))}
      </div>
      <div className={classes.quote}>
        <p>
          When we are no longer able to change a situation, we are challenged to
          change ourselves!
        </p>
        <p>Viktor Frankl</p>
      </div>
      <div className={classes["profile-certificates__footer"]}>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:ultimatemeaning90@gmail.com">
            ultimatemeaning90@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:359890399434">+359890399434</a>
        </p>
      </div>
    </div>
  );
};

export default ProfileCertificates;
