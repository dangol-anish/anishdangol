import { EbGaramond } from "@/app/config/fontConfig";

export default function Work() {
  return (
    <>
      <section className="relative overflow-visible py-6">
        <div className="flex justify-between items-center my-6 px-6">
          <p className="text-md dark:text-zinc-100 font-semibold">Work</p>
        </div>

        <div className="py-4 px-6">
          <div>
            <h3 className="font-semibold dark:text-zinc-300 text-md text-zinc-700">
              RoadSense: Alternative Path Finder
            </h3>
            <p className="text-sm">Research</p>
            <p className="text-sm">Jan 2025 - Current</p>
          </div>
          <br />
          <p className={`${EbGaramond.className} text-lg py-2`}>
            Currently, I am working on a research paper on alternative path
            finding mechanism where I test methods and efficiency of algorithms
            to find paths between nodes.
          </p>
        </div>
      </section>
    </>
  );
}
