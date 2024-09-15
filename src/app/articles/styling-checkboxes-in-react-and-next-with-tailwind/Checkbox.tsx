'use client';
import { ReactNode, useState, useEffect } from 'react';
import clsx from 'clsx';

interface CheckboxProps {
	colour: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet';
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	children: ReactNode;
}

const colourMap = {
	red: 'text-red-500 focus:ring-red-400 hover:bg-red-200',
	orange: 'text-orange-500 focus:ring-orange-400 hover:bg-orange-200',
	yellow: 'text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200',
	green: 'text-green-500 focus:ring-green-400 hover:bg-green-200',
	blue: 'text-blue-500 focus:ring-blue-400 hover:bg-blue-200',
	indigo: 'text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200',
	violet: 'text-violet-500 focus:ring-violet-400 hover:bg-violet-200',
};

export default function Checkbox({
	colour,
	checked = false,
	onChange,
	children,
}: CheckboxProps) {
	const [isChecked, setIsChecked] = useState(checked);

	useEffect(() => {
		setIsChecked(checked);
	}, [checked]);

	const handleChange = () => {
		const newChecked = !isChecked;
		setIsChecked(newChecked);
		if (onChange) {
			onChange(newChecked);
		}
	};

	return (
		<div className="flex items-center me-2">
			<input
				type="checkbox"
				id={`checkbox-${children}`}
				checked={isChecked}
				onChange={handleChange}
				className={clsx(
					'w-6 h-6',
					'bg-gray-100',
					'border-gray-300',
					'rounded',
					'focus:ring-2',
					'transition duration-150 ease-in-out',
					colourMap[colour]
				)}
			/>
			<label className="text-sm ms-2" htmlFor={`checkbox-${children}`}>
				{children}
			</label>
		</div>
	);
}
