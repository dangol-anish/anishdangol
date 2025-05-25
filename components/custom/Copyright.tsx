import Link from "next/link";

const Copyright = () => {
  return (
    <span className="mx-auto max-w-screen-sm px-6 pb-6 flex items-center text-sm  justify-center bottom-0 gap-1">
      <Link
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        aria-label="Copyright"
        target="_blank"
        className=" border-b border-zinc-700"
      >
        CC BY-NC-SA 4.0
      </Link>
      <p>2024-PRESENT &copy; Anish Dangol</p>
    </span>
  );
};

export default Copyright;
