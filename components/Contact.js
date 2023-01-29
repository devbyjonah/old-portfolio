import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Contact() {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className="container-md my-5" id="contact">
			<div className="m-2 d-flex flex-column align-items-center">
				<h2 className="mb-3">Need to get in touch?</h2>
				<p>
					Use the form or reach out using the links to my socials and
					I&apos;ll get back to you as soon as possible!
				</p>
			</div>
			<Form
				netlify
				name="contact"
				action="/"
				method="POST"
				className="w-75 mx-auto"
			>
				<input type="hidden" name="form-name" value="contact" />
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
						Your email will never be shared with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="ControlTextarea1">
					<Form.Label>Message</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Let's connect!"
					/>
				</Form.Group>
				<Button variant={darkMode ? "light" : "dark"} type="submit">
					Submit
				</Button>
			</Form>
			<div
				id="socials"
				className="container-md d-flex justify-content-center my-5"
			>
				<a
					href="https://linkedin.com/in/devbyjonah"
					target="_blank"
					rel="noreferrer"
				>
					<BsLinkedin />
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/devbyjonah"
				>
					<BsGithub className="mx-5" />
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://twitter.com/devbyjonah"
				>
					<BsTwitter />
				</a>
			</div>
		</div>
	);
}
