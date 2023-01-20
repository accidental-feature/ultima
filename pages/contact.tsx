import Layout from "../components/layout/Layout";
import emailjs from "@emailjs/browser";
import RequestForm from "../components/ui/RequestForm";
import { useEffect } from "react";

const contact = () => {
	const metaInfo = {
		title: 'Ultima - Request Form',
		description: 'Request the addition of quotes. Additions are made constantly so look out for an update when your request is added.',
		image: '/images/ultima_logo.png'
	}

	useEffect(() => {
		const checkKey = async () => {
			process.env.EMAIL_PUBLIC_KEY &&
				await emailjs.init(process.env.EMAIL_PUBLIC_KEY)

			process.env.EMAIL_PUBLIC_KEY &&
				console.log('Email init');
		}

		checkKey()
	}, [])
	
	return (
	<div>
			<Layout metaInfo={metaInfo}>
				<RequestForm />
			</Layout>
	</div>
	);
};
export default contact;