import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Input from "@/components/Input";

const Login = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container | pt-900">
            <h1 className="fs-primary-heading inline font-heading caps">
              Archive&nbsp;
            </h1>
            <h2 className="fs-secondary-heading inline font-heading caps">
              The library
            </h2>

            <form className="flex flex-col w-full max-w-xl p-400 drop-shadow rounded-200 bg-accent-700 text-white">
              <Input
                label="Email"
                type="email"
                name="email"
                placeholder="john@doe.com"
                required
              />
              <Input
                label="Password"
                type="password"
                name="password"
                placeholder="***"
                required
              />
              <button className="btn mt-700 bg-accent-700 border-white" type="submit">
                Login
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export { Login };
