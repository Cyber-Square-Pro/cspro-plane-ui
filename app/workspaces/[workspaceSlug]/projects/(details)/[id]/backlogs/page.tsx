import React from "react";
import SprintAccordion from "../../(components)/sprint-accordion";
import BacklogAccordion from "../../(components)/backlog-accordion";

const ProjectBacklogsPage = () => {
  return (
    <div>
        <BacklogAccordion/>
      <SprintAccordion/>
    </div>
  );
};

export default ProjectBacklogsPage;
