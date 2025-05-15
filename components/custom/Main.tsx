import React, { useEffect } from "react";
import { motion } from "framer-motion";
import PersonalInfo from "./body/PersonalInfo";
import Introduction from "./body/Introduction";
import Footer from "./body/Footer";
import BackToTopButton from "./BackToTop";
import Projects from "./body/Projects";
import Work from "./body/Work";
import BlogPosts from "./body/Blog";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const url = new URL(window.location.href); // fix here
    if (url.searchParams.has("scrollTo")) {
      url.searchParams.delete("scrollTo");
      window.history.replaceState(
        {},
        document.title,
        url.pathname + url.search
      );
    }
  }, []);

  return (
    <main className="mx-auto max-w-screen-sm dark:bg-[var(--background)] rounded-lg py-28 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section variants={itemVariants} className="relative">
          <PersonalInfo />
        </motion.section>
        <motion.section variants={itemVariants} className="relative">
          <Introduction />
        </motion.section>
        <motion.section variants={itemVariants} className="relative my-6">
          <Work />
        </motion.section>
        <motion.section variants={itemVariants} className="relative">
          <Projects />
        </motion.section>
        <motion.section variants={itemVariants} className="relative">
          <BlogPosts />
        </motion.section>
        <motion.section variants={itemVariants} className="relative">
          <Footer />
        </motion.section>
      </motion.div>

      <div className="fixed bottom-6 right-6">
        <BackToTopButton />
      </div>
    </main>
  );
};

export default Main;
