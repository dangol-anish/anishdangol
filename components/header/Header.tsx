import { ModeToggle } from "../ModeToggle";
import Link from "next/link";
import { Button } from "../ui/button";
import { NotebookPen } from "lucide-react";

export function Header() {
  return (
    <>
      <header id="top" className="flex justify-between">
        <Button className="text-[18px]" size="icon">
          A
        </Button>
        <div className="flex gap-2">
          <ModeToggle />
          <Link href="/blog">
            <Button variant="outline" size="icon">
              <NotebookPen size={18} />
            </Button>
          </Link>
        </div>
      </header>
    </>
  );
}
