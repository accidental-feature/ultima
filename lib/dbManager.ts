import { prismaClient as Prisma } from './PrismaClient';
import NewQuotes from '../data/quotes.json';

// Add quotes from data/quotes.json (Double check for duplicates)
export const addQuotes = async () => {
	await Prisma.quotes.createMany({
		data: NewQuotes
	});
	const totalQuotesCount = await Prisma.quotes.count();
	const newQuotesCount = NewQuotes.length
	console.log(`${newQuotesCount} quotes added successfully, ${totalQuotesCount} quotes available.`)
}

// Delete a quote based on id
export const removeQuoteByID = async (quoteId: number) => {
	await Prisma.quotes.delete({
		where: { id: quoteId}
	});
	const totalQuotesCount = await Prisma.quotes.count();
	console.log(`Quote deleted successfully, ${totalQuotesCount} quotes available.`)
}

// Update an existing quote
export const updateQuote = async () => {
	await Prisma.quotes.update({
		where: { id: 7 },
		// change query data (does not need to be the entire object)
		data: { quote: '', character: '', title: '', esrb: '', release: 2010}
	})
}

// Update a batch of existing quotes 
export const updateQuotes = async () => {
	await Prisma.quotes.updateMany({
		where: { character: "Sephiroth" },
		// change query data (does not need to be the entire object)
		data: { title: 'Final Fantasy 7 Remake', release: 2020}
	})
}

// Returns Total quotes
export const countAllQuotes = async () => {
	const totalQuotes = await Prisma.quotes.count();

	console.log(`${totalQuotes} quotes in total`)
}

// Returns quotes based on params
export const countQuotesByParam = async () => {
	const totalQuotes = await Prisma.quotes.count({
		where: {character: "Pascal"}
	});

	console.log(totalQuotes)
}