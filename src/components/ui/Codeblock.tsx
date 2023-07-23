import { codeblockStyles } from "../../styles/tailwind/container.styles";

const Codeblock = ({children}: { children: React.ReactNode }) => {
	return (
		<pre className={`${codeblockStyles}`}>
			{ children }
		</pre>
	)
};
export default Codeblock;