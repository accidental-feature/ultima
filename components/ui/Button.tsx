import Link from 'next/link';
import { ReactNode } from 'react';
import { baseButtonStyles } from '../../styles/tailwind';

type Props = {
	filled: boolean,
	children: ReactNode;
	link?: string
}

const Button = ({ filled, children, link }: Props) => {
	const btnStyles = filled 
		? 'bg-mako hover:brightness-125' 
		: 'border border-solid border-mako hover:bg-mako'

	return (
		link 
			? 
				<Link href={link}
				className={`${btnStyles} ${baseButtonStyles}`}>
					{ children }
			  	</Link>
			: 
				<div className={`${btnStyles} ${baseButtonStyles}`}>
					{ children }
				</div>
	);
};
export default Button;