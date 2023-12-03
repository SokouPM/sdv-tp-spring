import axios from "axios"
import { useEffect, useState } from "react"

import BoxMessage from "../../components/BoxMessage"
import PlayersList from "../../components/lists/PlayersList"
import Loader from "../../components/Loader"
import Template from "../../components/Template"

const PlayersListPage = () => {
	const [players, setPlayers] = useState([])
	const [loading, setLoading] = useState(true)
	const [errorMesssage, setErrorMessage] = useState("")

	const [deteteSuccessMessage, setDeleteSuccessMessage] = useState("")
	const [deleteErrorMessage, setDeleteErrorMessage] = useState("")

	async function getPlayers() {
		try {
			const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/players`)
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
			return <BoxMessage type="info" message="Aucun joueur enregistré" />
		}
	}

	return (
		<Template showHeader={true} showFooter={true}>
			<div className="flex-1 flex flex-col items-center py-5">
				<h2 className="font-bold text-center text-3xl mb-5">Liste des joueurs</h2>

				{deteteSuccessMessage && <BoxMessage type="success" message={deteteSuccessMessage} />}
				{deleteErrorMessage && <BoxMessage type="error" message={deleteErrorMessage} />}

				<RenderPlayers />
			</div>
		</Template>
	)
}

export default PlayersListPage
