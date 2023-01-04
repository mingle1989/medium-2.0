import { groq } from 'next-sanity';
import { previewData } from 'next/headers';
import PreviewBlogList from '../(admin)/PreviewBlogList';
import PreviewSuspense from '../(admin)/PreviewSuspense';
import { client } from '../../lib/sanity.client';
import Banner from './Banner';
import BlogList from './BlogList';

const query = groq`
	*[_type=='post'] {
		...,
		author->,
		categories[]->
	} | order(_createdAt desc)
`;

export default async function Home() {
	if (previewData()) {
		return (
			<PreviewSuspense
				fallback={
					<div role="status">
						<p className="text-center text-lg animate-pulse text-[#1f5673]">
							Loading Preview Data...
						</p>
					</div>
				}
			>
				<PreviewBlogList query={query} />
			</PreviewSuspense>
		);
	}

	const posts = await client.fetch(query);
	return (
		<div className="max-w-7xl mx-auto">
			{/* Banner */}
			<Banner />
			{/* Blog Posts */}
			<BlogList posts={posts} />
		</div>
	);
}
