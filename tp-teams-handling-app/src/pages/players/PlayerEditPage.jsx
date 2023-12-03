import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import BoxMessage from "../../components/BoxMessage"
import PlayerForm from "../../components/forms/PlayerForm"
import Loader from "../../components/Loader"
import Template from "../../components/Template"

const PlayerEditPage = () => {
	const { id } = useParams()

	const [loading, setLoading] = useState(true)
	const [errorMessage, setErrorMessage] = useState("")
	const [playerToUpdate, setPlayerToUpdate] = useState({})

	async function getPlayerToUpdateById(id) {
		try {
			const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/players/${id}`)
			setPlayerToUpdate(response.data)
		} catch (error) {
			switch (error.response.status) {
				case 400:
					setErrorMessage("La requête est incorrecte")

					break

				case 404:
					setErrorMessage("Le joueur que vous souhaitez modifier n'existe pas")

					break

				default:
					setErrorMessage("Une erreur est survenue lors de la récupération du joueur")
			}
		}
	}

	useEffect(() => {
		if (id) {
			getPlayerToUpdateById(id).then(() => setLoading(false))
		}
	}, [])

	const RenderPlayerToUpdate = () => {
		if (loading) {
			return <Loader text="Chargement des informations du joueur" />
		}

		if (errorMessage) {
			return <BoxMessage type="error" message={errorMessage} />
		}

		if (playerToUpdate) {
			return <PlayerForm playerToUpdate={playerToUpdate} />
		}
	}

	return (
		<Template showHeader={true} showFooter={true}>
			<div className="flex-1 flex flex-col items-center py-5">
				<h2 className="font-bold text-center text-3xl mb-5">Ajouter un Joueur</h2>
				<RenderPlayerToUpdate />
			</div>
		</Template>
	)
}

export default PlayerEditPage
