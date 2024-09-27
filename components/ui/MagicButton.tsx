"use client";

function MagicButton({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <button
        onClick={scrollToProjects}
        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-violet-300 bg-[linear-gradient(110deg,#0a0015,45%,#2a0a3d,55%,#0a0015)] bg-[length:200%_100%] font-medium text-violet-300 transition-colors  focus:ring-1 focus:ring-violet-300 gap-2 px-12"
      >
        {position === "left" && icon}

        {title}
        {position === "right" && icon}
      </button>
    </div>
  );
}

export default MagicButton;
