export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-accent">
      <p className="text-xs text-muted-foreground">
        Copyright &copy; {new Date().getFullYear()} Kuma Bayne. All rights
        reserved.
      </p>
    </footer>
  );
}
