import Link from "next/link";
import { IconTwitter } from "../components/icons/IconTwitter";
import { IconRiot } from "../components/icons/IconRiot";
import { IconLinkedIn } from "../components/icons/IconLinkedIn";
import { IconInstagram } from "../components/icons/IconInstagram";
import { IconGame } from "../components/icons/IconGame";
import { IconFacebook } from "../components/icons/IconFacebook";
import { NavBar } from "@/components/NavBar";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0b10] text-white relative">
      <header className="sticky top-0 px-4 lg:px-6 h-16 flex items-center bg-[#0a0b10] backdrop-filter backdrop-blur-md bg-opacity-60 z-10">
        <Link className="flex items-center justify-center" href="#">
          <IconRiot className="h-6 w-6" />
          <span className="sr-only">Company Name</span>
        </Link>
        <NavBar/>
      </header>
      <main className="flex flex-col overflow-auto scroll-snap-type-y mandatory">
        <section className="w-full h-screen flex flex-row text-center scroll-snap-start bg-[url('/test.png')] bg-no-repeat">
          <div className="animate-fade-in-down w-full h-full backdrop-blur flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl">
              Welcome to Riot Games
            </h1>
            <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Experience epic gameplays and storylines in our games.
            </p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#c7922e] px-8 text-sm font-medium text-black shadow transition-colors hover:bg-[#c7922e]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c7922e] disabled:pointer-events-none disabled:opacity-50 mt-6"
              href="/about-us"
            >
              Learn More
            </Link>
          </div>
        </section>
        <section className="w-full min-h-screen flex items-center justify-center scroll-snap-start">
          <div className="container px-4 md:px-6 animate-fade-in-down">
            <h2 className="text-3xl font-bold text-center mb-8">
              Company Overview
            </h2>
            <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto mb-12">
              Riot Games was founded in 2006 to develop, publish, and support
              the most player-focused games in the world. In 2009, we released
              our debut title, League of Legends, to worldwide acclaim. League
              has gone on to be the most-played PC game in the world and a key
              driver of the explosive growth of esports.
            </p>
          </div>
        </section>
        <section className="w-full min-h-screen flex items-center justify-center scroll-snap-start">
          <div className="container flex flex-col items-center px-4 md:px-6 animate-fade-in-down">
            <h2 className="text-7xl font-bold text-center mb-8">
              Testimonials
            </h2>
            <div className="flex flex-row flex-wrap justify-center items-center gap-6">
              <div className="flex flex-row items-center gap-6">
                <img
                  src="t1.jpg"
                  className="rounded-full w-64 h-64 object-fill"
                />
                <p className="text-gray-400 text-3xl">
                  "i hate this game as much as i hate my friends who are playing
                  this pile of garbage" -Thomas Shelby
                </p>
              </div>
              <div className="flex flex-row items-center gap-6">
                <img src="t2.jpg" className="rounded-full w-64 h-64 object-fill" />
                <p className="text-gray-400 text-3xl">
                  "Wrost Competitive Game i Have Ever Played in my life. BadGame
                  Mechanic and Full of lifeless Smurfs" -Al Capone
                </p>
              </div>
              <div className="flex flex-row items-center gap-6">
                <img src="t3.jpg" className="rounded-full w-64 h-64 object-fill"/>
                <p className="text-gray-400 text-3xl">
                  "I love this game especially the fact that you keep getting
                  stuck on a loading screen when joining the game."
                  -Billy Kimber
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}
