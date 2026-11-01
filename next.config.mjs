/** @type {import('next').NextConfig} */
const nextConfig = {
	reactCompiler: true,
	images: {
    // https://i.pravatar.cc/150?img=1
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.pravatar.cc",
				port: "",
				pathname: "/**", // Allows all paths
				// Removed the "search" line completely
        
			},
		],
	},
	devIndicators: false,
	turbopack: {
		rules: {
			"*.css": {
				loaders: ["@tailwindcss/turbopack"],
				as: "*.css",
			},
		},
	},
};

export default nextConfig;
