export default function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
	return (
		<>
			{paragraphs.map((paragraph) => {
				<p key={paragraph}>{paragraph}</p>;
			})}
		</>
	);
}
