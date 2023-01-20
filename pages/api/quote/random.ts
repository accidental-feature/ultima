// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GameData } from '../../../src/lib/types'
import { supabase } from '../../../src/lib/supaclient'
import _ from 'lodash';
import { getSingleRandom } from '../../../src/utils/getSingleRandom';

/**
 * GET quote/random
*/

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GameData | String>
) {

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
			res.json(getSingleRandom(games))
		} else {
			throw error
		}
	} catch(error) {
		res.send("Not Found")
	}
}