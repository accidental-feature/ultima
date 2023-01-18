import { useState } from "react";

export const useForm = (callback: any, initialState = {}) => {
	const [values, setValues] = useState(initialState);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [event.target.name]: event.target.value })
	}
}