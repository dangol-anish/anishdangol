import { ModeToggle } from "@/components/ModeToggle";
import { Header } from "@/components/header/Header";
import { Main } from "@/components/main/Main";

export default function Home() {
  return (
    <div className="p-6 md:px-12 md:py-8 flex flex-col gap-6">
      <Header />
      <Main />
    </div>
  );
}
