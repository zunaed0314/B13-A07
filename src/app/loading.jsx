import React from "react";
import { Metadata } from 'next';

const Loading = () => {
	return (
		<div className="flex min-h-screen min-w-screen items-center justify-center">
			<span className="loading loading-bars loading-xl text-green-900"></span>
		</div>
	);
};

export default Loading;
