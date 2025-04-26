export function formatDate(date: Date): string {
	return new Intl.DateTimeFormat("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(new Date(date));
}

export function formatFullDate(date: Date): string {
	const dayOfWeek = new Intl.DateTimeFormat("en-GB", {
		weekday: "long",
	}).format(new Date(date));

	const theRest = formatDate(date);

	return `${dayOfWeek}, ${theRest}`;
}
