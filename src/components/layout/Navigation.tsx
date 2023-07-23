import Link from "next/link";
import { useState } from "react";
import { containerBaseStyles, linkBaseStyles } from "@styles/tailwind";

const Navigation = () => {
	const [ hidden, setHidden ] = useState(true)

	return (
		<>
			<div className="font-sans h-1.5 
				bg-gradient-to-r 
				mx-auto
				from-pink via-pink-100 
				via-mauve via-purple-200 via-purple-500 via-purple-500 via-purple-200 via-mauve
				via-pink-100 to-pink">
			</div>
			<div className="shadow-md">
				<nav className={`${containerBaseStyles} py-2`} id="navbar">
					<div className="lg:inline-flex flex items-center justify-between mx-3 py-2 text-hundred">
						<Link href='/' className="font-semibold text-xl hover:opacity-75">
							Ultima <span className="text-xs">API</span>
						</Link>

						<button className="space-y-1.5 lg:hidden" onClick={() => setHidden(!hidden)}>
							<div className="block w-6 h-0.5 bg-mako"></div>
							<div className="block w-6 h-0.5 bg-mako"></div>
							<div className="block w-6 h-0.5 bg-mako"></div>
						</button>
					</div>
					
					<ul className={`${hidden && 'hidden'} inline-flex flex-col lg:flex-row lg:mx-0 lg:inline-flex lg:float-right`}>
						<li className="mt-1.5">
							<Link href='/docs' className={`${linkBaseStyles} px-3 py-2 flex items-center text-sm`}>
								Docs
							</Link>
						</li>

						<li className="mt-1.5">
							<a className={`${linkBaseStyles} px-3 py-2 flex items-center text-sm`}
							target="_blank" rel="noopener noreferrer" href='https://github.com/kilgamesh/ultima'>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="fill-current text-mako"><g data-name="Layer 2"><path d="M12 1A10.89 10.89 0 001 11.77 10.79 10.79 0 008.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 00-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 011.68 1.11 2.37 2.37 0 003.2.89 2.33 2.33 0 01.7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 011.11-2.91 3.78 3.78 0 01.11-2.84s.93-.29 3 1.1a10.68 10.68 0 015.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 01.11 2.84A4.15 4.15 0 0119 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 01.75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0023 11.77 10.89 10.89 0 0012 1" data-name="github"></path></g></svg>
								<span className="ml-2">Github</span>
							</a>
						</li>
						
						<li className="mt-1.5">
							<a className={`${linkBaseStyles} px-3 py-2 flex items-center text-sm`}  
							target="_blank" rel="noopener noreferrer" href='https://discord.gg/3vJvZTP42x'>
								<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-icon="discord" data-prefix="fab" viewBox="0 0 448 512" width="18" height="18" className="fill-current text-mako"><path fill="currentColor" d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path></svg>
								<span className="ml-2">Discord</span>
							</a>
						</li>

						<li className="mt-1.5">
							<Link className={`${linkBaseStyles} px-3 py-2 flex items-center text-sm`} href='/contact'>
								Contact Us
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};
export default Navigation;