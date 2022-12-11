import Codeblock from "./ui/Codeblock";

const FetchExample = ({head, link, id, mb, multiple}: 
	{head: string, link: string, id: string, mb: string, multiple?: boolean}) => {
	return (
		<div id={id} className={`${mb}`}>
			<h3 className='lg:text-2xl text-xl font-bold mb-4 text-wavy'>{ head }</h3>
			<Codeblock>
				<div>
					<span className="text-mako">fetch</span>
					<span className="text-pink">{`("${link}")`}</span>
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
			
			<p className='py-5 flex items-center'>
				<span className='mr-2'>➡️</span>
				<span className="italic text-base">Output</span>
				<span className='ml-2'>➡️</span>
			</p>
			
			<Codeblock>
				<div>
					<p>
						{multiple 
							? <>
									<span>{'[\n'}</span>
									<span className="inline-block ml-4">{"{"}</span>
								</>
							: '{'
						}
					</p>
					
					<p className={`${multiple ? 'ml-8' : 'ml-4'}`}>
						<span className="text-mako">id:</span><span className="text-pink">{" ...,"}</span>
					</p>

					<p className={`${multiple ? 'ml-8' : 'ml-4'}`}>
						<span className="text-mako">quote:</span><span className="text-pink">{` "...",`}</span>
					</p>

					<p className={`${multiple ? 'ml-8' : 'ml-4'}`}>
						<span className="text-mako">character:</span><span className="text-pink">{` "...",`}</span>
					</p>

					<p className={`${multiple ? 'ml-8' : 'ml-4'}`}>
						<span className="text-mako">title:</span><span className="text-pink">{` "..."`}</span>
					</p>

					<p className={`${multiple ? 'ml-8' : 'ml-4'}`}>
						<span className="text-mako">esrb:</span><span className="text-pink">{` "...",`}</span>
					</p>
					
					<p className={`${multiple ? 'ml-8' : 'ml-4'}`}>
						<span className="text-mako">release:</span><span className="text-pink">{` ...,`}</span>
					</p>
					{multiple 
						? <p>
								<span className="inline-block ml-4">
									{"},\n"}
									{"{...}, * 4\n"}
								</span>
								{"\n]"}
							</p>
						: <p>{"}"}</p>
					}
				</div>
				
			</Codeblock>
		</div>
	);
};
export default FetchExample;