import Link from "next/link";
import PageContainer from "./PageContainer";

const Copyright = () => {
  const startYear = 2024;
  const currentYear = new Date().getFullYear();
  const yearLabel =
    currentYear === startYear ? `${startYear}` : `${startYear}–${currentYear}`;

  return (
    <PageContainer className="pb-10">
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
        <Link
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          aria-label="Creative Commons license"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          CC BY-NC-SA 4.0
        </Link>
        <span aria-hidden="true">•</span>
        <p>
          {yearLabel} &copy; Anish Dangol
        </p>
      </div>
    </PageContainer>
  );
};

export default Copyright;
