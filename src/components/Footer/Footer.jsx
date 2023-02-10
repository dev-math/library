import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="primary-footer">
      <div class="bg-img-deco"></div>
      <div class="container">
        <p class="center-text pb-600">
          Made by
          <strong class="underline-accent-400">
            <a href="https://github.com/dev-math">@dev-math</a>
          </strong>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
