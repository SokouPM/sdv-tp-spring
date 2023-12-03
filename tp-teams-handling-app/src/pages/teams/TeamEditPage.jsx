import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import BoxMessage from "../../components/BoxMessage"
import TeamForm from "../../components/forms/TeamForm"
import Loader from "../../components/Loader"
import Template from "../../components/Template"

const TeamAddPage = () => {
	const { id } = useParams()

	const [loading, setLoading] = useState(true)
	const [errorMessage, setErrorMessage] = useState("")
	const [teamToUpdate, setTeamToUpdate] = useState({})

	const getTeamToUpdateById = async (id) => {
		try {
			const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/teams/${id}`)
			setTeamToUpdate(response.data)
		} catch (error) {
			switch (error.response.status) {
				case 400:
					setErrorMessage("La requête est incorrecte")

					break

				case 404:
					setErrorMessage("L'équipe que vous souhaitez modifier n'existe pas")

					break

				default:
					setErrorMessage("Une erreur est survenue lors de la récupération de l'équipe")
			}
		}
	}

	useEffect(() => {
		if (id) {
			getTeamToUpdateById(id).then(() => setLoading(false))
		}
	}, [])

	const RenderTeamToUpdate = () => {
		if (loading) {
			return <Loader text="Chargement des informations de l'équipe" />
		}

		if (errorMessage) {
			return <BoxMessage type="error" message={errorMessage} />
		}

		if (teamToUpdate) {
			return <TeamForm teamToUpdate={teamToUpdate} />
		}
	}

	return (
		<Template showHeader={true} showFooter={true}>
			<div className="flex-1 flex flex-col items-center py-5">
				<h2 className="font-bold text-center text-3xl mb-5">Modifier l'équipe {teamToUpdate.name}</h2>
				<RenderTeamToUpdate />
			</div>
		</Template>
	)
}

export default TeamAddPage
