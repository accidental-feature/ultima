type Props = {
	avatarUrl: string,
	url: string
	pfpColor?: string
}
const Contributor = ({avatarUrl,  url, pfpColor}: Props) => {
	return ( 
		<li className={`contributor relative w-12 h-12 z-0 hover:z-10`}>
			<a className="contributor-link w-full" 
			href={url} target="_blank" rel="noopener noreferrer">
				<img className={
					`rounded-full ${pfpColor} scale-110 hover:border-2 hover:scale-150`
				} 
				src={avatarUrl} alt="Logo"/>
			</a>
		</li>
	);
};
export default Contributor;