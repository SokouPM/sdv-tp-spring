import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import DeleteModal from "../DeleteModal"
import TableNavigation from "../TableNavigation"

const TeamsList = ({ teams, deleteTeam }) => {
	const navigate = useNavigate()

	const perPage = 5
	const pages = Math.ceil(teams.length / perPage)
	const [currentPage, setCurrentPage] = useState(1)
	const [idToDelete, setIdToDelete] = useState(0)

	const startIndex = (currentPage - 1) * perPage
	const visibleTeams = teams.slice(startIndex, startIndex + perPage)

	return (
		<div className="overflow-x-auto w-2/3">
			<TableNavigation currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage} />
			<table className="table table-sm table-zebra">
				<thead>
					<tr className="text-lg">
						<th>#</th>
						<th>Nom</th>
						<th>Slogan</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody className="shadow">
					{visibleTeams.map((team) => (
						<tr
							key={team.id}
							className="hover bg-base-100"
							onClick={(e) => {
								e.stopPropagation()
								navigate(`/teams/${team.id}`)
							}}
						>
							<td className="border-r border-base-300 w-max">{team.id}</td>
							<td className="border-r border-base-300 w-3/12 whitespace-nowrap">{team.name}</td>
							<td className="border-r border-base-300 w-6/12 whitespace-nowrap">{team.slogan}</td>
							<td className="w-max">
								<Link
									className="btn btn-primary whitespace-nowrap"
									to={`/teamser'/${team.id}/update`}
									onClick={(e) => e.stopPropagation()}
								>
									Modifier
								</Link>
							</td>
							<td className="w-max">
								<button
									className="btn btn-error text-base-100 whitespace-nowrap"
									onClick={(e) => {
										e.stopPropagation()
										setIdToDelete(team.id)
										document.querySelector("#delete-modal").showModal()
									}}
								>
									Supprimer
								</button>
							</td>
							<td className="w-max">
								<Link
									className="btn btn-outline bg-base-100 whitespace-nowrap"
									to={`/players/add?team=${team.id}`}
									onClick={(e) => e.stopPropagation()}
								>
									Ajouter un joueur
								</Link>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr className="text-lg">
						<td>#</td>
						<td>Nom</td>
						<td>Slogan</td>
						<td>Actions</td>
					</tr>
				</tfoot>
			</table>
			<TableNavigation currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage} />

			<DeleteModal idToDelete={idToDelete} deleteFunction={deleteTeam} />
		</div>
	)
}

export default TeamsList
