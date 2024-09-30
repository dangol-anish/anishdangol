import React from "react";
import Link from "next/link";

function FooterSection() {
  return (
    <div className=" text-white mt-20 py-5 lg:pb-5 flex justify-center border-t-[0.5px] border-t-stone-700 items-center">
      <span>
        Copyright &copy;{" "}
        <Link
          className="text-violet-500"
          href="https://www.linkedin.com/in/dangol-anish/"
        >
          Anish Dangol
        </Link>{" "}
        2024
      </span>
    </div>
  );
}

export default FooterSection;
