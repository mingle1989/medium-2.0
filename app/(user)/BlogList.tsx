//@ts-nocheck
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import urlFor from '../../lib/urlFor';
import ClientSideRoute from './ClientSideRoute';

type Props = {
	posts: Post[];
};

function BlogList({ posts }: Props) {
	return (
		<div className="max-w-7xl mx-auto">
			<hr className="border-[#16A34A] mb-10" />

			<div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6"
				key={posts._id}
			>
				{/* Posts */}
				{posts.map((post) => (
					<ClientSideRoute key={post._id} route={`/${post.slug.current}`}>
						<div className="flex flex-col group cursor-pointer">
							<div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-in-out rounded-sm">
								<Image
									className="h-60 w-full border rounded-lg object-cover object-left lg:object-center"
									src={urlFor(post.mainImage).url()!}
									alt={post.author.name}
									fill
								/>
								<div className="absolute bottom-0 w-full bg-opacity-30 bg-white backdrop-blur-sm rounded-lg drop-shadow-lg p-5 flex justify-between">
									<div>
										<p className="text-lg font-bold">{post.title}</p>
										<p className="text-xs">
											{new Date(post._createdAt).toLocaleDateString('en-US', {
												day: 'numeric',
												month: 'long',
												year: 'numeric',
											})}
										</p>
										<p className="flex items-center">
											<Image
												className="rounded-full"
												src={urlFor(post.author.image).url()!}
												width={48}
												height={48}
												alt={post.author.name}
											/>{' '}
											{post.author.name}
										</p>
									</div>

									<div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
										{post.categories.map((category) => (
											<div
												className="bg-[#16A34A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
												key={category.title}
											>
												<p>{category.title}</p>
											</div>
										))}
									</div>
								</div>
							</div>

							<div className="mt-5 flex-1">
								<p className="underline text-lg font-bold" key={post.title}>
									{post.title}
								</p>
								<p
									className="line-clamp-2 text-gray-500"
									key={post.description}
								>
									{post.description}
								</p>
							</div>

							<p className="mt-5 font-bold flex items-center group-hover:underline">
								Read Post
								<ArrowUpRightIcon className="ml-2 h-4 w-4" />
							</p>
						</div>
					</ClientSideRoute>
				))}
			</div>
		</div>
	);
}

export default BlogList;
