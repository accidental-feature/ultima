import { useState, useRef } from 'react'

import Layout from '../components/layout/Layout'
import Codeblock from '../components/ui/Codeblock'
import { GameData } from '../src/lib/types'
import Button from '../components/ui/Button'
import Contributors from '../components/contributors/Contributors'
import { 
	headerStyles, headerTextStyle, khButtonStyles, sectionStyles, linkBaseStyles
} from '../styles/tailwind'


export default function Home() {
	const [display, setDisplay] = useState(false);
	const [isFetching, setFetching] = useState(false);
	const [randomQuote, setRandomQuote] = useState<GameData | null>(null);
	const scrollToRef = useRef<HTMLDivElement>(null);

	const supa = <a href="http://supabase.com" className={`${linkBaseStyles} text-mako`} target="_blank" rel="noopener noreferrer">Supabase</a>

	const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setFetching(true)
		await fetch('/api/quote/random')
			.then((res) => res.json())
			.then((json) => {
				setRandomQuote(json);
				setDisplay(true);
				setFetching(false)
			})
	}
	const RefScroll = () => {
		scrollToRef.current 
		? scrollToRef.current.scrollIntoView({behavior:"smooth"})
		: null
	}

  return (
    <div>

      <Layout>
				<header className={`${headerStyles}`}>
					<h1 
					className="font-bold drop-shadow-lg lg:text-7xl text-6xl font-display">
						Ultima
					</h1>
					<div className="py-10">
						<h2 className="text-2xl">A free REST API for random video game quotes.</h2>
						<p className="my-2 text-lg">
							{supa} saved the day
						</p>
					</div>
					<Button filled={true} link='/docs'>Get Started</Button>

					<div className="mt-28">
						<span className="cursor-pointer	inline-flex item-center focus:outline-none" 
						onClick={() => RefScroll()}>
							<svg className="motion-safe:animate-bounce w-7 text-mako hover:brightness-125" fill="currentColor" stroke="currentColor" viewBox="0 0 1893 2350" xmlns="http://www.w3.org/2000/svg">
								<path d="M438 392.6c-1.9.2-9.1.9-16 1.4-27.9 2.4-62.6 8.7-91 16.6-78.4 21.7-147.1 61.4-202.5 117C57.6 598.7 16.7 688.4 4.3 800c-2.6 23.5-2.6 91.8 0 116.5 14.1 133.1 60.8 252.1 141.2 359 27.9 37.1 49.2 61.4 87.9 100.1 43.4 43.3 70.9 67.9 174.6 155.9 79 67.1 126.2 110.7 196 181.1 115.7 116.8 173.3 191.5 210.6 273.4 10.7 23.6 39.2 90.5 45.7 107.5 20 52.6 37.7 113.9 51.7 179.8 12.3 57.7 14.4 64.6 21.6 70.5 9.9 8.2 24.6 5.6 31-5.4 4.1-7 6.7-16.6 17-62.9 14.1-63.6 22.7-96.2 36.6-138.5 12.3-37.5 18.6-53.9 40.9-105.5 32-73.9 50.6-107.9 85-154.7 40.8-55.6 110.4-132 191.5-209.9 59.3-57.1 80.7-76.3 154.9-139.4 101.5-86.3 137.4-118.5 177.6-159.2 30.8-31.1 50.3-53.3 73.9-83.9 84.2-109 133.3-231.5 147.7-367.9 2.2-21.5 2.6-91.7.5-111.5-6.7-63.8-21-115.8-45.7-166.5-33.9-69.4-84.3-125.8-151.6-169.8-65.9-43-145.5-69-231.8-75.7-29.3-2.2-75.2-1.1-105.1 2.6-102.2 12.6-195.4 53.2-267.2 116.3-14.3 12.6-37.1 35.7-47.9 48.6-44.6 53.2-69.1 105.7-77.6 166.5-2.4 17.6-2.4 59.3.1 77.5 6.2 45.1 20.8 91.7 37.8 120.5 16.2 27.5 40.1 52.5 68.3 71.2 14.1 9.4 39.6 22.2 54.4 27.3 53.6 18.4 106.6 17.3 155.3-3.2 29.6-12.4 60.9-37.5 79.5-63.7 13.4-18.8 23.6-43.4 27.5-66 1.7-10.1 1.9-14.7 1.5-28.1-.3-8.8-1.3-19.2-2.1-23-3.8-17.1-11.2-34.3-20.9-48.5-6.8-9.9-22-24.9-33.2-32.9-21.7-15.3-65.8-32.1-84.2-32.1-13.9 0-22.1 10.3-17.4 21.8 1.6 3.9 5.8 6.5 19.5 12.2 29.3 12.2 46.2 25 58.8 44.4 8.3 12.9 10 17.8 10.6 31.2.9 21.5-6.8 45.6-21.4 67-17.4 25.4-35.9 37.2-67.9 43-15.2 2.7-41.5 2.5-56.3-.4-21.3-4.3-36.7-11-50.7-22.3-43-34.6-61.5-90.5-49.5-149.4 7.6-37.1 30-76 61.9-107.3 50.5-49.6 119.8-80.3 205.1-90.9 20.3-2.5 72.2-2.5 93.2 0 61.8 7.4 115.1 24.7 152.3 49.5 53.6 35.8 100.6 94.1 121.8 151.2 37.2 99.9 25.9 212.2-33 330-14.8 29.7-26.9 50.6-45.8 79-30.2 45.5-74.9 101.9-126.6 159.6-19.4 21.7-89.6 91.7-98.9 98.6-24.1 18-94 84.8-138 131.8-115.5 123.5-200.6 243.8-250.8 355-23.3 51.5-44.6 115.7-62.2 187-2.2 9.1-4.3 17.2-4.6 18-.3.8-3.6-10.7-7.4-25.5-32.7-130.5-70.3-216.9-139.9-321.5-68-102-164-212.7-268-308.9-16.6-15.3-37-33.1-43.6-37.9-10.5-7.7-61-58-91-90.7-34.9-38-83.7-97.1-110.5-134C182.7 1073 144.7 935 175.6 811.7c6.6-26.1 16-50.5 27.5-71.3 32.1-57.8 82.5-107.5 134.4-132.4 35.8-17.2 89.4-30.3 139.5-34.1 19.3-1.5 59.5-.6 78 1.6 63.1 7.6 118 27.1 164.5 58.6 45.3 30.6 81.2 74.8 95.5 117.8 7.2 21.5 8.4 29.6 8.5 55.6 0 25.6-.8 31.6-7 50.2-8 24-22.4 45.5-41.5 61.8-17 14.5-30.6 21-54.4 25.7-14.6 2.9-41 3.1-56.1.4-13.5-2.4-29.6-7.7-37.4-12.3-31.1-18.4-56.7-68.9-52.2-103 2.1-15.5 15.4-36.1 31.8-49.3 8.5-6.9 23-14.9 38.8-21.6 5-2.1 10.7-4.8 12.7-6.1 9.3-5.7 9-17.6-.5-24.7-4.5-3.3-15.2-3.4-27.8-.2-13.1 3.4-34.8 11.5-46.9 17.6-41.5 20.8-68.2 55.5-75.5 97.8-2 12-2 34.8 0 46.7 6.6 38.4 27.8 73.7 60.6 101.1 50.8 42.4 120.3 55.7 188.6 36 59.4-17.1 109.2-55.7 138.1-107.1 16.3-29.1 31.3-79.8 36.3-123.5 1.8-15.8 1.6-51.9-.5-67.5-7.6-56.6-28.1-104.5-66.1-154-67.8-88.4-168.9-149.6-286-173.4-35.2-7.1-57.1-9.2-100-9.6-20.3-.2-38.6-.1-40.5.1z"/>
							</svg>
						</span>
					</div>
				</header>
				<section ref={scrollToRef} id='tutorial' className={sectionStyles}>
						<h2 className={headerTextStyle}>Quick Tutorial</h2>
						<h3 className="my-5 text-lg">Run this for a random quote</h3>


						<Codeblock>
							<div>
								<span className="text-mako">fetch</span>
								<span className="text-gold">{"('https://ultima.rest/api/quote/random')"}</span>
							</div>

							<div className="ml-4">
								<span className="text-mako">.then</span><span className="text-gold">(</span>
								<span>
									response {'=>'} response.<span className="text-mako">json</span>
									<span className="text-gold">()</span>
								</span>
								<span className="text-gold">)</span>
							</div>

							<div className="ml-4">
								<span className="text-mako">.then</span>
								<span className="text-gold">(</span>
								
								<span>
									quote {'=>'} <span className="text-cloud-kh">console.</span>
								</span>
								
								<span className="text-mako">log</span>
								<span className="text-gold">(</span>
								<span>quote</span>
								<span className="text-gold">)</span>
								
								<span className="text-gold">)</span>
							</div>
						</Codeblock>

						<div className="my-5">
							<Button filled={true} >
								<button 
									type='button'
									onClick={(e) => {handleClick(e)}}
									disabled={isFetching}>
									Run Script
								</button>
							</Button>
						</div>
						
						<Codeblock>

							{display && randomQuote
								
								? <div>
									{
										<>
										<p>{'{'}</p>
											<p className="ml-4">
												<span className="text-mako">id:</span><span className="text-gold">{" "+randomQuote.id+','}</span>
											</p>

											<p className="ml-4">
												<span className="text-mako">quote:</span><span className="text-gold">{` '${randomQuote.quote}',`}</span>
											</p>

											<p className="ml-4">
												<span className="text-mako">character:</span><span className="text-gold">{` '${randomQuote.character}',`}</span>
											</p>

											<p className="ml-4">
												<span className="text-mako">title:</span><span className="text-gold">{` '${randomQuote.title}'`}</span>
											</p>
											
											<p className="ml-4">
												<span className="text-mako">esrb:</span><span className="text-gold">{` '${randomQuote.esrb}',`}</span>
											</p>
											<p className="ml-4">
												<span className="text-mako">release:</span><span className="text-gold">{" "+randomQuote.release+','}</span>
											</p>
											<p>{'}'}</p>
										</>
									}
									</div>
								: <p>{isFetching ? 'Loading...' : 'null'}</p>
							}
						</Codeblock>

						{(display && randomQuote) && <p className="mt-5 text-lg">Here is a quote by {''}
							<span className="font-medium text-mako">{randomQuote.character}</span> from {''}
							<span className="font-medium text-mako">{randomQuote.title}</span> 👾</p>}				
				</section>
				<Contributors />
      </Layout>
    </div>
  )
}
