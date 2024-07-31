import { CodeIcon } from "lucide-react";
import Link from "next/link";
import MainNav from "./main-nav";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <CodeIcon className="h-6 w-6" />
        <span className="sr-only">John Doe</span>
      </Link>
      <MainNav />
    </header>
  );
}
