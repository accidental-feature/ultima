import { ChildProp } from "../../src/types";
const Codeblock = ({children}: ChildProp) => {
	return (
		<pre className="
			prism-code language-javascript rounded-md whitespace-pre-wrap
			overflow-auto lg:text-base text-xs bg-slate-800 text-white p-6
		">{ children }</pre>
	)
};
export default Codeblock;