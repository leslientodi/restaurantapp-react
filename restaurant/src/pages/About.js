import React from "react";
import "./About .css";
// import AboutChef1 from "";
// import AboutChef2 from "";
import ImageGallery from "../components/ImageGallery";

export default function About() {
  return (
    <div className="about-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">About</h1>
        </div>
      </header>

      <div className="container my-5">
        <p>
          Lorem ipsum dolor, sit amet cosectur adispisicing elit, provilient
          voluptate aut dolare ullum quasi manqum quad molestias cum officials
          perpicitiatis
        </p>
        <p>
          Lorem ipsum dolor sit amet consectuttur adipisicing elit. Ab magni
          animi tenetur eaque vei accusumas placeat quareat ad, Smimiique querat
          qui doloribus assumenda desuramt tenetuequas suscipit officials quad
          sequi?
        </p>

        <div className="row">
          <div className="col-lg-6">
            <img src="" className="img-fluid my-4" alt=""></img>
          </div>
          <div className="col-lg-6">
            <img src="" className="img-fluid my-4" alt=""></img>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectuttur adipisicing elit. Ab magni
          animi tenetur eaque vei accusumas placeat quareat ad, Smimiique querat
          qui doloribus assumenda desuramt tenetuequas suscipit officials quad
          sequi?
        </p>
      </div>
      <div className="bg-dark text-light">
        <ImageGallery />
      </div>
    </div>
  );
}
