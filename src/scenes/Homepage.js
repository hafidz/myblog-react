import About from "parts/About";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Blog from "parts/Blog";
import Portofolio from "parts/Portofolio";
import Slide from "parts/Slide";
import React from "react";

export default function Homepage() {
  return (
    <div>
      <Header />
      <Slide />
      <Portofolio />
      <Blog />
      <About />
      <Footer />
      <div class="copyright py-4 text-center text-white">
        <div class="container">
          <small>Copyright &copy; Hafiz Husein 2021</small>
        </div>
      </div>
    </div>
  );
}
