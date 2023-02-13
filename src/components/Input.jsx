import React from "react";

const Input = ({ label, ...options }) => {
  return (
    <>
      <label className="py-100 px-200" htmlFor="email">
        {label}
      </label>
      <input
        {...options}
        className="appearance-none block py-200 px-300 rounded-200 w-full"
      />
    </>
  );
};

export default Input;
