import React from "react";
import FeatureTile01 from "assets/img/portfolio/ioa.png";
import FeatureTile02 from "assets/img/portfolio/ps.png";
import FeatureTile03 from "assets/img/portfolio/rw.png";
import FeatureTile04 from "assets/img/portfolio/tracking.png";
import FeatureTile05 from "assets/img/portfolio/am.png";
import FeatureTile06 from "assets/img/portfolio/fs.png";
import Item from "./Item";
import {
  SiKotlin,
  SiFirebase,
  SiCodeigniter,
  SiRails,
  SiRuby,
  SiJson,
  SiReact,
} from "react-icons/si";

export default function ItemMobile() {
  const features = [
    {
      imgSrc: FeatureTile04,
      imgAlt: (
        <div className="text-center">
          <SiKotlin size="1.5em" /> <SiCodeigniter size="1.5em" />
        </div>
      ),
      title: "Tracking Driver App",
      desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTile01,
      imgAlt: (
        <div className="text-center">
          <SiKotlin size="1.5em" /> <SiFirebase size="1.5em" />
        </div>
      ),
      title: "Index Of Alquran",
      desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTile02,
      imgAlt: (
        <div className="text-center">
          <SiKotlin size="1.5em" /> <SiRuby size="1.5em" />
          <SiRails size="1.5em" />
        </div>
      ),
      title: "Pejuang Subuh - Reporting",
      desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTile03,
      imgAlt: (
        <div className="text-center">
          <SiKotlin size="1.5em" /> <SiFirebase size="1.5em" />
        </div>
      ),
      title: "Random Wallpaper",
      desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTile05,
      imgAlt: (
        <div className="text-center">
          <SiReact size="1.5em" /> <SiJson size="1.5em" />
        </div>
      ),
      title: "Al Matsurat",
      desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: FeatureTile06,
      imgAlt: (
        <div className="text-center">
          <SiReact size="1.5em" /> <SiRuby size="1.5em" />{" "}
          <SiRails size="1.5em" />
        </div>
      ),
      title: "Football Score",
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
