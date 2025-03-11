import Image from "next/image";

import StyledLink from "../StyledLink";
import chewingGumCoverArt from "./chewing-gum-dan-edwards-ft-rowan.webp";

const streamingLinks: { href: string; text: string }[] = [
	{
		href: "https://open.spotify.com/track/50YcPkKMatC6glLwmiGzYc?si=2fc01b817b564c50",
		text: "Spotify",
	},
	{
		href: "https://music.apple.com/us/album/chewing-gum-feat-rowan/1780417240",
		text: "Apple Music",
	},
	{
		href: "https://music.amazon.co.uk/albums/B0DNGDF2CK",
		text: "Amazon Music",
	},
	{
		href: "https://music.youtube.com/watch?v=IFKI7zrKg_M&si=0nI5uFPUPvboamZL",
		text: "YouTube Music",
	},
	{ href: "https://youtu.be/h3dxmI7mV-E", text: "YouTube" },
	{ href: "https://deezer.page.link/Vqiu94jBMCgBWSy3A", text: "Deezer" },
];

export default function SongAdvert() {
	return (
		<div className="mt-12 mb-24 md:mb-6 md:p-3 w-full flex flex-col md:flex-row justify-between items-start gap-x-8 bg-purple-50 rounded-xl transition-all duration-300">
			<Image
				src={chewingGumCoverArt}
				alt="Stream Chewing Gum - Dan Edwards (ft. rowan) on Spotify"
				className="rounded-lg w-full md:w-64 shrink-0 mb-4 md:mb-0"
				sizes="400px"
				placeholder="blur"
			/>
			<div className="w-full">
				<h2 className="mb-1 text-xl font-medium leading-tight">
					Check out my latest music release
				</h2>
				<p className="mb-4 text-neutral-600 dark:text-neutral-200 max-w-prose leading-normal">
					Chewing Gum - Dan Edwards (ft. rowan) is streaming everywhere now.
				</p>
				<div className="w-full grid grid-cols-2 gap-4 md:gap-2 auto-rows-max">
					{streamingLinks.map((link) => (
						<StyledLink key={link.href} href={link.href}>
							{link.text}
						</StyledLink>
					))}
				</div>
			</div>
		</div>
	);
}
