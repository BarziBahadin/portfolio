import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a2535] py-8 px-6 text-center">
      <p className="text-slate-600 text-sm">
        &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
