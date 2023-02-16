import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const Link = ({ children, className, isExternal, ...props }) => {
  if (isExternal) {
    return (
      <a className={`inline-block underline-accent-400 transition hover:-translate-y-2 ${className}`} {...props}>
        {children}
      </a>
    );
  }
  return (
    <RouterLink className={`inline-block underline-accent-400 transition hover:-translate-y-2 ${className}`} {...props}>
      {children}
    </RouterLink>
  );
};
