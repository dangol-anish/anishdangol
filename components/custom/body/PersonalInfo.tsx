import Image from "next/image";

const PersonalInfo = () => {
  return (
    <section className="flex justify-between p-6">
      <div className=" py-3 ">
        <h1 className="text-lg tracking-wider dark:text-zinc-100 text-zinc-700 font-bold">
          Anish Dangol
        </h1>
        <p className="text-md tracking-wider dark:text-zinc-100 text-zinc-700">
          Software Engineer
        </p>
      </div>
      <Image
        src="/assets/personal/me.webp"
        width={120}
        height={120}
        alt="Anish Dangol"
        className="rounded-4xl object-cover"
        priority
        quality={85}
        placeholder="blur"
        blurDataURL="/assets/personal/me-blur.webp"
      />
    </section>
  );
};

export default PersonalInfo;
