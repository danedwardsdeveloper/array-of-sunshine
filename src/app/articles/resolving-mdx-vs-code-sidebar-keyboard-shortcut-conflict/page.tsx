import { Metadata } from 'next';

import { article } from './data';
import { generateArticleMetadata } from '@/library/metadata';
import { ArticleLayout } from '@/components/ArticleLayout';
import { InlineCode } from '@/components/Code';
import Paragraph from '@/components/Paragraph';
import { Heading2, Heading3 } from '@/components/Headings';
import { OrderedList, UnorderedList, ListItem } from '@/components/Lists';
import StyledLink from '@/components/StyledLink';

export const generateMetadata = (): Metadata => {
	return generateArticleMetadata(article);
};

export default function Page() {
	return (
		<ArticleLayout article={article}>
			<Paragraph>
				If you're using the{' '}
				<StyledLink
					href="https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx"
					ariaLabel="MDX extension, Visual studio Code marketplace"
				>
					MDX extension
				</StyledLink>{' '}
				in Visual Studio Code, you might have noticed that it overrides the
				default 'Hide Sidebar' shortcut (<InlineCode>Command B</InlineCode>{' '}
				on a Mac or <InlineCode>Control B</InlineCode> on Windows/Linux).
				This can be frustrating if you frequently use this shortcut to
				toggle the sidebar. Here's a quick guide on how to resolve this
				conflict.
			</Paragraph>

			<Heading2>Steps to Fix the Shortcut Conflict</Heading2>

			<OrderedList>
				<ListItem>
					Open the Command Palette:
					<UnorderedList>
						<ListItem>
							On a Mac: <InlineCode>Shift Command P</InlineCode>
						</ListItem>
						<ListItem>
							On Windows/Linux: <InlineCode>Shift Control P</InlineCode>
						</ListItem>
					</UnorderedList>
				</ListItem>
				<ListItem>
					Search for '<strong>Preferences: Open Keyboard Shortcuts</strong>
					'' in the Command Palette.
				</ListItem>
				<ListItem>
					In the search bar of the Keyboard Shortcuts page, type{' '}
					<InlineCode>Command B</InlineCode> (or{' '}
					<InlineCode>Control B</InlineCode> for Windows/Linux).
				</ListItem>
				<ListItem>
					Find the MDX '<strong>Toggle Bold</strong>' shortcut in the list.
				</ListItem>
				<ListItem>
					To remove the conflicting shortcut:
					<UnorderedList>
						<ListItem>
							Right-click on the MDX Toggle Bold shortcut
						</ListItem>
						<ListItem>
							Select '<strong>Remove Keybinding</strong>'
						</ListItem>
					</UnorderedList>
					Alternatively, to reassign the shortcut:
					<UnorderedList>
						<ListItem>
							Right-click on the pencil icon next to the shortcut
						</ListItem>
						<ListItem>Assign a different key combination</ListItem>
					</UnorderedList>
				</ListItem>
				<ListItem>
					You may need to restart VS Code for the changes to take effect.
				</ListItem>
			</OrderedList>

			<Paragraph>
				Following these steps, you can use the default 'Hide Sidebar'
				shortcut without conflicts from the MDX extension.
			</Paragraph>

			<Paragraph>
				Customizing your development environment to suit your workflow is
				crucial for productive coding. Don't hesitate to adjust shortcuts
				and settings to make your coding experience more efficient and
				enjoyable.
			</Paragraph>

			<Heading3>A Note on MDX</Heading3>

			<Paragraph>
				Last week, I discovered{' '}
				<StyledLink href="https://mdxjs.com/" ariaLabel="MDX website">
					MDX
				</StyledLink>{' '}
				and thought it was the best thing ever, but now I'm convinced it's
				completely pointless.
			</Paragraph>

			<Paragraph>
				It's too complicated for non-technical people, defeating its purpose
				of simplifying content creation. However, despite its complexity, it
				doesn't support type checking by default, which is a significant
				drawback for maintaining code quality and catching errors early, and
				enabling type checking is complicated, requiring a lot of
				error-prone configuration.
			</Paragraph>

			<Paragraph>
				Sticking to <InlineCode>.TSX</InlineCode> is a more practical and
				efficient choice for most projects, especially those prioritizing
				type safety and clear separation of concerns.
			</Paragraph>
		</ArticleLayout>
	);
}
