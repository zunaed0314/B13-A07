"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Roboto, Merriweather } from "next/font/google";
import Image from "next/image";
import { ChartLine, Clock3, House } from "lucide-react";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});

const merriweather = Merriweather({
	weight: ["400", "700"],
	subsets: ["latin"],
});

const Navbar = () => {
	const pathName = usePathname();

	return (
		<div>
			<nav className="bg-base-100 shadow-sm fixed top-0 w-full z-50 px-8">
				<div className="navbar container mx-auto">
					<div className="flex-1">
						<Link href="/" className="">
							{/* <div className="flex gap-0">
								<span className="text-3xl font-bold text-black">Keen</span>
								<span className="text-3xl text-black">Keeper</span>
							</div> */}
							<Image
								src="/logo.png"
								alt="Logo"
								width={0}
								height={0}
								sizes="100vw"
								className="w-auto h-8" // Set height to 48px, width adjusts automatically
							/>
						</Link>
					</div>
					<div className="flex-none">
						<ul className="menu menu-horizontal px-1 gap-4">
							<li>
								<Link
									href="/"
									className={
										pathName === "/" ? "bg-green-900 text-white" : "text-black"
									}
								>
									<House className="w-5 h-5" />
									<span>Home</span>
								</Link>
							</li>
							<li>
								<Link
									href="/timeline"
									className={
										pathName === "/timeline"
											? "bg-green-900 text-white"
											: "text-black"
									}
								>
									<Clock3 className="w-5 h-5" />
									<span>Timeline</span>
								</Link>
							</li>
							<li>
								<Link
									href="/stats"
									className={
										pathName === "/stats"
											? "bg-green-900 text-white"
											: "text-black"
									}
								>
									<ChartLine className='w-5 h-5'/>
									<span>Stats</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
