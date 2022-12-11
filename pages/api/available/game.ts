// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../src/lib/supaclient'
import _ from 'lodash';
/**
 * GET available/game?title=gameTitle
*/

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Number | String>
) {
	const query = req.query;
	let { title } = query;

	if(title) {
	 	try {
			title = title.toString().replace(/\w+/g, _.capitalize);
	
			const { 
				data: games, error, status
			} = await supabase
				.from('Quotes')
				.select(`*`)
				.eq('title', title)
			
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
		res.send("No game title entered")
	}
}
