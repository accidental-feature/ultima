import Link from 'next/link';
import { buttonStyle } from '../../src/lib/stylesLib';

type Props = {
	filled: boolean,
	content: string,
	link?: string
}

const Button = ({ filled, content, link }: Props) => {
	const btnStyles = filled 
		? 'bg-mako text-gray-900 hover:brightness-125' 
		: 'border border-solid border-mako text-gray-900 hover:bg-mako hover:brightness-125'

	return (
		link 
			? <Link href={link}
				className={`${btnStyles} ${buttonStyle}`}>
					{ content }
			  </Link>
		: <button type="submit" className={`${btnStyles} ${buttonStyle}`}>
				{ content }
			</button>
	);
};
export default Button;