import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { baseButtonStyles, labelStyles, inputStyles, headerTextStyle  } from "../../styles/tailwind";
import Layout from "../layout/Layout";
import Link from "next/link";

const RequestForm = () => {
	const [ success, setSuccess ] = useState(false);
	const form = useRef(null);
	
	useEffect(() => {}, [success]);

	const sendRequest = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		emailjs.init(process.env.EMAIL_PUBLIC_KEY);

		if( form.current ) {
			emailjs
			.sendForm(
				process.env.EMAIL_SERVICE_ID,
				process.env.EMAIL_TEMPLATE_ID,
				form.current
			).then((result: { text: any }) => {
					console.log(result.text);
					setSuccess(true);
			}, (error: { text: any }) => {
				console.error(error)
			})	
		}
	}

  return (
	<>
	<form 
	className="gap-4 max container relative lg:mx-auto px-5 max-w-4xl pb-10 mt-5" 
	ref={form} onSubmit={sendRequest}>
		<div className={`flex flex-col mb-4`}>
			<label className={`${labelStyles}`}>Name*</label>
			<input className={`${inputStyles} required:border-cloud-kh`}
			type="text" name="user_name" placeholder="Cecil Harvey"  required/>
		</div>


		<div className={`flex flex-col mb-4`}>
			<label className={`${labelStyles}`}>Email*</label>
			<input className={`${inputStyles} required:border-cloud-kh`} type="email" 
			name="user_email"  placeholder="cecil@redwings.com" required />
		</div>
		
		
		<div className={`flex flex-col mb-4`}>
			<label className={`${labelStyles}`}>Your Website</label>
			<input className={`${inputStyles}`} type="url" name="user_site" placeholder="https://redwings.com"/>
		</div>

		<div className={`flex flex-col mb-4`}>
			<label className={`${labelStyles}`}>Favorite Game</label>
			<input className={`${inputStyles}`} type="text" 
			name="user_game" placeholder="Kingdom Hearts II"/>
		</div>

		<div className={`flex flex-col mb-4`}>
			<label className={`${labelStyles}`}>Message*</label>
			<textarea  className={`${inputStyles} required:border-cloud-kh resize-none rounded-sm h-56 p-2.5`} 
			name="message"  placeholder="Your message begins here..." required autoComplete="false"/>
		</div>
			
		<input type="submit" className={`
			${baseButtonStyles} cursor-pointer 
			bg-mako hover:brightness-125
			self-end float-right justify-self-end
			mx-auto ml-auto invalid:border-cloud-kh
		`} 
		value="Send" />
	</form>
	{success &&
		<aside className={`fixed top-0 z-50 text-center bg-blackish`}>
			<div className={
				`absolute left-1/2 top-1/3 
				w-[36rem] max-w-[90%] rounded-md
				translate-x-[-50%] px-7 py-4
				bg-slate-200 dark:bg-slate-800`
			}>
				<h3 className={`${headerTextStyle} mb-5`}>Success!</h3>
				<p className="text-lg">Your message was received! We will get back to you soon!</p>
				<Link className={`${baseButtonStyles} cursor-pointer mt-5
				bg-mako hover:brightness-125`} 
				href={'/'}>
					Home
				</Link>
			</div>
		</aside>
	}
	</>
  )
};
export default RequestForm;