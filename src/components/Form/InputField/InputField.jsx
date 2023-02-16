import React from "react";

export const InputField = ({ label, name, ...options }) => {
  return (
    <>
      <label className="py-100 px-200" htmlFor={name}>
        {label}
      </label>
      <input
        {...options}
        id={name}
        className="appearance-none block py-200 px-300 rounded-200 w-full outline-none focus:border-accent-400"
      />
    </>
  );
};
