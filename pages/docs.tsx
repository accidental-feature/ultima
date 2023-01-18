import Layout from "../components/Layout";
import FetchExample from "../components/FetchExample";
import { headerTextStyle } from "../src/lib/stylesLib";
import { useRef } from "react";

const docs = () => {
	const metaInfo = {
		title: 'Ultima - Docs',
		description: 'Current endpoints for Ultima API',
		image: '/images/ultima_logo.png'
	}
	const randomQuoteCharRef = useRef<HTMLDivElement>(null);
	const randomQuotesCharRef = useRef<HTMLDivElement>(null);
	const randomQuoteRef = useRef<HTMLDivElement>(null);
	const randomQuotesRef = useRef<HTMLDivElement>(null);
	const randomQuoteTitleRef = useRef<HTMLDivElement>(null);
	const randomQuotesTitleRef = useRef<HTMLDivElement>(null);

	const scrollToElement = (id: string) => {
		switch(id) {
			case 'random-quote':
				randomQuoteRef.current 
					? randomQuoteRef.current.scrollIntoView({behavior:"smooth"})
					: null
				return
			case 'random-quote-char':
				randomQuoteCharRef.current 
					? randomQuoteCharRef.current.scrollIntoView({behavior:"smooth"})
					: null
				return
			case 'random-quotes-char':
				randomQuotesCharRef.current 
					? randomQuotesCharRef.current.scrollIntoView({behavior:"smooth"})
					: null
				return
			case 'random-quotes':
				randomQuotesRef.current 
					? randomQuotesRef.current.scrollIntoView({behavior:"smooth"})
					: null
				return
			case 'random-quote-title':
				randomQuoteTitleRef.current 
					? randomQuoteTitleRef.current.scrollIntoView({behavior:"smooth"})
					: null
				return
			case 'random-quotes-title':
				randomQuotesTitleRef.current 
					? randomQuotesTitleRef.current.scrollIntoView({behavior:"smooth"})
					: null
				return
			default:
				return
		}
	}
	return (
	<div>
			<Layout metaInfo={metaInfo}>
				<div className="container relative lg:mx-auto px-3 max-w-4xl py-10 mt-10">
					<header className={`pb-10 border-b border-mako`}>
						<h1 className={headerTextStyle}>Docs</h1>
						<p className='my-5 text-lg'>The examples below utilize the <span className='font-bold'>Fetch API</span> but feel free
						to use any other http library.</p>
					</header>
					<section className="mt-10">
						<div>
							<h2 className="text-2xl font-bold mb-3">Important Notes</h2>
							<ul className="list-disc list-inside text-base lg:text-lg">
								<li>Default rate limit is 100 per hour</li>
								<li>Additional games or characters can be requested {''}
									<a className="text-mako underline hover:opacity-80" href="https://github.com/0hundred0/ultima">here</a>
								</li>
								<li>See how many quotes are available with {''}
									<span className="font-bold">{'"/api/available/"'}</span> route with params i.e. {''}
									<span className="font-bold">{'"game?title=nier"'}</span>
								</li>
							</ul>
						</div>

						<div className="mt-10">
							<h2 className="text-2xl font-bold mb-3">Routes Available</h2>
							<ol className="list-decimal list-inside text-base">
								<li>
									<span className="cursor-pointer	text-mako underline hover:opacity-80" onClick={() => scrollToElement('random-quote')}>
										Get a random quote
									</span>
								</li>

								<li>
									<span className="cursor-pointer	text-mako underline hover:opacity-80" 
									onClick={() => scrollToElement('random-quote-char')}>
										Get a random quote by character name
									</span>
								</li>
								
								<li>
									<span className="cursor-pointer	text-mako underline hover:opacity-80" 
									onClick={() => scrollToElement('random-quote-title')}>
										Get a random quote by game title
									</span>
								</li>
								
								<li>
									<span className="cursor-pointer	text-mako underline hover:opacity-80" 
									onClick={() => scrollToElement('random-quotes')}>
										Get 5 random quotes
									</span>
								</li>
								
								<li>
									<span className="cursor-pointer	text-mako underline hover:opacity-80" 
									onClick={() => scrollToElement('random-quotes-char')}>
										Get 5 quotes by character name
									</span>
								</li>
								
								<li>
									<span className="cursor-pointer	text-mako underline hover:opacity-80"
									onClick={() => scrollToElement('random-quotes-title')}>
										Get 5 quotes by game title
									</span>
								</li>
							</ol>
						</div>
					</section>
					<section className={`container relative lg:mx-auto max-w-4xl py-10 pb-8 border-b border-mako`}>
						<div ref={randomQuoteRef}>
							<FetchExample 
								head={'Get Random Quote'} 
								id='random-quote' link='https://ultima.rest/api/quote/random' 
								mb={'mb-40'}
							/>
						</div>

						<div ref={randomQuoteCharRef}>
							<FetchExample 
								head={'Get Random Quote by Character'} 
								id='random-quote-char' link='https://ultima.rest/api/quote/character?name=kratos' 
								mb={'mb-40'} 
							/>
						</div>

						<div ref={randomQuoteTitleRef}>
							<FetchExample 
								head={'Get Random Quote by Game'} 
								id='random-quote-title' link='https://ultima.rest/api/quote/game?title=nier+automata' 
								mb={'mb-40'} 
							/>
						</div>

						<div ref={randomQuotesRef}>
							<FetchExample 
								head={'Get 5 Random Quotes'} 
								id='random-quotes' link='https://ultima.rest/api/quote/random' 
								mb={'mb-40'} multiple={true}
							/>
						</div>

						<div ref={randomQuotesCharRef}>
							<FetchExample 
								head={'Get 5 Random Quotes by Characters'} 
								id='random-quotes-char' link='https://ultima.rest/api/quotes/character?name=sephiroth' 
								mb={'mb-40'} multiple={true}
							/>
						</div>
						
						<div ref={randomQuotesTitleRef}>
							<FetchExample 
								head={'Get 5 Random Quotes by Game'} 
								id='random-quote-title' link='https://ultima.rest/api/quotes/game?title=final+fantasy+VII' 
								mb={'mb-10'} multiple={true}
							/>
						</div>

					</section>
				</div>
			</Layout>
	</div>
	);
};
export default docs;