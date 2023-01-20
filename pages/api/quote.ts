// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GameData } from '../../src/lib/types'
import { supabase } from '../../src/lib/supaclient'

// GET quote?id=IDNUM

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GameData[]>
) {
	const query = req.query;
	const { id } = query;
  const { 
		data: game, error 
	} = await supabase
		.from('Quotes')
		.select(`*`)
		.eq('id', id)

	error && console.log(error);
	game && res.json(game[0]);
}
