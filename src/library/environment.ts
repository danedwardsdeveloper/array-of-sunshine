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
const isDevelopment = cleanedEnv.ENVIRONMENT === 'development';

const productionBaseURL = 'https://arrayofsunshine.co.uk';
const developmentBaseURL = 'http://localhost:3000';
const dynamicBaseURL = isProduction ? productionBaseURL : developmentBaseURL;

export const environment = {
	isProduction,
	isDevelopment,
	productionBaseURL,
	dynamicBaseURL,
} as const;

export const validateEnvironment = () => {
	cleanEnv(process.env, envConfig);
};
