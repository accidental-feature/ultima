import Image from "next/image";

const Footer = () => {
	return (
		<footer className="
			text-center container relative mx-auto max-w-4xl pt-10 pb-5 mt-15 bg-gray-900
			text-gray-100
		">
			<div className="flex flex-col items-center justify-center">
				<span className="sora-anim ml-1.5 inline relative">
					<Image src='/images/sora-limit.gif' alt='sora khiii pixel limit attack' width={238} height={128} />
				</span>
				
				<p>
					<a className="no-underline hover:brightness-125" href="http://0hundred.dev" target="_blank" 
					rel="noopener noreferrer">
						0hundred0
					</a> © 2023
				</p>
			</div>
		</footer>
	);
};
export default Footer;