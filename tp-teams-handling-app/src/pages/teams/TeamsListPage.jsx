import axios from "axios"
import { useEffect, useState } from "react"

import BoxMessage from "../../components/BoxMessage"
import TeamsList from "../../components/lists/TeamsList"
import Loader from "../../components/Loader"
import Template from "../../components/Template"

const TeamsListPage = () => {
	const [teams, setTeams] = useState([])
	const [loading, setLoading] = useState(true)
	const [errorMesssage, setErrorMessage] = useState("")

	const [deteteSuccessMessage, setDeleteSuccessMessage] = useState("")
	const [deleteErrorMessage, setDeleteErrorMessage] = useState("")

	async function getTeams() {
		try {
			const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/teams`)
			setTeams(response.data)
		} catch (error) {
			switch (error.response.status) {
				case 400:
					setErrorMessage("La requête est incorrecte")

					break

				default:
					setErrorMessage("Une erreur est survenue lors de la récupération des équipes")

					break
			}
		}
	}

	async function deleteTeam(id) {
		try {
			await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/teams/${id}`)
			await getTeams().then(() => setLoading(false))
			setDeleteSuccessMessage(`L'équipe a bien été supprimée`)
		} catch (error) {
			switch (error.response.status) {
				case 400:
					setDeleteErrorMessage("La requête est incorrecte")

					break

				default:
					setDeleteErrorMessage("Une erreur est survenue lors de la suppression de l'équipe")

					break
			}
		}
	}

	useEffect(() => {
		getTeams().then(() => setLoading(false))
	}, [])

	useEffect(() => {
		setTimeout(() => {
			deteteSuccessMessage && setDeleteSuccessMessage("")
			deleteErrorMessage && setDeleteErrorMessage("")
		}, 3000)
	}, [deteteSuccessMessage, deleteErrorMessage])

	const RenderTeams = () => {
		if (loading) {
			return <Loader text="Chargement des équipes" />
		}

		if (errorMesssage) {
			return <BoxMessage type="error" message={errorMesssage} />
		}

		if (teams && teams.length) {
			return <TeamsList teams={teams} deleteTeam={deleteTeam} />
		}

		if (teams && !teams.length) {
			return <BoxMessage type="info" message="Aucune équipe enregistrée" />
		}
	}

	return (
		<Template showHeader={true} showFooter={true}>
			<div className="flex-1 flex flex-col items-center py-5">
				<h2 className="font-bold text-center text-3xl mb-5">Liste des équipes</h2>

				{deteteSuccessMessage && <BoxMessage type="success" message={deteteSuccessMessage} />}
				{deleteErrorMessage && <BoxMessage type="error" message={deleteErrorMessage} />}

				<RenderTeams />
			</div>
		</Template>
	)
}

export default TeamsListPage
