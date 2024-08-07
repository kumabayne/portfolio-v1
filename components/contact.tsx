import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section className="bg-primary w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Contact
          </h2>
          <div>
            <p className="text-white">
              Reach out to me via one of the channels below.
            </p>
            <p className="text-white">I look forward to hearing from you.</p>
          </div>
          <div className="flex gap-6">
            <Link
              href="mailto:kumabayne@icloud.com"
              className="text-white"
              target="_blank"
            >
              <FontAwesomeIcon className="w-6 h-6" icon={faEnvelope} />
              <span className="sr-only">
                Send me an email at kumabayne@icloud.com
              </span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/kuma-bayne-1b83b7168/"
              className="text-white"
              target="_blank"
            >
              <FontAwesomeIcon className="w-6 h-6" icon={faLinkedin} />
              <span className="sr-only">Connect with me on LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/kumabayne"
              className="text-white"
              target="_blank"
            >
              <FontAwesomeIcon className="w-6 h-6" icon={faGithub} />
              <span className="sr-only">Check out my GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
