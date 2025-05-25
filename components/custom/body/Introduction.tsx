import { EbGaramond } from "@/app/config/fontConfig";

const Introduction = () => {
  return (
    <section id="about" className={`${EbGaramond.className} p-6 text-lg`}>
      <p>
        I&apos;m a <em>software developer</em>, <em>UI/UX designer</em>, and a{" "}
        <em>problem solver</em> who loves crafting simple and meaningful digital
        experiences. My approach is shaped by minimalism, focusing on clarity,
        function, and clean design.
      </p>
      <br />
      <p>
        I enjoy self-driven project that challenge me to research, build, and
        improve. Whether coding or designing, I&apos;m always exploring new
        tools and better solutions.
      </p>
      <br />

      <p>
        This is my personal space to build, break, and share. I also write
        interactive blog on engineering and design, keeping things simple and
        practical.
      </p>
    </section>
  );
};

export default Introduction;
