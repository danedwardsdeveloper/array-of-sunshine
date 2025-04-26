import chalk from 'chalk'

const logger = {
	debug: (...args: unknown[]): void => console.debug(chalk.magenta('\n[DEBUG]', ...args)),
	info: (...args: unknown[]): void => console.info(chalk.blue('\n[INFO]', ...args)),
	warn: (...args: unknown[]): void => console.warn(chalk.yellow('\n[WARN]', ...args)),
	error: (...args: unknown[]): void => console.error(chalk.red('\n[ERROR]'), ...args),
	errorUnknown: (error: unknown, label = 'Unknown error: '): void =>
		console.error(chalk.red('\n[ERROR]', label, error instanceof Error ? error.message : JSON.stringify(error))),
} as const

export default logger
