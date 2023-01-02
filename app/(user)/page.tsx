import type { NextPage } from 'next';
import Image from 'next/image';
import MLogo from '../../public/assets/images/M.png';

const Home: NextPage = () => {
	return (
		<div className="max-w-7xl mx-auto">
			{/* Banner */}
			<div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
				<div className="px-10 space-y-5">
					<h1 className="text-6xl max-w-xl font-serif">
						<span className="underline decoration-black decoration-4">
							Medium
						</span>{' '}
						is a place to write, read, and connect
					</h1>
					<h2>
						It's easy and free to post your thoughts on any topic and connect
						with millions of readers.
					</h2>
				</div>

				<div>
					<div className="hidden md:inline-flex w-48 lg:w-full h-48 lg:h-full">
						<Image src={MLogo} alt="MLogo" />
					</div>
				</div>
			</div>

			{/* Posts */}
		</div>
	);
};

export default Home;
