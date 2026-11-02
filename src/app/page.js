import { Plus } from "lucide-react";
// import friends from "../../public/data.json";
import FriendCard from "./components/FriendCard/FriendCard";
import Link from "next/link";
import Footer from "./components/Footer/Footer";

export const metadata = {
	title: "Home | KeenKeeper",
	description: "Your personal shelf of meaningful connections.",
};
export default async function Home() {
	const res = await fetch("https://keen-keeper-ochre.vercel.app/data.json");
	const friends = await res.json();
	// const friendsPromise = fetch("/data.json").then((res) => res.json());
	return (
		<div className="mt-30 flex flex-col items-center justify-center gap-10 px-5 md:px-10 lg:px-35">
			<h1 className="text-center text-4xl md:text-5xl font-bold text-cyan-950  px-5 md:px-25 lg:px-15">Friends To Keep Close in your life</h1>
			<p className="text-center text-gray-500">
				Your personal shelf of meaningful connections. Browse, tend, and nurture <br />
				the relationships that matter most.
			</p>
			<button className="btn rounded-lg bg-green-900 text-white">
				<Plus className="size-5" />
				Add Friend
			</button>
			<div className="container mx-auto grid grid-cols-2 gap-6 lg:grid-cols-4">
				<div className="gap-2 md:gap-3 lg:gap-4 px-0 bg-base-100 transform-transition flex flex-col items-center justify-center border border-gray-100  py-5 shadow-md duration-300 hover:scale-102">
					<p className="text-4xl font-semibold text-green-900">10</p>
					<p className='text-center'>Friends</p>
				</div>
				<div className="gap-2 md:gap-3 lg:gap-4 px-5 bg-base-100 transform-transition flex flex-col items-center justify-center border border-gray-100 px-10 py-5 shadow-md duration-300 hover:scale-102">
					<p className="text-4xl font-semibold text-green-900">3</p>
					<p className='text-center'>On-Track</p>
				</div>
				<div className="gap-2 md:gap-3 lg:gap-4 px-5 bg-base-100 transform-transition flex flex-col items-center justify-center border border-gray-100 px-10 py-5 shadow-md duration-300 hover:scale-102">
					<p className="text-4xl font-semibold text-green-900">6</p>
					<p className='text-center'>Need attention</p>
				</div>
				<div className="gap-2 md:gap-3 lg:gap-4 px-5 bg-base-100 transform-transition flex flex-col items-center justify-center border border-gray-100 px-10 py-5 shadow-md duration-300 hover:scale-102">
					<p className="text-4xl font-semibold text-green-900">12</p>
					<p className='text-center'>Interactions this month</p>
				</div>
			</div>
			<div className="container mx-auto mt-5 space-y-5 border-t border-gray-200 pt-10">
				<p className="text-3xl font-semibold text-black">Your Friends</p>
				<div className="mb-20 grid grid-cols-2 gap-5 md:grid-cols-3">
					{friends.map((friend) => (
						<Link href={`/${friend.id}`} key={friend.id} className="bg-base-100 block h-full">
							<FriendCard friend={friend}></FriendCard>
						</Link>
					))}
				</div>
			</div>
			{/* <Footer></Footer> */}
		</div>
	);
}
