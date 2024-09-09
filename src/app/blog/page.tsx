import { BlogPosts } from '@/components/Posts';

export const metadata = {
	title: 'Blog',
	description: 'Read my blog.',
};

export default function Page() {
	return (
		<section>
			<h1 className="font-semibold text-2xl mb-8 tracking-tighter">
				My Old Blog
			</h1>
			<BlogPosts />
		</section>
	);
}
