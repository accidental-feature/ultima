import { ReactNode } from "react";

export interface IMeta {
	title: string;
	image: string;
	type: 'website';
	description: string;
}

export interface _DocumentProps {
	metaInfo?: Partial<IMeta>;
	children: ReactNode;
}