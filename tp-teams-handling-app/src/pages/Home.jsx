import { Link } from "react-router-dom"

import Template from "../components/Template"

const Home = () => {
	return (
		<Template showHeader={true} showFooter={true}>
			<div className="hero flex-1">
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-white">
					<div className="max-w-md p-5 border-r-10 glass rounded-lg">
						<h1 className="mb-5 text-5xl font-bold">Bienvenue</h1>
						<p className="mb-5">
							Ceci est un TP de Spring Boot en backend,le but est de créer une application de gestion d'équipe de
							football.
						</p>
						<Link className="btn btn-primary" to="/teams">
							⚽️ Voir la liste des équipes
						</Link>
					</div>
				</div>
			</div>
		</Template>
	)
}

export default Home
