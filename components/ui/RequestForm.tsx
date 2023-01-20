import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { baseButtonStyles, labelStyles, inputStyles, inputFileStyles } from "../../styles/tailwind";

const RequestForm = () => {
	const form = useRef(null);

	// Change ref into string via state on submit
	const sendRequest = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		form.current &&
		emailjs
				.sendForm(
					process.env.EMAIL_SERVICE_ID,
					process.env.EMAIL_TEMPLATE_ID,
					form.current,
					process.env.EMAIL_PUBLIC_KEY
				).then((result: { text: any }) => {
					console.log(result.text)
				}, (error: { text: any }) => {
					console.error(error)
				})	
	}

  return (
  	<form 
	className="gap-4 max container relative lg:mx-auto px-3 max-w-4xl py-10 mt-10" 
	ref={form} onSubmit={sendRequest}>
		<div className={`flex flex-col mb-4`}>
			<label className={`${labelStyles}`}>Name</label>
			<input className={`${inputStyles}`}
			 type="text" name="user_name" placeholder="Your Name"  required/>
		</div>


		<div className={`flex flex-col mb-4`}>
			<label className={`${labelStyles}`}>Email</label>
			<input className={`${inputStyles}`} type="email" name="user_email"  placeholder="Your Email" required />
		</div>
		
		
		<div className={`flex flex-col mb-4`}>
			<label className={`${labelStyles}`}>Your Website (Optional)</label>
			<input className={`${inputStyles}`} type="url" name="user_site" placeholder="Your Website (optional)"/>
		</div>

		<div className={`flex flex-col mb-4`}>
			<label className={`${labelStyles}`}>Message</label>
			<textarea  className={`${inputStyles} resize-none rounded-sm h-56 p-2.5`} name="message"  placeholder="Your message begins here..." />
		</div>
		
		<div className="flex justify-between flex-wrap gap-y-10">
			<div>
				<label htmlFor="share_gif" className={`${labelStyles} block`}>
					Share a Gif?
				</label>
				<input id="share_gif" className={`
					inline-block
					file:px-6 file:py-3 file:mr-2  
					file:uppercase file:font-bold file:text-sm
					file:bg-mako hover:file:brightness-125 file:text-stone-900
					file:inline-flex file:items-center 
					file:shadow file:rounded-md
					file:outline-none focus:file:outline-none file:border-none
				`}
				type="file"name="user_gif" accept=".gif" />
			</div>
			
			<input type="submit" className={`
				${baseButtonStyles} cursor-pointer 
				bg-mako hover:brightness-125
				self-end float-right mx-auto sm:mx-0 ml-auto
			`} 
			value="Send" />
		</div>	
	</form>
  )
};
export default RequestForm;