import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface IMeta {
	title: string;
	image: string;
	type: 'website';
	description: string;
}

interface Props {
	metaInfo?: Partial<IMeta>;
	children: ReactNode;
}

const Layout = ({children, metaInfo}: Props) => {
	const router = useRouter();

	const host = process.env.NODE_ENV !== 'production'
		? 'http://localhost:3000'
		: 'https://ultima.rest'

	const currentPath = host + router.asPath;
	const meta: IMeta = {
		title: 'Ultima - Quotes API for Gamers',
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

			<div className="bg-gray-900 text-stone-100">
				<Navigation />
				<main>
					{ children }
				</main>
				<Footer />
			</div>
		</>
	)
};
export default Layout; 