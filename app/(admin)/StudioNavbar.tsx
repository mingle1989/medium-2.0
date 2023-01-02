import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { NavbarProps } from 'sanity';

function StudioNavbar(props: NavbarProps) {
	return (
		<div>
			<div className="flex items-center justify-between p-5">
				<Link href="/" className="text-[#759fbc] flex items-center">
					<ArrowUturnLeftIcon className="h-6 w-6 text-[#759fbc] mr-2" />
					Go To Website
				</Link>

				<div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#759fbc]">
					<h3 className="font-bold text-white">Medium Blog Dashboard.</h3>
				</div>
			</div>

			<>{props.renderDefault(props)}</>
		</div>
	);
}

export default StudioNavbar;
