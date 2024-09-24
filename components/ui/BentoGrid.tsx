import { cn } from "@/libs/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "relative row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 overflow-hidden",
        className
      )}
      style={{
        background: "linear-gradient(180deg, #1C1917, #0C0A09)",
      }}
    >
      {img && (
        <img
          src={img}
          alt={img}
          className={cn(
            imgClassName,
            "hidden md:block absolute top-0 left-0 w-full h-full object-cover z-0 hover:scale-125 transition-transform duration-300 cursor-pointer"
          )}
        />
      )}

      <div
        className={cn(
          img
            ? "md:absolute bottom-0 left-0 w-full z-10 p-4 bg-gradient-to-t from-black via-transparent to-transparent"
            : "relative z-10 p-4"
        )}
      >
        <div
          className={cn(
            "font-sans font-bold text-white mb-2 text-3xl",
            titleClassName
          )}
        >
          {title}
        </div>
        <div className="font-sans font-normal text-white text-lg">
          {description}
        </div>
      </div>
    </div>
  );
};
