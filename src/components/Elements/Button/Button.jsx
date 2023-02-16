import React from "react";

export const Button = ({ children, className, ...options }) => {
  return (
    <button
      className={`btn mt-700 bg-accent-700 transition hover:-translate-y-2 ${className}`}
      {...options}
    >
      {children}
    </button>
  );
};
