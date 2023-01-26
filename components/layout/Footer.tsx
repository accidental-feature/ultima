import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { containerBaseStyles } from "../../styles/tailwind/container.styles";
import { linkBaseStyles } from "../../styles/tailwind/text.styles";

type Props = {
	setSecretFound: Dispatch<SetStateAction<boolean>>,
	secretFound: boolean
};

const Footer = ({ setSecretFound, secretFound }: Props) => {
	const [changing, setChanging] = useState(false);
	
	const onSecretClick = () => {
		const secret = !secretFound
	
		if(secret) {
			setChanging(true);

			// Delay before changing font
			setTimeout(() => {
				setChanging(false);
				setSecretFound(secret);		
			}, 3900);
		} else {
			setSecretFound(secret);
		}
		
		window.localStorage.setItem("secretFound", secret.toString());
	}
	return (
		<footer 
		className={`${containerBaseStyles} text-center  pb-5 mt-20`}>
			<div className="flex flex-col items-center justify-center">
				<button className={`mb-3 block relative cursor-none`} onClick={() => onSecretClick()}>
					{changing 
						? <Image src='/images/sora-shift.gif' alt='sora khiii pixel FFBE brave shift  idle' width={174} height={253} />
						: secretFound 
							?  <Image src='/images/sora-limit-idle.gif' alt='sora khiii pixel FFBE brave shift  idle' width={70} height={70} />
							: <Image src='/images/sora-idle.gif' alt='sora khiii pixel FFBE idle' width={70} height={70} />
					}
				</button>

				<p>
					<a className={`${linkBaseStyles} text-hundred`}
					href="http://0hundred.dev"
					 target="_blank" rel="noopener noreferrer">
						0hundred0 {''}
					</a> 
					© 2023 
				</p>
			</div>

		</footer>
	);
};
export default Footer;