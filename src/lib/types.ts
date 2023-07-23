export type GameData = {
	id: number,
	title: String,
	quote: String,
	character: String,
	esrb: String,
	release: number
}

export type ChildProp = {
	children?: JSX.Element | JSX.Element[]
}

export interface IMeta {
	title: string;
	image: string;
	type: 'website';
	description: string;
}

export interface _DocumentProps {
	metaInfo?: Partial<IMeta>;
	children: React.ReactNode;
}