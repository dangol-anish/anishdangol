import React from "react";

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
  return (
    <div>
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-purple bg-[linear-gradient(110deg,#0a0015,45%,#2a0a3d,55%,#0a0015)] bg-[length:200%_100%] font-medium text-purple transition-colors  focus:ring-1 focus:ring-purple gap-2 px-12">
        {position === "left" && icon}

        {title}
        {position === "right" && icon}
      </button>
    </div>
  );
}

export default MagicButton;
