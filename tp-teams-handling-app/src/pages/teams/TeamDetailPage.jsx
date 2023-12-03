import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import BoxMessage from "../../components/BoxMessage"
import TeamDetails from "../../components/lists/TeamDetails"
import Loader from "../../components/Loader"
import Template from "../../components/Template"

const TeamDetailPage = () => {
	const { id } = useParams()

	const [team, setTeam] = useState({})
	const [loading, setLoading] = useState(true)
	const [errorMesssage, setErrorMessage] = useState("")

	async function getTeam() {
		try {
			const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/teams/${id}`)
			setTeam(response.data)
		} catch (error) {
			switch (error.response.status) {
				case 400:
					setErrorMessage("La requête est incorrecte")

					break

				case 404:
					setErrorMessage("L'équipe que vous souhaitez afficher n'existe pas")

					break

				default:
					setErrorMessage("Une erreur est survenue lors de la récupération des équipes")

					break
			}
		}
	}

	useEffect(() => {
		getTeam().then(() => setLoading(false))
	}, [])

	const RenderTeam = () => {
		if (loading) {
			return <Loader text="Chargement des équipes" />
		}

		if (errorMesssage) {
			return <BoxMessage type="error" message={errorMesssage} />
		}

		if (team) {
			return <TeamDetails team={team} />
		}
	}

	return (
		<Template showHeader={true} showFooter={true}>
			<div className="flex-1 flex flex-col items-center py-5">
				<h2 className="font-bold text-center text-3xl mb-5">Détail de l'équipe {team.name}</h2>

				<RenderTeam />
			</div>
		</Template>
	)
}

export default TeamDetailPage
