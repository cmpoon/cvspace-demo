import React from "react";
import config from "../config";

export default function RecordCreated(props) {

  // Issue #130 - Change title back to project name after submitting the form
  document.title = config.projectName;

  return (
    <div>
      <h3>Thanks!</h3>
      Your interest in this CV has been noted.
    </div>
  );
}
