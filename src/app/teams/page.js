import Link from "next/link";
import { IconTwitter } from "@/components/icons/IconTwitter";
import { IconRiot } from "@/components/icons/IconRiot";
import { IconLinkedIn } from "@/components/icons/IconLinkedIn";
import { IconInstagram } from "@/components/icons/IconInstagram";
import { IconFacebook } from "@/components/icons/IconFacebook";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://randomuser.me/api/?results=4");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function HomePage() {
  const res = await getData();
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0b10] text-white relative">
      <header className="sticky top-0 px-4 lg:px-6 h-16 flex items-center bg-[#0a0b10] backdrop-filter backdrop-blur-md bg-opacity-60 z-10">
        <Link className="flex items-center justify-center" href="#">
          <IconRiot className="h-6 w-6" />
          <span className="sr-only">Company Name</span>
        </Link>
        <NavBar />
      </header>
      <main className="flex flex-col overflow-auto scroll-snap-type-y mandatory">
        <section className="w-full min-h-screen flex flex-col gap-8 items-center justify-center scroll-snap-start">
            <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Want to know more about us?
            </p>
            <h1 className="text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl">
              Meet our Team
            </h1>
          <div className=" flex flex-row flex-wrap container px-4 md:px-6 gap-6 animate-fade-in-down w-full justify-center text-center">
            {res.results.map((person) => (
              <Person key={person.login.uuid} {...person} />
            ))}
          </div>
        </section>
      </main>
     
    </div>
  );
}
function Person({ picture, name }) {
  return <div
    className="flex max-w-xs w-128 flex-col space-y-2 items-center group hover:scale-105 transition-transform"
    href="#"
  >
    <Image
      width={128}
      height={128}
      className="object-cover rounded-full"
      src={picture.large} />
    <h2 className="text-4xl font-bold flex-1">
      {`${name.first} ${name.last}`}
    </h2>
    <p className="text-gray-400 text-center">
      A Person at Riot Games
    </p>
  </div>;
}

