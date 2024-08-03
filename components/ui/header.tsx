import { CodeIcon } from "lucide-react";
import Link from "next/link";
import MainNav from "./main-nav";
import Logo from "../logo";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="/"
        className="flex items-center justify-center hover:-scale-x-100"
        prefetch={false}
      >
        <Logo />
        <span className="sr-only">Kuma Bayne</span>
      </Link>
      <MainNav />
    </header>
  );
}
