import Image from 'next/image';
import { LogoProps } from 'sanity';
import MediumLogo from '../../public/assets/images/M-white.png';

function Logo(props: LogoProps) {
	const { renderDefault } = props;
	return (
		<div className="flex items-center space-x-2">
			<Image
				className="rounded-full object-cover"
				height={50}
				width={50}
				src={MediumLogo}
				alt="logo"
			/>
			<>{renderDefault(props)}</>
		</div>
	);
}

export default Logo;
