// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GameData } from '../../../src/lib/types'
import { supabase } from '../../../src/lib/supaclient'
import _ from 'lodash';
import { getMultipleRandom } from '../../../src/utils/getMultipleRandom';
import { cors, runMiddleware } from '../random';
/**
 * GET quotes/character?name=characterName
 * GET quotes/character?name=characterName&limit=LimitNum 'Max 10'
*/

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GameData[] | String>
) {
	await runMiddleware(req, res, cors);
	
	const query = req.query;
	let { name, limit } = query;
	let userLimit = 5;

	if(limit && Number(limit) > 10) {
		userLimit = 10
	} else if(limit) {
		userLimit = Number(limit)
	}

	if(name) {
	 	try {
			name = name.toString().replace(/\w+/g, _.capitalize);
			name = name.split('+').join(' ');
			name = name.split('%20').join(' ');
			
			const { 
				data: games, error, status
			} = await supabase
				.from('Quotes')
				.select(`*`)
				.textSearch('character', name.split(' ').join(' & '))
			
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
		res.send("No character name entered")
	}
}