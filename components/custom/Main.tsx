import React from "react";
import PersonalInfo from "./body/PersonalInfo";
import Introduction from "./body/Introduction";
import Footer from "./body/Footer";
import BackToTopButton from "./BackToTop";
import Projects from "./body/Projects";
import Work from "./body/Work";
import BlogPosts from "./body/Blog";

const Main = () => {
  return (
    <main className="mx-auto max-w-screen-sm dark:bg-[var(--background)] rounded-lg py-28 ">
      <PersonalInfo />
      <Introduction />
      <div className="my-6">
        <Work />
        <Projects />
        <BlogPosts />
      </div>
      <Footer />
      <BackToTopButton />
    </main>
  );
};

export default Main;
