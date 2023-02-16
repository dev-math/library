import React from "react";

import { MainLayout } from "@/components/Layout/MainLayout";

const Layout = ({ title, children }) => {
  return (
    <MainLayout>
      <main>
        <section>
          <div className="center-text center-content container | pt-900">
            <h1 className="fs-primary-heading inline font-heading caps">
              Archive&nbsp;
            </h1>
            <h2 className="fs-secondary-heading inline-block font-heading caps">
              The library
            </h2>
            <h3 className="fs-secondary-heading caps">{title}</h3>
            {children}
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export { Layout };
