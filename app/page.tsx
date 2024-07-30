import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <CodeIcon className="h-6 w-6" />
          <span className="sr-only">John Doe</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Work
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Front-End Engineer
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Crafting beautiful and functional web experiences.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Work
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Contact
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Featured Projects
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent web development projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
              <Card>
                <Link href="#" className="group block h-full" prefetch={false}>
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Project Thumbnail"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle className="text-lg font-bold group-hover:underline">
                      Project 1
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Lorem ipsum
                    </CardDescription>
                  </CardContent>
                </Link>
              </Card>
              <Card>
                <Link href="#" className="group block h-full" prefetch={false}>
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Project Thumbnail"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle className="text-lg font-bold group-hover:underline">
                      Project 2
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      A sleek and interactive e-commerce website with a seamless
                      user experience.
                    </CardDescription>
                  </CardContent>
                </Link>
              </Card>
              <Card>
                <Link href="#" className="group block h-full" prefetch={false}>
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Project Thumbnail"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle className="text-lg font-bold group-hover:underline">
                      Project 3
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      A visually stunning and highly interactive web application
                      built with the latest front-end technologies.
                    </CardDescription>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="text-muted-foreground md:text-xl">Lorem ipsum</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Skills</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>React</li>
                    <li>Lorem ipsum</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Experience</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>3+ years as a front-end engineer</li>
                    <li>Worked with various startups and agencies</li>
                    <li>Contributed to open-source projects</li>
                  </ul>
                </div>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="About"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 John Doe. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
