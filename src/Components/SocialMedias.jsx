import { Tooltip } from "@mui/material";
import { Mail } from "react-feather";
import { Instagram } from "react-feather";
import { Linkedin } from "react-feather";

/** Button representing E-mail. It's accessible already. */
const EmailButtonLink = (props) => {
  return (
    <Tooltip title="E-mail">
      <a href="mailto:fabricadesistemas@outlook.com">
        <Mail {...props}/>
      </a>
    </Tooltip>
  );
};

/** Button representing Instagram. It's accessible already. */
const InstagramButtonLink = (props) => {
  return (
    <Tooltip title="Instagram">
      <a href="">
        <Instagram {...props}/>
      </a>
    </Tooltip>
  );
};

/** Button representing LinkedIn. It's accessible already. */
const LinkedinButtonLink = (props) => {
  return (
    <Tooltip title="Linkedin">
      <a href="">
        <Linkedin {...props}/>
      </a>
    </Tooltip>
  );
};

export { EmailButtonLink, InstagramButtonLink, LinkedinButtonLink };