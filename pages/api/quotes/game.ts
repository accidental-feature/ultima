// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GameData } from '../../../src/lib/types'
import { supabase } from '../../../src/lib/supaclient'
import _ from 'lodash';
import { getMultipleRandom } from '../../../src/utils/getMultipleRandom';
import { cors, runMiddleware } from '../random';

/**
 * GET quotes/game?title=gameTitle
 * GET quotes/game?title=gameTitle&limit=limitNum 'Max 10'
*/

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GameData[] | String>
) {
	await runMiddleware(req, res, cors);
	const query = req.query;
	let { title, limit } = query;
	let userLimit = 5;

	if(limit && Number(limit) > 10) {
		userLimit = 10
	} else if(limit) {
		userLimit = Number(limit)
	}

	if(title) {
	 	try {
			title = title.toString().replace(/\w+/g, _.capitalize);
			title = await title.split('+').join(' ');
			title = await title.split('%20').join(' ');

			const { 
				data: games, error, status
			} = await supabase
				.from('Quotes')
				.select(`*`)
				.textSearch('title', title.split(' ').join(' & '))
			
			if(error && status !== 406) {
				throw error
			}
			if(games) {
				res.json(getMultipleRandom(games, userLimit))
			} else {
				throw error
			}
		} catch(error) {
			res.send("Not Found")
		}
	} else {
		res.send("No game title entered")
	}
}
