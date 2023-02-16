import React from "react";
import { Link } from "@/components/Elements";

const Footer = () => {
  return (
    <footer className="primary-footer | flex grow items-end">
      <div className="bg-img-deco"></div>
      <div className="container">
        <p className="center-text pb-600">
          Made by&nbsp;
          <strong>
            <Link isExternal target="_blank" href="https://github.com/dev-math">
              @dev-math
            </Link>
          </strong>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
