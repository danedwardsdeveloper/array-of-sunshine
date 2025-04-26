import forms from '@tailwindcss/forms'
import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	plugins: [forms], // Required by the checkboxes article
} satisfies Config
