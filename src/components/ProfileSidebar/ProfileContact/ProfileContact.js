import classes from "./styles/ProfileContact.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Box from "../../REUSABLES/Box";

const ProfileContact = () => {
  return (
    <Box bgColor="#000" heading="Contact">
      <div className={classes[`profile-contact__contacts`]}>
        <ul>
          <li>
            <div>
              <p>
                <a href="https://github.com/possibility-of-offense">
                  <span>Github</span>
                  <span>https://github.com/possibility-of-offense</span>
                </a>
              </p>
            </div>
            <div>
              <FaGithub />
            </div>
          </li>
          <li>
            <div>
              <p>
                <a href="https://www.linkedin.com/in/ventsislav-iliev-72b166228">
                  <span>Linkedin</span>
                  <span>
                    https://www.linkedin.com/in/ventsislav-iliev-72b166228/
                  </span>
                </a>
              </p>
            </div>
            <div>
              <FaLinkedinIn />
            </div>
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default ProfileContact;
