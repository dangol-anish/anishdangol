import { ModeToggle } from "../ModeToggle";
import Link from "next/link";
import { Button } from "../ui/button";

export function Header() {
  return (
    <>
      <header id="top">
        <div className="flex">
          <ModeToggle />
          <Link href="/blog">
            <Button variant="outline" size="icon">
              B
            </Button>
          </Link>
        </div>
      </header>
    </>
  );
}
