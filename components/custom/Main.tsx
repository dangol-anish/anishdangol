import BlogPosts from "./body/Blog";
import Footer from "./body/Footer";
import Hero from "./body/Hero";
import MotionWrapper from "./body/MotionWrapper";
import PageContainer from "./PageContainer";
import Projects from "./body/Projects";
import Work from "./body/Work";
import CurrentFocus from "./body/CurrentFocus";

const Main = () => (
  <main className="relative">
    <PageContainer className="pt-16 pb-14 sm:pt-24 sm:pb-16">
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
