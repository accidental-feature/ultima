import Layout from '../components/Layout'
import Codeblock from '../components/ui/Codeblock'
import { headerTextStyle, containerStyle, scriptBtnStyle } from '../src/lib/stylesLib'
import { GameData } from '../src/types'
import { useState } from 'react'
import Button from '../components/ui/Button'
import Contributors from '../components/Contributors'

export default function Home() {
	const [display, setDisplay] = useState(false);
	const [isFetching, setFetching] = useState(false);
	const [randomQuote, setRandomQuote] = useState<GameData | null>(null)
	const supa = <a href="http://supabase.com" target="_blank" rel="noopener noreferrer">Supabase</a>

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

  return (
    <div>

      <Layout>
				<header 
				className="container relative max-w-4xl 
					px-2 pt-20 pb-10 mt-20 mx-auto
					text-center"
				>
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
					<Button filled={true} link='/docs' content={'Get Started'} />

					<div className="mt-28">
						<a className="inline-flex item-center focus:outline-none" href='#tutorial'>
							<svg className="animate-bounce w-6 h-6 text-mako hover:brightness-125" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path></svg>
						</a>
					</div>
				</header>
				<section id='tutorial'>
					<div className={containerStyle}>
						<h2 className={headerTextStyle}>Quick Tutorial</h2>
						<h3 className="my-5 text-lg">Run this for a random quote</h3>


						<Codeblock>
							<div>
								<span className="text-mako">fetch</span>
								<span className="text-pink">{"('https://ultima.rest/api/quote/random')"}</span>
							</div>

							<div className="ml-4">
								<span className="text-mako">.then</span><span className="text-pink">(</span>
								<span>
									response {'=>'} response.<span className="text-mako">json</span>
									<span className="text-pink">()</span>
								</span>
								<span className="text-pink">)</span>
							</div>

							<div className="ml-4">
								<span className="text-mako">.then</span>
								<span className="text-pink">(</span>
								
								<span>
									quote {'=>'} <span className="text-gold">console.</span>
								</span>
								
								<span className="text-mako">log</span>
								<span className="text-pink">(</span>
								<span>quote</span>
								<span className="text-pink">)</span>
								
								<span className="text-pink">)</span>
							</div>
						</Codeblock>

						<div className="my-5">
							<button 
								type='button'
								className={`${scriptBtnStyle}`}
								onClick={(e) => {handleClick(e)}}
								disabled={isFetching}>
								Run Script
							</button>
						</div>
						
						<Codeblock>

							{display && randomQuote
								
								? <div>
									{
										<>
										<p>{'{'}</p>
											<p className="ml-4">
												<span className="text-mako">id:</span><span className="text-pink">{" "+randomQuote.id+','}</span>
											</p>

											<p className="ml-4">
												<span className="text-mako">quote:</span><span className="text-pink">{` '${randomQuote.quote}',`}</span>
											</p>

											<p className="ml-4">
												<span className="text-mako">character:</span><span className="text-pink">{`'${randomQuote.character}',`}</span>
											</p>

											<p className="ml-4">
												<span className="text-mako">title:</span><span className="text-pink">{` '${randomQuote.title}'`}</span>
											</p>
											
											<p className="ml-4">
												<span className="text-mako">esrb:</span><span className="text-pink">{` '${randomQuote.esrb}',`}</span>
											</p>
											<p className="ml-4">
												<span className="text-mako">release:</span><span className="text-pink">{" "+randomQuote.release+','}</span>
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
					</div>
				</section>
				<Contributors />
      </Layout>
    </div>
  )
}
