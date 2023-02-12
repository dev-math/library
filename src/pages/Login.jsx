import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Login = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div class="container | pt-900">
            <h1 class="fs-primary-heading inline font-heading caps">Archive</h1>
            <h2 class="fs-secondary-heading inline font-heading caps">
              The library
            </h2>

            <form className="flex flex-col w-full bg-accent-700 text-white">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@doe.com"
                required
              />
              <label for="password">Password</label>
              <input type="password" name="password" required />
              <button className="btn mt-700" type="submit">
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
