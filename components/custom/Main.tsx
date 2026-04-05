import BlogPosts from "./body/Blog";
import Footer from "./body/Footer";
import About from "./body/About";
import Hero from "./body/Hero";
import MotionWrapper from "./body/MotionWrapper";
import PageContainer from "./PageContainer";
import Projects from "./body/Projects";
import Work from "./body/Work";
import CurrentFocus from "./body/CurrentFocus";

const Main = () => (
  <main className="relative">
    <PageContainer className="pt-24 pb-16">
      <MotionWrapper>
        <Hero />
        {/* <About /> */}
        <CurrentFocus />
        <Work />
        <Projects />
        <BlogPosts />
        <Footer />
      </MotionWrapper>
    </PageContainer>
  </main>
);

export default Main;
