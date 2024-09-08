import aspectRatio from '@tailwindcss/aspect-ratio';
import { type Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'selector',
	plugins: [aspectRatio],
} satisfies Config;
