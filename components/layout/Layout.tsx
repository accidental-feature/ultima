import Head from "next/head";
import { useRouter } from "next/router";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { IMeta, _DocumentProps } from "../../src/lib/interfaces";
import { fontColorStyles } from "../../styles/tailwind/text.styles";

const Layout = ({children, metaInfo}: _DocumentProps) => {
	const router = useRouter();

	// assigns host based on development or production
	const host = process.env.NODE_ENV !== 'production'
		? 'http://localhost:3000'
		: 'https://ultima.rest'
	const currentPath = host + router.asPath;

	const meta: IMeta = {
		title: 'Ultima.rest - The Quote API for Gamers',
		image: `${host}/images/ultima_log.png`,
		type: 'website',
		description: 'A free RESTful API serving quotes gamers and developers alike.',
		...metaInfo
	}

	return (
		<>
		<Head>
			<title>{meta.title}</title>
			<meta name="robots" content="follow, index" />
			<meta content={meta.description} name="description" />
			<meta property="og:url" content={currentPath} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={meta.title} />
			<meta name="twitter:description" content={meta.description} />
			<meta name="twitter:image" content={meta.image} />
			<link rel="canonical" href={currentPath} />
			<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
			<link rel="manifest" href="/icons/site.webmanifest" />
			<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#474747" />
			<meta name="msapplication-TileColor" content="#5cdcba" />
			<meta name="theme-color" content="#ffffff" />
			<meta property="og:type" content={meta.type} />
			<meta property="og:site_name" content="Ultima.rest" />
			<meta property="og:description" content={meta.description} />
			<meta property="og:title" content={meta.title} />
			<meta property="og:image" content={meta.image} />
		</Head>

			<div className={`${fontColorStyles} bg-gray-100 dark:bg-gray-900`}>
				<Navigation />
				<main className="mx-auto">
					{ children }
				</main>
				<Footer />
			</div>
		</>
	)
};
export default Layout; 