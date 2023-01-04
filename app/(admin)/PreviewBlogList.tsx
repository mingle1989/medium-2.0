'use client';
import Banner from '../(user)/Banner';
import BlogList from '../(user)/BlogList';
import { usePreview } from '../../lib/sanity.preview';

type Props = {
	query: string;
};

export default function PreviewBlogList({ query }: Props) {
	const posts = usePreview(null, query);
	return (
		<div className="max-w-7xl mx-auto">
			<Banner />
			<BlogList posts={posts} />
		</div>
	);
}
