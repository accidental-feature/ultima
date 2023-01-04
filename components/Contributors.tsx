import { headerTextStyle } from "../src/lib/stylesLib";
import Contributor from "./ui/Contributor";

const Contributors = () => {
	return (
		<section className="container relative mx-auto px-2 max-w-4xl py-3 mb-3" id='contributors'>
			<h2 className={headerTextStyle + ' mb-4 text-center'}>Contributors</h2>

			<ul className="contributors w-11/12 mx-auto mt-3">
				<Contributor pfpColor='border-hundred' url="http://github.com/0hundred0" avatarUrl="https://avatars.githubusercontent.com/u/67961742?v=4" />
				<Contributor pfpColor='border-mako' url="https://github.com/Jaymelfah" avatarUrl="https://avatars.githubusercontent.com/u/106558709?v=4" />
				<Contributor pfpColor='border-mako' url="https://github.com/joseph-macfarlane" avatarUrl="https://avatars.githubusercontent.com/u/92747837?v=4" />
			</ul>
		</section>
	)
};

export default Contributors;