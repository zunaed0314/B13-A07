import Link from "next/link";


export default function NotFound() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-4">
			<h2 className="text-4xl font-bold text-gray-800">404 - Not Found</h2>
			<p className="text-gray-500">Could not find the requested resource.</p>
			<Link href="/" className="btn btn-primary mt-4">
				Return Home
			</Link>
		</div>
	);
}
