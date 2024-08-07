import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import Contact from "@/components/contact";

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Front-End Engineer
              </h1>
              <p className="text-muted md:text-xl">
                Crafting beautiful and functional web experiences.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 duration-500 ease-in-out"
                  prefetch={false}
                >
                  View Work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-6 text-sm font-medium shadow-sm transition-colors text-primary hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ease-in-out duration-500"
                >
                  Contact
                </Link>
              </div>
            </div>
            <Image
              src="/claymat-dev.png"
              width="512"
              height="512"
              alt="dev coding at his desk"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Featured Projects
                </h2>
                <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-muted-foreground">
                  Check out some of my recent web development projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
              <Card>
                <Link href="#" className="group block h-full" prefetch={false}>
                  <CardHeader>
                    {/* <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Project Thumbnail"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    /> */}
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
                    {/* <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Project Thumbnail"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    /> */}
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
                    {/* <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Project Thumbnail"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    /> */}
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
            <Image
              src="/camp-avatar.png"
              width="460"
              height="4690"
              alt="About"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </section>
        <Contact />
      </main>
    </div>
  );
}
