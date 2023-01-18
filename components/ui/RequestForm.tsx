import { useRef } from "react";
import emailjs from '@emailjs/browser';

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
  	<form className="text-mako" ref={form} onSubmit={sendRequest}>
		<input type="text" name="user_name" placeholder="Your Name"  required/>
		<input type="email" name="user_email"  placeholder="Your Email" required />
		<input type="url" name="user_site" placeholder="Your Website (optional)"/>
		<textarea name="message"  placeholder="Your message begins here..." />
		
		<label>Share a Gif?</label>
		<input type="file"name="user_gif" accept=".gif" />
		<input type="submit" value="Send" />
	</form>
  )
};
export default RequestForm;