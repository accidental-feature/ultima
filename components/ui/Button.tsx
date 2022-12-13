import Link from 'next/link';
import { buttonStyle } from '../../src/lib/stylesLib';

type Props = {
	filled: boolean,
	content: string,
	link?: string
}

const Button = ({ filled, content, link }: Props) => {
	const btnStyles = filled 
		? 'bg-mako' 
		: 'border border-solid border-mako hover:bg-mako'

	return (
		link 
			? <Link href={link}
				className={`${btnStyles} ${buttonStyle} hover:brightness-125 text-gray-900`}>
					{ content }
			  </Link>
		: <button type="submit" className={`${btnStyles} ${buttonStyle}`}>
				{ content }
			</button>
	);
};
export default Button;