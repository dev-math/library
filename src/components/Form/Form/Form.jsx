import React from "react";

export const Form = ({ children, className, ...options }) => {
  return (
    <form
      className={`flex flex-col w-full max-w-xl p-400 drop-shadow rounded-200 bg-transparent text-accent-700 ${className}`}
      {...options}
    >
      {children}
    </form>
  );
};
