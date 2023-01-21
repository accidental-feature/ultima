import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { containerBaseStyles } from "../../styles/tailwind/container.styles";
import { linkBaseStyles } from "../../styles/tailwind/text.styles";

type Props = {
	setSecretFound: Dispatch<SetStateAction<boolean>>,
	secretFound: boolean
};

const Footer = ({ setSecretFound, secretFound }: Props) => {
	const onSecretClick = () => {
		const secret = !secretFound
		setSecretFound(secret);
		window.localStorage.setItem("secretFound", secret.toString());
	}
	return (
		<footer 
		className={`${containerBaseStyles} text-center pt-10 pb-5 mt-15`}>
			<div className="flex items-center justify-center">
				<p>
					<a className={`${linkBaseStyles}`}
					href="http://0hundred.dev"
					 target="_blank" rel="noopener noreferrer">
						0hundred0 {''}
					</a> 
					© 2023 
				</p>

				<button className="ml-1.5 inline relative cursor-none" onClick={() => onSecretClick()}>
					<Image src='/images/sora-idle.gif' alt='sora khiii pixel FFBE idle' width={70} height={70} />
				</button>
			</div>

		</footer>
	);
};
export default Footer;