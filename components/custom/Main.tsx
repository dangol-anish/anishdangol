// app/Main.tsx (server component)
import MotionWrapper from "./body/MotionWrapper";
import BackToTopButton from "./BackToTop";
import BlogPosts from "./body/Blog";
import Footer from "./body/Footer";
import Introduction from "./body/Introduction";
import PersonalInfo from "./body/PersonalInfo";
import Projects from "./body/Projects";
import Work from "./body/Work";

const Main = () => (
  <main className="mx-auto max-w-screen-sm dark:bg-[var(--background)] rounded-lg py-28 relative">
    <MotionWrapper>
      <section className="relative">
        <PersonalInfo />
      </section>
      <section className="relative">
        <Introduction />
      </section>
      <section className="relative my-6">
        <Work />
      </section>
      <section className="relative">
        <Projects />
      </section>
      <section className="relative">
        <BlogPosts />
      </section>
      <section className="relative">
        <Footer />
      </section>
    </MotionWrapper>
    <div className="fixed bottom-6 right-6">
      <BackToTopButton />
    </div>
  </main>
);

export default Main;
