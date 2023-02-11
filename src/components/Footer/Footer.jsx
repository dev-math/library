import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="primary-footer">
      <div className="bg-img-deco"></div>
      <div className="container">
        <p className="center-text pb-600">
          Made by&nbsp;
          <strong className="underline-accent-400">
            <a target="_blank" href="https://github.com/dev-math">@dev-math</a>
          </strong>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
