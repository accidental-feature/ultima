import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

type Props = {
	setSecretFound: Dispatch<SetStateAction<boolean>>,
	secretFound: boolean
};

const SecretBtn = ({ setSecretFound, secretFound }: Props) => {
	const [changing, setChanging] = useState(false);

	const asideStyles = changing 
						? `
						   fixed top-0 z-100 
						   h-screen w-screen 
						   bg-gradient-to-tr from-zinc-900 via-[#1e162f] to-[#1e162f]
						   hidden md:flex align-center justify-center ease-in
						  `
						: 'hidden md:inline fixed bottom-0.5 right-3.5'

	const onSecretClick = () => {
		const secret = !secretFound

		if(secret) {
			setChanging(true);

			// Delay before changing font
			setTimeout(() => {
				setSecretFound(secret);
				setChanging(false);
			}, 3700);
		} else {
			setSecretFound(secret);
		}
		
		window.localStorage.setItem("secretFound", secret.toString());
	}

  return(
	<aside className={`${asideStyles}`}>
		<button className={`cursor-none ${changing && 'relative bottom-24'}`} onClick={() => onSecretClick()}>
			{changing 
				? <Image src='/images/sora-shift.gif' alt='sora khiii pixel FFBE brave shift  idle' width={243} height={355} />
				: secretFound 
					?  <Image src='/images/sora-limit-idle.gif' alt='sora khiii pixel FFBE brave shift  idle' width={70} height={70} />
					: <Image src='/images/sora-idle.gif' alt='sora khiii pixel FFBE idle' width={70} height={70} />
			}
		</button>
	</aside>
  );
};

export default SecretBtn;