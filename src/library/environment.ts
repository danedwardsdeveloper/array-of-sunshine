import { cleanEnv, makeValidator, url } from 'envalid';

const nonEmptyStr = makeValidator((value) => {
	if (value.trim() === '') throw new Error('Value cannot be an empty string');
	return value;
});

const envConfig = {
	ENVIRONMENT: nonEmptyStr({ choices: ['development', 'production'] }),
	// MAILCHIMP_URL: nonEmptyStr(url()),
	// MAILCHIMP_API_KEY: nonEmptyStr(),
};

const cleanedEnv = cleanEnv(process.env, envConfig);

const isProduction = cleanedEnv.ENVIRONMENT === 'production';
export const baseUrl: string = 'https://arrayofsunshine.co.uk';
// const baseUrl = isProduction
// 	? 'https://arrayofsunshine.co.uk'
// 	: 'http://localhost:3000';

export const environment = {
	...cleanedEnv,
	isProduction,
};

export const validateEnvironment = () => {
	cleanEnv(process.env, envConfig);
};
