import { ArticleLayout } from '@/components/ArticleLayout';
import Content from '@/components/Content';
import { type IArticle } from '@/library/articles';

export const article: IArticle = {
	writer: `Dan Edwards`,
	date: '2024-06-24',
	title: `Creating a Complex React Root | Order and Dependencies`,
	description: `Learn how to set up a complex React root with multiple providers, ensuring robust and maintainable applications. Understand the order and dependencies for a comprehensive React setup.`,
	keywords: `complex react root, react setup, multiple providers, react dependencies, react order, redux, apollo provider, intlprovider, themeprovider, react-helmet, react-router, persistgate, react front-end, javascript, web development`,
	tags: 'React, React Router, React Helmet',
	featuredImage: 'react',
};

export const metadata = {
	title: article.title,
	description: article.description,
};

export default function Article() {
	return (
		<ArticleLayout article={article}>
			<Content.Paragraph>
				When creating a complex React root, it's crucial to understand the
				dependencies and order of the various providers and libraries being
				used. This article will walk you through setting up a comprehensive
				React application using multiple providers, ensuring that your
				application is both robust and maintainable.
			</Content.Paragraph>

			<Content.Heading2>Code Overview</Content.Heading2>

			<Content.Paragraph>
				Let's look at the oddly shaped code for creating a complex React
				root:
			</Content.Paragraph>

			<Content.CodeBlock>
				{`// index.js

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

render();`}
			</Content.CodeBlock>

			<Content.Heading2>Order and Dependencies</Content.Heading2>

			<Content.Heading3>React.StrictMode</Content.Heading3>
			<Content.UnorderedList>
				<Content.ListItem>
					<strong>Purpose</strong>: It helps to highlight potential
					problems in an application, such as errors, deprecated APIs, side
					effects, and unused variables.
				</Content.ListItem>
				<Content.ListItem>
					<strong>Order Explanation</strong>: This is wrapped around the
					entire application to ensure best practices are followed
					throughout the development phase.
				</Content.ListItem>
			</Content.UnorderedList>

			<Content.Heading3>HelmetProvider</Content.Heading3>
			<Content.UnorderedList>
				<Content.ListItem>
					<strong>Purpose</strong>: Manages changes to the document head,
					like title and meta tags. Remember to use{' '}
					<Content.InlineCode>react-helmet-async</Content.InlineCode>, as{' '}
					<Content.InlineCode>react-helmet</Content.InlineCode> is
					depreciated.
				</Content.ListItem>
				<Content.ListItem>
					<strong>Order Explanation</strong>: Placed at a high level to
					ensure any changes to the document head are managed before
					rendering other components.
				</Content.ListItem>
			</Content.UnorderedList>

			<Content.Heading3>ApolloProvider</Content.Heading3>
			<Content.UnorderedList>
				<Content.ListItem>
					<strong>Purpose</strong>: Integrates Apollo Client for GraphQL
					data management.
				</Content.ListItem>
				<Content.ListItem>
					<strong>Order Explanation</strong>: Placed early to ensure
					GraphQL data is available to child components that might need it.
				</Content.ListItem>
			</Content.UnorderedList>

			<Content.Heading3>IntlProvider</Content.Heading3>
			<Content.UnorderedList>
				<Content.ListItem>
					<strong>Purpose</strong>: Provides internationalization support,
					allowing the app to handle multiple languages.
				</Content.ListItem>
				<Content.ListItem>
					<strong>Order Explanation</strong>: Ensures that
					internationalization is configured before any themed or
					Redux-managed content is rendered, as some components may rely on
					translated strings.
				</Content.ListItem>
			</Content.UnorderedList>

			<Content.Heading3>ThemeProvider</Content.Heading3>
			<Content.UnorderedList>
				<Content.ListItem>
					<strong>Purpose</strong>: Provides theming capabilities, such as
					dark/light mode.
				</Content.ListItem>
				<Content.ListItem>
					<strong>Order Explanation</strong>: Ensures that theming is
					applied before any styled-components are rendered.
				</Content.ListItem>
			</Content.UnorderedList>

			<Content.Heading3>Provider (Redux)</Content.Heading3>
			<Content.UnorderedList>
				<Content.ListItem>
					<strong>Purpose</strong>: Integrates Redux for state management.
				</Content.ListItem>
				<Content.ListItem>
					<strong>Order Explanation</strong>: Configured before PersistGate
					to ensure the Redux store is available for state management
					throughout the app.
				</Content.ListItem>
			</Content.UnorderedList>

			<Content.Heading3>PersistGate</Content.Heading3>
			<Content.UnorderedList>
				<Content.ListItem>
					<strong>Purpose</strong>: Delays the rendering of the app's UI
					until the persisted state has been retrieved and saved to Redux.
				</Content.ListItem>
				<Content.ListItem>
					<strong>Order Explanation</strong>: Ensures the app's UI is
					rendered only after the persisted state has been rehydrated.
				</Content.ListItem>
			</Content.UnorderedList>

			<Content.Heading3>RouterProvider</Content.Heading3>
			<Content.UnorderedList>
				<Content.ListItem>
					<strong>Purpose</strong>: Integrates routing capabilities using
					React Router.
				</Content.ListItem>
				<Content.ListItem>
					<strong>Order Explanation</strong>: Configured last among the
					providers to ensure all routing logic is applied, allowing the
					app to manage navigation correctly.
				</Content.ListItem>
			</Content.UnorderedList>

			<Content.Heading3>App Component</Content.Heading3>
			<Content.UnorderedList>
				<Content.ListItem>
					<strong>Purpose</strong>: The root component of the application
					where all other components are nested.
				</Content.ListItem>
				<Content.ListItem>
					<strong>Order Explanation</strong>: Finally, the{' '}
					<Content.InlineCode>App</Content.InlineCode> component is
					rendered, leveraging all the configured providers to ensure a
					cohesive and well-managed application state.
				</Content.ListItem>
			</Content.UnorderedList>

			<Content.Paragraph>
				By following this order, each provider is correctly set up with its
				necessary dependencies, ensuring that the application runs properly.
			</Content.Paragraph>
		</ArticleLayout>
	);
}
