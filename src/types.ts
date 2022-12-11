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