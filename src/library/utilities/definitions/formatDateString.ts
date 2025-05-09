/**
 * @deprecated use utilities/formatDate instead
 */
export function formatDateString(dateString: string) {
	return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "UTC",
	});
}
