import { prismaClient as Prisma } from '../lib/PrismaClient';
import { 
	addQuotes, removeQuoteByID, updateQuote, updateQuotes,
	countAllQuotes, countQuotesByParam
} from '../lib/dbManager';

// Uncomment the function needed function
async function main() {
	addQuotes();
	// removeQuoteById(1)
	// updateQuote()
	// updateQuotes()
	// countAllQuotes()
	// countQuotesByParam()
}

main()
  .then(async () => {
    await Prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await Prisma.$disconnect()
    process.exit(1)
	})