import { Metadata } from 'next';

import { article } from './data';
import { generateArticleMetadata } from '@/library/metadata';
import { ArticleLayout } from '@/components/ArticleLayout';
import { Heading2, Heading3 } from '@/components/Headings';
import { UnorderedList, ListItem } from '@/components/Lists';
import Paragraph from '@/components/Paragraph';
import { CodeBlock, InlineCode } from '@/components/Code';

export const generateMetadata = (): Metadata => {
	return generateArticleMetadata(article);
};

export default function Page() {
	return (
		<ArticleLayout article={article}>
			<Paragraph>
				When creating a complex React root, it's crucial to understand the
				dependencies and order of the various providers and libraries being
				used. This articleData will walk you through setting up a
				comprehensive React application using multiple providers, ensuring
				that your application is both robust and maintainable.
			</Paragraph>

			<Heading2>Code Overview</Heading2>

			<Paragraph>
				Let's look at the oddly shaped code for creating a complex React
				root:
			</Paragraph>

			<CodeBlock language="javascript" fileName="index.js">
				{`
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
			</CodeBlock>

			<Heading2>Order and Dependencies</Heading2>

			<Heading3>React.StrictMode</Heading3>
			<UnorderedList>
				<ListItem>
					<strong>Purpose</strong>: It helps to highlight potential
					problems in an application, such as errors, deprecated APIs, side
					effects, and unused variables.
				</ListItem>
				<ListItem>
					<strong>Order Explanation</strong>: This is wrapped around the
					entire application to ensure best practices are followed
					throughout the development phase.
				</ListItem>
			</UnorderedList>

			<Heading3>HelmetProvider</Heading3>
			<UnorderedList>
				<ListItem>
					<strong>Purpose</strong>: Manages changes to the document head,
					like title and meta tags. Remember to use{' '}
					<InlineCode>react-helmet-async</InlineCode>, as{' '}
					<InlineCode>react-helmet</InlineCode> is depreciated.
				</ListItem>
				<ListItem>
					<strong>Order Explanation</strong>: Placed at a high level to
					ensure any changes to the document head are managed before
					rendering other components.
				</ListItem>
			</UnorderedList>

			<Heading3>ApolloProvider</Heading3>
			<UnorderedList>
				<ListItem>
					<strong>Purpose</strong>: Integrates Apollo Client for GraphQL
					data management.
				</ListItem>
				<ListItem>
					<strong>Order Explanation</strong>: Placed early to ensure
					GraphQL data is available to child components that might need it.
				</ListItem>
			</UnorderedList>

			<Heading3>IntlProvider</Heading3>
			<UnorderedList>
				<ListItem>
					<strong>Purpose</strong>: Provides internationalization support,
					allowing the app to handle multiple languages.
				</ListItem>
				<ListItem>
					<strong>Order Explanation</strong>: Ensures that
					internationalization is configured before any themed or
					Redux-managed content is rendered, as some components may rely on
					translated strings.
				</ListItem>
			</UnorderedList>

			<Heading3>ThemeProvider</Heading3>
			<UnorderedList>
				<ListItem>
					<strong>Purpose</strong>: Provides theming capabilities, such as
					dark/light mode.
				</ListItem>
				<ListItem>
					<strong>Order Explanation</strong>: Ensures that theming is
					applied before any styled-components are rendered.
				</ListItem>
			</UnorderedList>

			<Heading3>Provider (Redux)</Heading3>
			<UnorderedList>
				<ListItem>
					<strong>Purpose</strong>: Integrates Redux for state management.
				</ListItem>
				<ListItem>
					<strong>Order Explanation</strong>: Configured before PersistGate
					to ensure the Redux store is available for state management
					throughout the app.
				</ListItem>
			</UnorderedList>

			<Heading3>PersistGate</Heading3>
			<UnorderedList>
				<ListItem>
					<strong>Purpose</strong>: Delays the rendering of the app's UI
					until the persisted state has been retrieved and saved to Redux.
				</ListItem>
				<ListItem>
					<strong>Order Explanation</strong>: Ensures the app's UI is
					rendered only after the persisted state has been rehydrated.
				</ListItem>
			</UnorderedList>

			<Heading3>RouterProvider</Heading3>
			<UnorderedList>
				<ListItem>
					<strong>Purpose</strong>: Integrates routing capabilities using
					React Router.
				</ListItem>
				<ListItem>
					<strong>Order Explanation</strong>: Configured last among the
					providers to ensure all routing logic is applied, allowing the
					app to manage navigation correctly.
				</ListItem>
			</UnorderedList>

			<Heading3>App Component</Heading3>
			<UnorderedList>
				<ListItem>
					<strong>Purpose</strong>: The root component of the application
					where all other components are nested.
				</ListItem>
				<ListItem>
					<strong>Order Explanation</strong>: Finally, the{' '}
					<InlineCode>App</InlineCode> component is rendered, leveraging
					all the configured providers to ensure a cohesive and
					well-managed application state.
				</ListItem>
			</UnorderedList>

			<Paragraph>
				By following this order, each provider is correctly set up with its
				necessary dependencies, ensuring that the application runs properly.
			</Paragraph>
		</ArticleLayout>
	);
}
