// app/page.tsx or wherever Home is
import Main from "@/components/custom/Main";
import ScrollToSection from "@/components/custom/body/ScrollToSection";

export default function Home() {
  return (
    <>
      <ScrollToSection />
      <Main />
    </>
  );
}
