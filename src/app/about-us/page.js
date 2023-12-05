import Link from "next/link";
import { IconTwitter } from "@/components/icons/IconTwitter";
import { IconRiot } from "@/components/icons/IconRiot";
import { IconLinkedIn } from "@/components/icons/IconLinkedIn";
import { IconInstagram } from "@/components/icons/IconInstagram";
import { IconFacebook } from "@/components/icons/IconFacebook";
import { NavBar } from "@/components/NavBar";

export default function HomePage() {
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
        <section className="w-full h-screen flex flex-row text-center scroll-snap-start relative">
          <video
            className="absolute h-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="who-we-are-video.mov"
          />
          <div className="animate-fade-in-down w-full h-full backdrop-blur flex flex-col justify-center items-center bg-[#0a0b10] bg-opacity-50">
            <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Who are we?
            </p>
            <h1 className="text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl">
              We Are Rioters
            </h1>
          </div>
        </section>
        <section className="w-full min-h-screen flex items-center justify-center scroll-snap-start bg-slate-200 p-6">
          <div className="flex flex-col justify-start items-center px-4 md:px-6 animate-fade-in-down">
            <h2 className="text-4xl text-gray-800 font-black text-center mb-8 max-w-2xl">
              We aspire to be the most player-focused game company in the world
            </h2>
            <p className="text-gray-500 text-xl text-center max-w-3xl mx-auto mb-12">
              Riot Games was founded in 2006 to develop, publish, and support
              the most player-focused games in the world. In 2009, we released
              our debut title, League of Legends, to worldwide acclaim. League
              has gone on to be the most-played PC game in the world and a key
              driver of the explosive growth of esports.
            </p>
            <p className="text-gray-500 text-xl text-center max-w-3xl mx-auto mb-12">
              With League in its second decade, we're continuing to evolve the
              game while delivering new experiences to players with Teamfight
              Tactics, Legends of Runeterra, VALORANT, League of Legends: Wild
              Rift, and multiple work-in-progress titles. In addition, Riot
              Forge gives developers access to Riot's IP to create games like
              Ruined King and plenty of other adventures across Runeterra. We're
              also expanding the world of Runeterra through multimedia projects
              across music, comic books, board games, and Arcane, our Emmy
              Award-winning animated series.
            </p>
            <p className="text-gray-500 text-xl text-center max-w-3xl mx-auto mb-12">
              The annual League of Legends World Championship features qualified
              esports teams from 12 international leagues. Worlds is the most
              widely viewed and followed esport tournament, and it's among the
              largest and most popular gaming and sporting events in the world.
            </p>
            <p className="text-gray-500 text-xl text-center max-w-3xl mx-auto mb-12">
              Founded by Brandon Beck and Marc Merrill, and led by CEO Dylan
              Jadeja, Riot is headquartered in Los Angeles, California, and has
              4,500+ Rioters in 20+ offices worldwide. Riot has been certified
              as a Great Place to Work for three years in a row and featured on
              numerous lists including Fortune's “100 Best Companies to Work
              For,” “25 Best Companies to Work in Technology,” “100 Best
              Workplaces for Millennials,” and “50 Best Workplaces for
              Flexibility.”
            </p>
          </div>
        </section>
        <section className="w-full min-h-screen flex flex-col gap-8 items-center justify-center scroll-snap-start">
          <h2 className="text-4xl font-black text-center mb-8 max-w-2xl">
            Our values
          </h2>
          <div className=" flex flex-row flex-wrap container px-4 md:px-6 gap-6 animate-fade-in-down w-full justify-center text-center">
            <div
              className="flex max-w-xs w-128 flex-col space-y-2 items-center group hover:scale-105 transition-transform"
              href="#"
            >
              <h2 className="text-4xl font-bold flex-1">
                Player Experience First
              </h2>
              <p className="text-gray-400 text-center">
                We aim to develop and maintain games that are enjoyable,
                engaging, and respectful of the player community.
              </p>
            </div>
            <div
              className="flex max-w-xs w-128 flex-col space-y-2 items-center group hover:scale-105 transition-transform"
              href="#"
            >
              <h2 className="text-4xl font-bold flex-1">Dare to Dream</h2>
              <p className="text-gray-400 text-center">
                We values taking risks and learning from both successes and
                failures to iterate on their products and processes.
              </p>
            </div>
            <div
              className="flex max-w-xs w-128 flex-col space-y-2 items-center group hover:scale-105 transition-transform"
              href="#"
            >
              <h2 className="text-4xl font-bold flex-1">Thrive Together</h2>
              <p className="text-gray-400 text-center">
                We believe we're stronger when we respect each other, invest in
                each other, and succeed as one team.
              </p>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}
