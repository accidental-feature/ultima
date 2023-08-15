import Links from "../../data/links.json"
import { containerBaseStyles } from "../../styles/tailwind/container.styles";
import { linkBaseStyles } from "../../styles/tailwind/text.styles";

const Footer = () => {
	return (
		<footer className={`${containerBaseStyles} text-center  pb-5 mt-16`}>
			<p className="text-center">
				<a className={`${linkBaseStyles} text-hundred`}
				href="https://kilgamesh.tech"
					target="_blank" rel="noopener noreferrer">
					Kilgamesh {''}
				</a> 
				© 2023 
			</p>
		</footer>
	);
};
export default Footer;