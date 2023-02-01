import { containerBaseStyles } from "../../styles/tailwind/container.styles";
import { linkBaseStyles } from "../../styles/tailwind/text.styles";

const Footer = () => {
	return (
		<footer className={`${containerBaseStyles} text-center  pb-5 mt-20`}>
			<p className="text-center">
				<a className={`${linkBaseStyles} text-hundred`}
				href="http://0hundred.dev"
					target="_blank" rel="noopener noreferrer">
					0hundred0 {''}
				</a> 
				© 2023 
			</p>
		</footer>
	);
};
export default Footer;