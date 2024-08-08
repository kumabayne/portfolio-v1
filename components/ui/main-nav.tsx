import Link from "next/link";
import { buttonVariants } from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

export default function MainNav() {
  return (
    <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
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
      <Link
        href="/kuma-bayne_resume.pdf"
        download={true}
        className={`${buttonVariants({
          variant: "default",
        })} flex gap-1`}
        target="_blank"
      >
        <FontAwesomeIcon className="w-4 h-4" icon={faFilePdf} />
        Download Resume
      </Link>
    </nav>
  );
}
