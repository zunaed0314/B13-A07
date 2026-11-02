"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Roboto, Merriweather } from "next/font/google";
import Image from "next/image";
import { ChartLine, Clock3, House, Menu } from "lucide-react";

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
			<nav className="bg-base-100 fixed top-0 z-50 w-full shadow-sm">
				<div className="navbar w-full px-2 md:px-5 lg:px-8">
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
								className="h-8 w-auto"
							/>
						</Link>
					</div>
					<div className="flex-none">
						<div className="dropdown dropdown-end block md:hidden">
							<div tabIndex={0} role="button" className="btn m-1">
								<Menu />
							</div>
							<ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
								<li>
									<Link href="/" className={pathName === "/" ? "bg-green-900 text-white" : "text-black"}>
										<House className="h-5 w-5" />
										<span>Home</span>
									</Link>
								</li>
								<li>
									<Link href="/timeline" className={pathName === "/timeline" ? "bg-green-900 text-white" : "text-black"}>
										<Clock3 className="h-5 w-5" />
										<span>Timeline</span>
									</Link>
								</li>
								<li>
									<Link href="/stats" className={pathName === "/stats" ? "bg-green-900 text-white" : "text-black"}>
										<ChartLine className="h-5 w-5" />
										<span>Stats</span>
									</Link>
								</li>
							</ul>
						</div>
						<ul className="menu menu-horizontal gap-4 px-1 hidden md:flex">
							<li>
								<Link href="/" className={pathName === "/" ? "bg-green-900 text-white" : "text-black"}>
									<House className="h-5 w-5" />
									<span>Home</span>
								</Link>
							</li>
							<li>
								<Link href="/timeline" className={pathName === "/timeline" ? "bg-green-900 text-white" : "text-black"}>
									<Clock3 className="h-5 w-5" />
									<span>Timeline</span>
								</Link>
							</li>
							<li>
								<Link href="/stats" className={pathName === "/stats" ? "bg-green-900 text-white" : "text-black"}>
									<ChartLine className="h-5 w-5" />
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
