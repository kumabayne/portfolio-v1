import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Need to get in touch? Check out my contact info and links to my latest work. Let's chat about your project or just say hi.",
};

export default function ContactPage() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 md:py-20">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Get in Touch
        </h1>
        <p className="text-muted-foreground md:text-xl">
          Have a question or want to work together? Fill out the form below and
          we&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <div className="mt-10 sm:mt-12">
        <form className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              className="min-h-[150px]"
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
