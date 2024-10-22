import { ReactNode } from 'react';
import clsx from 'clsx';

interface CallOutProps extends React.HTMLAttributes<HTMLParagraphElement> {
	colour?: 'green' | 'red' | 'yellow' | 'blue';
	children: ReactNode;
	disableEmoji?: boolean;
}

const colourMap = {
	blue: 'bg-blue-300 border-blue-200 text-blue-800',
	green: 'bg-green-300 border-green-200 border-green-300 text-green-800',
	yellow: 'bg-yellow-200 border-yellow-100 border-yellow-300 text-yellow-800',
	red: 'bg-red-300 border-red-200 border-red-300 text-red-800',
};

const emojiMap = {
	blue: 'ℹ️',
	green: '✅',
	yellow: '⚠️',
	red: '⛔️',
};

export default function CallOut({
	colour = 'blue',
	children,
	disableEmoji,
}: CallOutProps) {
	return (
		<div
			className={clsx(
				'my-4 p-4',
				'rounded-lg border-2',
				'flex gap-2',
				colourMap[colour]
			)}
		>
			{!disableEmoji && (
				<span
					className="text-xl"
					role="img"
					aria-label={`${colour} callout icon`}
				>
					{emojiMap[colour]}
				</span>
			)}
			<p className="pt-[1px]">{children}</p>
		</div>
	);
}
