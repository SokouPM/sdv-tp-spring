import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import BoxMessage from "../BoxMessage"
import Loader from "../Loader"

import PlayersList from "./PlayersList"

const TeamDetails = ({ team }) => {
	const [players, setPlayers] = useState([])
	const [loading, setLoading] = useState(true)
	const [errorMesssage, setErrorMessage] = useState("")

	const [deteteSuccessMessage, setDeleteSuccessMessage] = useState("")
	const [deleteErrorMessage, setDeleteErrorMessage] = useState("")

	async function getPlayers() {
		try {
			const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/teams/${team.id}/players`)
			setPlayers(response.data)
		} catch (error) {
			switch (error.response.status) {
				case 400:
					setErrorMessage("La requête est incorrecte")

					break

				default:
					setErrorMessage("Une erreur est survenue lors de la récupération des joueurs")

					break
			}
		}
	}

	async function deletePlayer(id) {
		try {
			await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/players/${id}`)
			await getPlayers().then(() => setLoading(false))
			setDeleteSuccessMessage(`Le joueur a bien été supprimé`)
		} catch (error) {
			switch (error.response.status) {
				case 400:
					setDeleteErrorMessage("La requête est incorrecte")

					break

				default:
					setDeleteErrorMessage("Une erreur est survenue lors de la suppression du joueur")

					break
			}
		}
	}

	useEffect(() => {
		getPlayers().then(() => setLoading(false))
	}, [])

	useEffect(() => {
		setTimeout(() => {
			deteteSuccessMessage && setDeleteSuccessMessage("")
			deleteErrorMessage && setDeleteErrorMessage("")
		}, 3000)
	}, [deteteSuccessMessage, deleteErrorMessage])

	const RenderPlayers = () => {
		if (loading) {
			return <Loader text="Chargement des joueurs" />
		}

		if (errorMesssage) {
			return <BoxMessage type="error" message={errorMesssage} />
		}

		if (players && players.length) {
			return <PlayersList players={players} deletePlayer={deletePlayer} />
		}

		if (players && !players.length) {
			return <BoxMessage type="info" message="Aucun joueur pour cette équipe" />
		}
	}

	return (
		<div className="w-2/3">
			<ul className="text-center mb-5">
				<li className="text-lg">
					<span className="font-bold">ID:</span> {team.id}
				</li>
				<li className="text-lg">
					<span className="font-bold">Nom:</span> {team.name}
				</li>
				<li className="text-lg">
					<span className="font-bold">Slogan:</span> {team.slogan}
				</li>
			</ul>

			<h3 className="divider divider-primary text-3xl mt-10 mb-10">Joueurs de l'équipe {team.name}</h3>

			<div className="flex justify-center my-5">
				<Link className="btn btn-outline bg-base-100 whitespace-nowrap" to={`/players/add?team=${team.id}`}>
					Ajouter un joueur
				</Link>
			</div>

			{deteteSuccessMessage && <BoxMessage type="success" message={deteteSuccessMessage} />}
			{deleteErrorMessage && <BoxMessage type="error" message={deleteErrorMessage} />}

			<RenderPlayers />
		</div>
	)
}

export default TeamDetails
