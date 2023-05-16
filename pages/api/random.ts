// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors';
import { GameData } from '../../src/lib/types'
import { supabase } from '../../src/lib/supaclient'
import _ from 'lodash';
import { getSingleRandom } from '../../src/utils/getSingleRandom';

/**
 * GET /random
*/

export const cors = Cors({
	methods: ['GET', 'HEAD']
})

export function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GameData | String>
) {
	await runMiddleware(req, res, cors);

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