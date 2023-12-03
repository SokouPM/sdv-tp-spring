import { Link } from "react-router-dom"

import ThemeButton from "../ThemeButton"

const Header = ({ showHeader }) => {
	if (!showHeader) {
		return (
			<div className="bg-none absolute py-6 right-2 z-50">
				<ThemeButton />
			</div>
		)
	}

	return (
		<header className="bg-base-200 text-base-content shadow-lg">
			<div className="navbar bg-base-100 py-3">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost btn-circle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<Link to="/teams">⚽︎ Liste des équipes</Link>
							</li>
							<li>
								<Link to="/players">💁‍ Liste des joueurs</Link>
							</li>
							<li>
								<Link to="/teams/add">✚ Ajout d'équipes</Link>
							</li>
							<li>
								<Link to="/players/add">✚ Ajout de joueurs</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="navbar-center">
					<Link to="/" className="text-4xl font-bold">
						⚽️ FootApp ⚽️
					</Link>
				</div>
				<div className="navbar-end">
					<ThemeButton />
				</div>
			</div>
		</header>
	)
}

export default Header
