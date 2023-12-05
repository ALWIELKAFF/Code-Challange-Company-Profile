import Link from "next/link";
import { IconTwitter } from "@/components/icons/IconTwitter";
import { IconRiot } from "@/components/icons/IconRiot";
import { IconLinkedIn } from "@/components/icons/IconLinkedIn";
import { IconInstagram } from "@/components/icons/IconInstagram";
import { IconFacebook } from "@/components/icons/IconFacebook";
import { NavBar } from "@/components/NavBar";
import { IconGame } from "@/components/icons/IconGame";

export default async function HomePage() {
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
        <section className="w-full min-h-screen flex flex-col items-center justify-center scroll-snap-start gap-8">
          <h2 className="text-4xl font-black text-center mb-8 max-w-2xl">
            Our Games
          </h2>
          <div className=" flex flex-row flex-wrap container px-4 md:px-6 gap-6 animate-fade-in-down w-full justify-center">
            <dev
              className="flex w-128 h-128 flex-col space-y-2 items-center group hover:scale-105 transition-transform"
              href="#"
            >
              <img
                src="lol.jpg"
                className="rounded-xl w-96 h-64 object-cover"
              />
              <h2 className="text-4xl font-bold">League of Legends</h2>
              <p className="text-gray-400 text-center">
                Face off in the ultimate 5v5 battle arena
              </p>
            </dev>
            <dev
              className="flex w-128 h-128 flex-col space-y-2 items-center group hover:scale-105 transition-transform"
              href="#"
            >
              <img
                src="val.jpg"
                className="rounded-xl w-96 h-64 object-cover"
              />
              <h2 className="text-4xl font-bold">Valorant</h2>
              <p className="text-gray-400 text-center">
                Style on your enemies with this 5v5 tactical shooter
              </p>
            </dev>
            <dev
              className="flex w-128 h-128 flex-col space-y-2 items-center group hover:scale-105 transition-transform"
              href="#"
            >
              <img src="wr.png" className="rounded-xl w-96 h-64 object-cover" />
              <h2 className="text-4xl font-bold">LOL: Wild Rift</h2>
              <p className="text-gray-400 text-center">
                Master every moment in this strategy card game
              </p>
            </dev>
          </div>
        </section>
      </main>

    </div>
  );
}
