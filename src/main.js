import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/reviews";
import "./scripts/welcome-parallax";
import "./scripts/contact-parallax";