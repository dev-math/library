import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import bookImg from "./book.png";

import "@/utils/bottom-left-decoration.css";
import "@splidejs/react-splide/css";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <div className="hero | pt-900">
              <div className="hero-about | pt-700">
                <h1 className="fs-primary-heading inline font-heading caps">
                  Archive&nbsp;
                </h1>
                <h2 className="fs-secondary-heading inline font-heading caps">
                  The library
                </h2>
                <p>
                  “Library - from the Latin liber, meaning "book." In Greek and
                  the Romance languages, the corresponding term is bibliotheca.
                  A collection or group of collections of books and/or other
                  print or nonprint materials organized and maintained for use
                </p>
                <button className="btn mt-700 w-full">Explore Catalogue</button>
              </div>

              <Splide aria-label="Top treding Images">
                <SplideSlide className="splide__slide">
                  <img
                    className="mx-auto"
                    draggable="false"
                    src={bookImg}
                    alt="Image of a book cover"
                  />
                </SplideSlide>
                <SplideSlide className="splide__slide">
                  <img
                    className="mx-auto"
                    draggable="false"
                    src={bookImg}
                    alt="Image of a book cover"
                  />
                </SplideSlide>
                <SplideSlide className="splide__slide">
                  <img
                    className="mx-auto"
                    draggable="false"
                    src={bookImg}
                    alt="Image of a book cover"
                  />
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export { Home };
