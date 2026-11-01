import { Plus } from "lucide-react";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center mt-30 gap-4">
			<h1 className="text-3xl font-bold text-cyan-950">
				Friends To Keep Close in your life
			</h1>
			<p className='text-center text-gray-500'>
				Your personal shelf of meaningful connections. Browse, tend, and nurture{" "}
				<br />
				the relationships that matter most.
			</p>
			<button className='btn bg-green-900 text-white rounded-lg'><Plus className="size-5"/>Add Friend</button>
		</div>
	);
}
