"use client";
import React, { useContext } from "react";
import { CheckInContext } from "../components/CheckInProvider/CheckInProvider";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

const StatsPage = () => {
	const { entries } = useContext(CheckInContext);

	const calls = entries.filter((e) => e.medium === "Call");
	const texts = entries.filter((e) => e.medium === "Text");
	const videos = entries.filter((e) => e.medium === "Video");

	const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

	const data = [
		{ medium: "Calls", length: calls.length, fill: COLORS[0] },
		{ medium: "Texts", length: texts.length, fill: COLORS[1] },
		{ medium: "Videos", length: videos.length, fill: COLORS[2] },
	];

	// Check if there are absolutely no entries
	const totalEntries = calls.length + texts.length + videos.length;

	return (
		<div className="container mx-auto mt-30 space-y-5 px-10 md:px-35">
			<h1 className="text-center text-xl font-bold md:text-start md:text-3xl">Friendship analytics</h1>

			<div className="rounded-lg bg-white p-5 shadow-md">
				<p className="mb-4 font-semibold">By interaction type</p>

				{/* CONDITIONAL RENDERING HERE */}
				{totalEntries === 0 ? (
					<div className="flex h-50 flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-gray-500">
						<p className="text-lg font-medium text-gray-600">No data yet</p>
						<p className="text-sm">Log a check-in with a friend to see your stats!</p>
					</div>
				) : (
					<ResponsiveContainer width="100%" height={300}>
						<PieChart>
							<Pie
								data={data}
								dataKey="length"
								nameKey="medium"
								cx="50%"
								cy="50%"
								outerRadius={120}
								innerRadius={70}
								label={({ medium, length }) => `${medium}: ${length}`}
							/>
							<Tooltip />
							<Legend />
						</PieChart>
					</ResponsiveContainer>
				)}
			</div>
		</div>
	);
};

export default StatsPage;
