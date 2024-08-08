import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Pixel pusher by day, nature lover by night. When I&apos;m not
            coding, you can find me hiking, camping, or exploring new places
            with my family.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold">Skills</h3>
              <ul
                className="space-y-1 text-muted-foreground"
                data-testid="skill-list"
              >
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Node</li>
                <li>REST APIs</li>
                <li>Git</li>
                <li>A11y</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold">Experience</h3>
              <ul
                className="space-y-1 text-muted-foreground"
                data-testid="experience-list"
              >
                <li>
                  {new Date().getFullYear() - 2015}+ years as a front-end
                  engineer
                </li>
                <li>Worked with various startups and agencies</li>
                <li>Contributed to open-source projects</li>
              </ul>
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
            </div>
          </div>
        </div>
        <Image
          src="/camp-avatar.png"
          width="460"
          height="4690"
          alt="About"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
        />
      </div>
    </section>
  );
}
