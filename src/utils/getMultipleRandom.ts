import { GameData } from "../lib/types";

export const getMultipleRandom = (arr: GameData[], num: number): GameData[] => {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
}