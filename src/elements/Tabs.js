import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import ItemMobile from "./ItemMobile";
import ItemPorto from "./ItemPorto";

export default function TabsControl() {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      {/* <Tab eventKey="home" title="Work">
        wkkwkw
      </Tab> */}
      <Tab eventKey="home" title="Mobile Apps">
        <div className="row justify-content-center">
          <ItemMobile />
        </div>
      </Tab>
      <Tab eventKey="web" title="Website">
        <div className="row justify-content-center">
          <ItemPorto />
        </div>
      </Tab>
    </Tabs>
  );
}
