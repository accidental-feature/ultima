// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GameData } from '../../../src/lib/types'
import { supabase } from '../../../src/lib/supaclient'
import _ from 'lodash';
import { getMultipleRandom } from '../../../src/utils/getMultipleRandom';
import { runMiddleware, cors } from '../random';

/**
 * GET quotes/random
 * GET quotes/random?limit=limitNum
*/

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GameData[] | String>
) {
	await runMiddleware(req, res, cors);
	const query = req.query;
	let { limit } = query;
	let userLimit = 5;

	if(limit && Number(limit) > 10) {
		userLimit = 10
	} else if(limit) {
		userLimit = Number(limit)
	}

	try {
		const { 
			data: games, error, status
		} = await supabase
			.from('Quotes')
			.select(`*`)
		
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
}
