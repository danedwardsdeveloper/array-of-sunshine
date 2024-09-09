---
title: Creating a Complex React Root | Order and Dependencies
date: June 24, 2024
writer: Dan Edwards
tags: React, JavaScript, Front-End
metadescription: Learn how to set up a complex React root with multiple providers, ensuring robust and maintainable applications. Understand the order and dependencies for a comprehensive React setup.
keywords: complex react root, react setup, multiple providers, react dependencies, react order, redux, apollo provider, intlprovider, themeprovider, react-helmet, react-router, persistgate, react front-end, javascript, web development
---

When creating a complex React root, it's crucial to understand the dependencies and order of the various providers and libraries being used. This article will walk you through setting up a comprehensive React application using multiple providers, ensuring that your application is both robust and maintainable.

## Code Overview

Let's look at the oddly shaped code for creating a complex React root:

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { ApolloProvider } from '@apollo/client';
import { client } from './apolloClient';
import { store, persistor } from './store';
import { router } from './router';
import { theme } from './theme';
import { messages } from './messages';
import App from './App';

const render = () => {
	const root = ReactDOM.createRoot(document.getElementById('root'));

	root.render(
		<React.StrictMode>
			<HelmetProvider>
				<ApolloProvider client={client}>
					<IntlProvider locale="en" messages={messages}>
						<ThemeProvider theme={theme}>
							<Provider store={store}>
								<PersistGate loading={null} persistor={persistor}>
									<RouterProvider router={router}>
										<App />
									</RouterProvider>
								</PersistGate>
							</Provider>
						</ThemeProvider>
					</IntlProvider>
				</ApolloProvider>
			</HelmetProvider>
		</React.StrictMode>
	);
};

render();
```

## Order and Dependencies

### React.StrictMode

-  **Purpose**: It helps to highlight potential problems in an application, such as errors, deprecated APIs, side effects, and unused variables.
-  **Order Explanation**: This is wrapped around the entire application to ensure best practices are followed throughout the development phase.

### HelmetProvider

-  **Purpose**: Manages changes to the document head, like title and meta tags. Remember to use `react-helmet-async`, as `react-helmet` is depreciated.
-  **Order Explanation**: Placed at a high level to ensure any changes to the document head are managed before rendering other components.

### ApolloProvider

-  **Purpose**: Integrates Apollo Client for GraphQL data management.
-  **Order Explanation**: Placed early to ensure GraphQL data is available to child components that might need it.

### IntlProvider

-  **Purpose**: Provides internationalization support, allowing the app to handle multiple languages.
-  **Order Explanation**: Ensures that internationalization is configured before any themed or Redux-managed content is rendered, as some components may rely on translated strings.

### ThemeProvider

-  **Purpose**: Provides theming capabilities, such as dark/light mode.
-  **Order Explanation**: Ensures that theming is applied before any styled-components are rendered.

### Provider (Redux)

-  **Purpose**: Integrates Redux for state management.
-  **Order Explanation**: Configured before PersistGate to ensure the Redux store is available for state management throughout the app.

### PersistGate

-  **Purpose**: Delays the rendering of the app's UI until the persisted state has been retrieved and saved to Redux.
-  **Order Explanation**: Ensures the app's UI is rendered only after the persisted state has been rehydrated.

### RouterProvider

-  **Purpose**: Integrates routing capabilities using React Router.
-  **Order Explanation**: Configured last among the providers to ensure all routing logic is applied, allowing the app to manage navigation correctly.

### App Component

-  **Purpose**: The root component of the application where all other components are nested.
-  **Order Explanation**: Finally, the `App` component is rendered, leveraging all the configured providers to ensure a cohesive and well-managed application state.

By following this order, each provider is correctly set up with its necessary dependencies, ensuring that the application runs properly.
