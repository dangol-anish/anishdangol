import Link from "next/link";
export default function Blog() {
  return (
    <>
      <p>This page is currently under construction! </p>
      Go to{" "}
      <Link className="text-slate-200" href="/">
        Home
      </Link>
    </>
  );
}
