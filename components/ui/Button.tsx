import Link from 'next/link';
import { buttonStyle } from '../../src/lib/stylesLib';

type Props = {
	filled: boolean,
	content: string,
	link?: string
}

const Button = ({ filled, content, link }: Props) => {

	return (
		link ?
			<Link href={link} className={`${buttonStyle} uppercase tracking-[.1em]`}>
					{ content }
			</Link>
		: <></>
	);
};
export default Button;