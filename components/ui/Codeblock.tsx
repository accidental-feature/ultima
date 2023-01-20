import { ChildProp } from "../../src/lib/types";
import { codeblockStyles } from "../../styles/tailwind/container.styles";
const Codeblock = ({children}: ChildProp) => {
	return (
		<pre className={`${codeblockStyles}`}>
			{ children }
		</pre>
	)
};
export default Codeblock;