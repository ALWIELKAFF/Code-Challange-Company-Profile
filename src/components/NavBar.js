import Link from "next/link";

export function NavBar() {
    return <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/"
        >
            Home
        </Link>
        <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/about-us"
        >
            About Us
        </Link>
        <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/games"
        >
            Games
        </Link>
        <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/teams"
        >
            Teams
        </Link>
    </nav>;
}
