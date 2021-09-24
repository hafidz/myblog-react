import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import ItemApi from "./ItemApi";
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
      <Tab eventKey="api" title="Test Api">
        <div className="row justify-content-center">
          <ItemApi />
        </div>
      </Tab>
    </Tabs>
  );
}
