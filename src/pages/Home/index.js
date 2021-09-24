import About from "components/About";
import Footer from "components/Footer";
import Header from "components/Header";
import Blog from "components/Blog";
import Content from "components/Content";
import Slide from "components/Slide";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <Slide />
      <Content />
      <Blog />
      <About />
      <Footer />
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; Hafiz Husein 2021</small>
        </div>
      </div>
    </div>
  );
}
