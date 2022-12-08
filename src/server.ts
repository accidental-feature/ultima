import { PrismaClient } from '@prisma/client'
import NewQuotes from '../data/quotes.json';

// Can export if used across many files
const prisma = new PrismaClient();

// Add quotes from data/quotes.json (Double check for duplicates)
const addQuotes = async () => {
	await prisma.quotes.createMany({
		data: NewQuotes
	});
	const totalQuotesCount = await prisma.quotes.count();
	const newQuotesCount = NewQuotes.length
	console.log(`${newQuotesCount} quotes added successfully, ${totalQuotesCount} quotes available.`)
}

async function main() {
	// remove or replace if not adding
	addQuotes();
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
	})