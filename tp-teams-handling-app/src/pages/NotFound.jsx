import { Link } from "react-router-dom"

import Template from "../components/Template"

const NotFound = () => {
	return (
		<Template showHeader={false} showFooter={false}>
			<div className="flex-1 flex items-center justify-center relative">
				<div className="absolute z-50">
					<h2 className="text-center text-3xl">
						<strong className="text-5xl">Oups</strong>
						<br />
						La page que vous cherchez n'existe pas <br />
						<Link to="/" className="link link-primary underline text-2xl">
							Cliquez ici pour revenir à l'accueil
						</Link>
					</h2>
				</div>
				<p className="bg-404 select-none font-black opacity-5">404</p>
			</div>
		</Template>
	)
}

export default NotFound
