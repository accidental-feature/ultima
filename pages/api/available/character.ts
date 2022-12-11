
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../src/lib/supaclient'
import _ from 'lodash';
/**
 * GET available/character?name=characterName
*/

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Number | String>
) {
	const query = req.query;
	let { name } = query;

	if(name) {
	 	try {
			name = name.toString().replace(/\w+/g, _.capitalize);
	
			const { 
				data: games, error, status
			} = await supabase
				.from('Quotes')
				.select(`*`)
				.eq('character', name)
			
			if(error && status !== 406) {
				throw error
			}
			if(games) {
				res.send(games.length);
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
