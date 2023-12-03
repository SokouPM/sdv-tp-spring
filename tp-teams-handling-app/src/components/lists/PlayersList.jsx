import { useState } from "react"
import { Link } from "react-router-dom"

import DeleteModal from "../DeleteModal"
import TableNavigation from "../TableNavigation"

const PlayersList = ({ players, deletePlayer }) => {
	const perPage = 5
	const pages = Math.ceil(players.length / perPage)
	const [currentPage, setCurrentPage] = useState(1)
	const [playerIdToDelete, setPlayerIdToDelete] = useState(0)

	const startIndex = (currentPage - 1) * perPage
	const visiblePlayers = players.slice(startIndex, startIndex + perPage)

	return (
		<div className="overflow-x-auto">
			<table className="table table-sm table-zebra">
				<thead>
					<tr className="text-lg">
						<th>#</th>
						<th>Nom</th>
						<th>Numéro</th>
						<th>Poste</th>
						<th>Équipe</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody className="shadow">
					{visiblePlayers.map((player) => (
						<tr key={player.id} className="hover bg-base-100">
							<td className="border-r border-base-300 w-max">{player.id}</td>
							<td className="border-r border-base-300 w-6/12 whitespace-nowrap">{player.name}</td>
							<td className="border-r border-base-300 w-max">{player.number}</td>
							<td className="border-r border-base-300 w-6/12 whitespace-nowrap">{player.position}</td>
							<td className="border-r border-base-300 w-6/12 whitespace-nowrap">{player.team.name}</td>
							<td className="w-max">
								<Link className="btn btn-primary whitespace-nowrap" to={`/players/${player.id}/update`}>
									Modifier
								</Link>
							</td>
							<td className="w-max">
								<button
									className="btn btn-error text-base-100 whitespace-nowrap"
									onClick={() => {
										setPlayerIdToDelete(player.id)
										document.querySelector("#delete-modal").showModal()
									}}
								>
									Supprimer
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr className="text-lg">
						<td>#</td>
						<td>Nom</td>
						<td>Numéro</td>
						<td>Poste</td>
						<td>Équipe</td>
						<td>Actions</td>
					</tr>
				</tfoot>
			</table>
			<TableNavigation currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage} />

			<DeleteModal idToDelete={playerIdToDelete} deleteFunction={deletePlayer} />
		</div>
	)
}

export default PlayersList
