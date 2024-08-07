import Link from "next/link";

export default function MainNav() {
  return (
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link
        href="#work"
        className="text-sm font-medium hover:underline underline-offset-4"
        prefetch={false}
      >
        Work
      </Link>
      <Link
        href="#about"
        className="text-sm font-medium hover:underline underline-offset-4"
        prefetch={false}
      >
        About
      </Link>
      <Link
        href="#contact"
        className="text-sm font-medium hover:underline underline-offset-4"
      >
        Contact
      </Link>
    </nav>
  );
}
