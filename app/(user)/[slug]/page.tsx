import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { RichTextComponents } from '../../(admin)/RichTextComponents';
import { client } from '../../../lib/sanity.client';
import urlFor from '../../../lib/urlFor';

type Props = {
	params: {
		slug: string;
	};
};

async function Post({ params: { slug } }: Props) {
	const query = groq`
      *[_type=='post' && slug.current == $slug][0]
      {
         ...,
         author->,
         categories[]->
      }
   `;

	const post: Post = await client.fetch(query, { slug });

	return (
		<article className="min-h-screen px-10 pt-40 pb-40 max-w-7xl mx-auto">
			<section className="space-y-2 mb-10 border border-[#16A34A] text-black">
				<div className="relative min-h-56 flex flex-col md:flex-row justify-between">
					<div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
						<Image
							className="object-cover object-center pt-2 mx-auto"
							src={urlFor(post.mainImage).url()}
							alt={post.author.name}
							fill
						/>
					</div>

					<section className="p-5 bg-[#16A34A]/40 w-full">
						<div className="flex flex-col md:flex-row justify-between gap-y-5">
							<div>
								<h1 className="text-4xl font-extrabold" key={post.title}>
									{post.title}
								</h1>

								<p key={post._createdAt}>
									{new Date(post._createdAt).toLocaleDateString('en-US', {
										day: 'numeric',
										month: 'long',
										year: 'numeric',
									})}
								</p>
							</div>

							<div className="flex items-center justify-between space-x-2">
								<div className="w-64 flex items-center justify-end">
									<Image
										className="rounded-full"
										src={urlFor(post.author.image).url()}
										alt={post.author.name}
										height={40}
										width={40}
									/>
									<h3 className="text-lg font-bold">{post.author.name}</h3>
								</div>
							</div>
						</div>

						<div>
							<h2 className="italic pt-10" key={post.description}>
								{post.description}
							</h2>
							<div className="flex items-center justify-end mt-auto space-x-2">
								{post.categories.map((category) => (
									<p
										className="bg-[#16A34A] text-black px-5 py-1 rounded-full text-sm font-semibold mt-4"
										key={category.title}
									>
										{category.title}
									</p>
								))}
							</div>
						</div>
					</section>
				</div>
			</section>

			<PortableText value={post.body} components={RichTextComponents} />
		</article>
	);
}

export default Post;
