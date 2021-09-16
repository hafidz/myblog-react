import React from "react";
import FeatureTile01 from "assets/img/portfolio/w1.jpeg";
import FeatureTile02 from "assets/img/portfolio/w2.jpeg";
import FeatureTile03 from "assets/img/portfolio/w3.jpeg";
import FeatureTile04 from "assets/img/portfolio/w4.jpeg";
import FeatureTile05 from "assets/img/portfolio/peta.png";
import FeatureTile06 from "assets/img/portfolio/sis.png";
import Item from "./Item";
import {
  SiCodeigniter,
  SiRails,
  SiRuby,
  SiMysql,
  SiPostgresql,
  SiLaravel,
} from "react-icons/si";

export default function ItemPorto() {
  const features = [
    {
      imgSrc: FeatureTile01,
      imgAlt: (
        <div className="text-center">
          <SiRuby size="1.5em" /> <SiRails size="1.5em" />{" "}
          <SiMysql size="1.5em" />
        </div>
      ),
      title: "Walletku Customer Service",
      desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTile02,
      imgAlt: (
        <div className="text-center">
          <SiRuby size="1.5em" /> <SiRails size="1.5em" />{" "}
          <SiMysql size="1.5em" />
        </div>
      ),
      title: "Walletku AR Report - Finance",
      desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTile03,
      imgAlt: (
        <div className="text-center">
          <SiRuby size="1.5em" /> <SiRails size="1.5em" />{" "}
          <SiMysql size="1.5em" />
        </div>
      ),
      title: "Walletku Dashboard - Report",
      desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTile04,
      imgAlt: (
        <div className="text-center">
          <SiRuby size="1.5em" /> <SiRails size="1.5em" />{" "}
          <SiMysql size="1.5em" />
        </div>
      ),
      title: "Walletku Stock",
      desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTile05,
      imgAlt: (
        <div className="text-center">
          <SiLaravel size="1.5em" />
          <SiPostgresql size="1.5em" />
        </div>
      ),
      title: "Maps Smart City Cimahi",
      desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTile06,
      imgAlt: (
        <div className="text-center">
          <SiCodeigniter size="1.5em" /> <SiMysql size="1.5em" />
        </div>
      ),
      title: "SIS REDD+ INDONESIA",
      desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
  ];
  return (
    <div className="row justify-content-center">
      {features.map((feature, index) => (
        <Item data={feature} key={index}></Item>
      ))}
    </div>
  );
}
