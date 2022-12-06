import { PrismaClient } from '@prisma/client'
import NewQuotes from '../data/quotes.json';

const prisma = new PrismaClient()
const addQuotes = async () => {
	await prisma.quotes.createMany({
		data: NewQuotes
	});
	console.log('Quotes added successfully')
}

async function main() {
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