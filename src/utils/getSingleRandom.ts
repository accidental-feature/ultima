import { GameData } from "../lib/types";

export const getSingleRandom = (arr: GameData[]): GameData => {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());
	const item = shuffled.slice(0, shuffled.length);

	return item[Math.floor(Math.random() * item.length)]
}