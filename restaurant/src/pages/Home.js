import React from "react";
import MenuBtn from "../components/MenuBtn";
import "./Home.css";
//import AboutImg from
import { Link } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";

export default function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
              <h2 className="mb-0 text-black fw-bold">Welcome to</h2>
              <h1 className="mb-5 text-black fw-bold text-center text-sm-start">
                Gladys Restaurant
              </h1>
              <MenuBtn />
            </div>
          </div>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
            <img src="" className="img-fluid w-50" alt="about img"></img>
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <h2 className="fs-1 mb-5 text-uppercase fw-bold">About us</h2>
            <p>
              Lorem ipsum dolor, sit amet cosectur adispisicing elit, provilient
              voluptate aut dolare ullum quasi manqum quad molestias cum
              officials perpicitiatis
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectuttur adipisicing elit. Ab magni
              animi tenetur eaque vei accusumas placeat quareat ad, Smimiique
              querat qui doloribus assumenda desuramt tenetuequas suscipit
              officials quad sequi?
            </p>
            <Link to="/about">
              <button type="button" className="btn btn-outline-sucess btn-lg">
                More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="menu-section py-5 text-ligth shadow">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="fs-1 mb-5 text-uppercase fw-bold">Our favourites</h2>
          <div className="row mb-5 w-100">
            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <h3 className="fs-2 mb-5">Food</h3>
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">English Breakfast</p>
                  <p className="fs-3 mx-2 text-success fw-nold">$2</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Spicy Beef</p>
                  <p className="fs-3 mx-2 text-success fw-nold">$15</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Spaghetti Bolognese</p>
                  <p className="fs-3 mx-2 text-success fw-nold">$11</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <h3 className="fs-2 mb-5">Drinks</h3>
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Coffee</p>
                  <p className="fs-3 mx-2 text-success fw-nold">$2</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Juice</p>
                  <p className="fs-3 mx-2 text-success fw-nold">$2</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Spirits</p>
                  <p className="fs-3 mx-2 text-success fw-nold">$11</p>
                </li>
              </ul>
            </div>
          </div>
          <MenuBtn />
        </div>
      </div>
      <ImageGallery />
    </div>
  );
}
