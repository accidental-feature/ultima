import Layout from "../components/Layout";

const docs = () => {
	const metaInfo = {
		title: 'Ultima - Catalog',
		description: 'Catalog of Games on Ultima API',
		image: '/images/ultima_logo.png'
	}
	return (
	<div>
			<Layout metaInfo={metaInfo}>
				<h1>Catalog</h1>
			</Layout>
	</div>
	);
};
export default docs;