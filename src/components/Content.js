import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TabsControl from "elements/Tabs";
import React from "react";
import "react-tabs/style/react-tabs.css";

export default function Content() {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Work Experience
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <TabsControl />
      </div>
    </section>
  );
}
