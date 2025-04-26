import StyledLink from '@/components/StyledLink'
import { september, tags } from '@/library/constants'
import { createDate } from '@/library/utilities'
import type { Article } from '@/types'
import featuredImage from '@public/images/resolving-mdx-vs-code-sidebar-keyboard-shortcut-conflict.png'

export const resolvingMdxVsCodeSidebarKeyboardShortcutConflict: Article = {
	publishedAt: createDate(15, september, 2024),
	displayTitle: 'Resolving MDX and VS Code sidebar shortcut conflicts',
	metaTitle: 'Resolving MDX and VS Code sidebar shortcut conflicts.',
	metaDescription: `Learn how to fix the conflict between the MDX extension and VS Code's default sidebar shortcut.`,
	tags: [tags.mdx, tags.vsCode],
	featuredImage,
	slug: 'resolving-mdx-vs-code-sidebar-keyboard-shortcut-conflict',
	content: (
		<>
			<p>
				{`If you're using the `}
				<StyledLink
					href="https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx"
					ariaLabel="MDX extension, Visual studio Code marketplace"
				>
					MDX extension
				</StyledLink>
				{` in Visual Studio Code, you might have noticed that it overrides the default 'Hide Sidebar' shortcut (`}
				<code>Command B</code> on a Mac or <code>Control B</code>
				{` on Windows/Linux).
        This can be frustrating if you frequently use this shortcut to toggle the sidebar. Here's a quick
        guide on how to resolve this conflict.`}
			</p>

			<h2>Steps to Fix the Shortcut Conflict</h2>

			<ol>
				<li>
					Open the Command Palette:
					<ul>
						<li>
							On a Mac: <code>Shift Command P</code>
						</li>
						<li>
							On Windows/Linux: <code>Shift Control P</code>
						</li>
					</ul>
				</li>
				<li>
					{'Search for '}
					<strong>Preferences: Open Keyboard Shortcuts</strong>
					{`' in the Command Palette.`}
				</li>
				<li>
					In the search bar of the Keyboard Shortcuts page, type <code>Command B</code> (or <code>Control B</code> for Windows/Linux).
				</li>
				<li>
					{'Find the MDX '}
					<strong>Toggle Bold</strong>
					{' shortcut in the list.'}
				</li>
				<li>
					To remove the conflicting shortcut:
					<ul>
						<li>Right-click on the MDX Toggle Bold shortcut</li>
						<li>
							{'Select '}
							<strong>Remove Keybinding</strong>
						</li>
					</ul>
					Alternatively, to reassign the shortcut:
					<ul>
						<li>Right-click on the pencil icon next to the shortcut</li>
						<li>Assign a different key combination</li>
					</ul>
				</li>
				<li>You may need to restart VS Code for the changes to take effect.</li>
			</ol>

			<p>
				{`Following these steps, you can use the default 'Hide Sidebar' shortcut without conflicts from the MDX
        extension.`}
			</p>

			<p>
				{`Customizing your development environment to suit your workflow is crucial for productive coding. Don't hesitate to adjust shortcuts and settings to make your coding experience more efficient and enjoyable.`}
			</p>

			<h3>A Note on MDX</h3>

			<p>
				Last week, I discovered{' '}
				<StyledLink href="https://mdxjs.com/" ariaLabel="MDX website">
					MDX
				</StyledLink>
				{` and thought it was the best thing ever, but now I'm convinced it's completely pointless.`}
			</p>

			<p>
				{`It's too complicated for non-technical people, defeating its purpose
				of simplifying content creation. However, despite its complexity, it
				doesn't support type checking by default, which is a significant
				drawback for maintaining code quality and catching errors early, and
				enabling type checking is complicated, requiring a lot of
				error-prone configuration.`}
			</p>

			<p>
				Sticking to <code>.TSX</code> is a more practical and efficient choice for most projects, especially those prioritizing type safety
				and clear separation of concerns.
			</p>
		</>
	),
}
