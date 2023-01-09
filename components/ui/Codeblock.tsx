import { ChildProp } from "../../src/types";
const Codeblock = ({children}: ChildProp) => {
	return (
		<pre className="
			prism-code language-javascript rounded-md whitespace-pre-wrap
			overflow-auto font-KH tracking-[.2em] lg:text-base text-xs bg-slate-800 text-white p-6
			border-gray-500 border-3 rounded-sm rounded-tl-[40px]
		">{ children }</pre>
	)
};
export default Codeblock;