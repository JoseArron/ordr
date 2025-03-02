import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/");

  const data = await res.json();

  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-mono">
      {data.text}
      <Image
        className="dark"
        src="/ordr-logo.svg"
        alt="Vercel logomark"
        width={200}
        height={100}
      />
      <ThemeToggle />
    </div>
  );
}
