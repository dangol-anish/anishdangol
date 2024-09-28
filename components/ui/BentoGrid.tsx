import { gridItems } from "@/data";
import { cn } from "@/libs/utils/cn";

// BentoGrid component to wrap the grid layout
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

// BentoGridItem component to represent individual grid items
export const BentoGridItem = ({
  className,
  title,
  description,
  list,
  img,
  imgClassName,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  list?: { emoji?: string; name: string }[];
}) => {
  return (
    <div
      id="about-section"
      className={cn(
        img
          ? "relative row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between hidden md:flex flex-col space-y-4 overflow-hidden"
          : "relative row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 overflow-hidden",
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

        {description ? (
          <p
            className="text-xl text-justify text-stone-300"
            style={{ whiteSpace: "pre-line" }}
          >
            {description}
          </p>
        ) : list ? (
          <ul>
            {list.map((item, index) => (
              <li
                key={index}
                className="flex gap-2 items-center text-xl py-1  text-stone-300"
              >
                {item.emoji && <span>{item.emoji}</span>}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};
