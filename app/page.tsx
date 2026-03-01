import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50  dark:bg-black">
      <p className="italic text-[20px] tracking-[0.01em]">"Man is something that shall be overcome."</p>
      <div className="flex flex-col justify-center items-center my-2">
        <p>Friedrich Nietzsche</p>
        <p>Thus Spoke Zarathustra</p>
      </div>
    </div>
  );
}
