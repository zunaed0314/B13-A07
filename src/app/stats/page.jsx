"use client";
import React, { useContext } from "react";
import { CheckInContext } from "../components/CheckInProvider/CheckInProvider";
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector } from "recharts";

const StatsPage = () => {
	const { entries } = useContext(CheckInContext);

	const calls = entries.filter((e) => e.medium === "Call");
	const texts = entries.filter((e) => e.medium === "Text");
	const videos = entries.filter((e) => e.medium === "Video");

	const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];

	const pieDetails = [
		{ medium: "Calls", length: calls.length },
		{ medium: "Texts", length: texts.length },
		{ medium: "Videos", length: videos.length },
	];

	const data = pieDetails.map((entry, index) => ({
		medium: entry.medium,
		length: entry.length,
		fill: COLORS[index % COLORS.length], // ← add fill directly
		fullLength: Math.max(...pieDetails.map((b) => b.length)),
	}));

	return (
		<div className="container mx-auto mt-30 space-y-5 px-10 md:px-35">
			<h1 className="text-xl md:text-3xl text-center md:text-start font-bold">Friendship analytics</h1>
			<div className="bg-white shadow-md p-5">
                <p>By interaction type</p>
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
			</div>
		</div>
	);
};

export default StatsPage;
