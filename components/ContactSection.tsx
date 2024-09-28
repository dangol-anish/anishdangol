"use client";
import React from "react";
import { Button } from "./ui/moving-border";

function ContactSection() {
  const handleContactClick = () => {
    window.location.href = "mailto:dangolanish@proton.me";
  };

  return (
    <div className="py-20 flex flex-col justify-center items-center gap-8">
      <div className="flex justify-center flex-col items-center">
        <h2 className="heading pb-2" id="contact-section">
          Interested in{" "}
          <span className="text-violet-500">working together?</span>
        </h2>
        <p className="text-stone-200 text-center">
          Feel free to reach out for any questions, collaborations, or just to
          say hello!
        </p>
      </div>
      <div>
        <Button
          borderRadius="1.75rem"
          className="bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 text-white border-none text-lg font-bold"
          onClick={handleContactClick}
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
}

export default ContactSection;
