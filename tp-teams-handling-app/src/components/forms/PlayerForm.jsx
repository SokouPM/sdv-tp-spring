import axios from "axios"
import { Field, Form, Formik } from "formik"
import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"

import BoxMessage from "../BoxMessage"
import Loader from "../Loader"

const schema = yup.object().shape({
	name: yup
		.string()
		.max(200, "Le nom du joueur ne doit pas dépasser 200 caractères")
		.required("Le nom du joueur est requis"),
	number: yup
		.number()
		.typeError("Le numéro du joueur doit être un nombre")
		.min(1, "Le numéro du joueur doit être supérieur à 0")
		.max(99, "Le numéro du joueur doit être inférieur à 100")
		.required("Le numéro du joueur est requis"),
	position: yup.string().required("La position du joueur est requise"),
	team: yup.string().required("L'équipe du joueur est requise"),
})

const PlayerForm = ({ playerToUpdate, teamParamId }) => {
	const [errorMessage, setErrorMessage] = useState("")
	const [successMessage, setSuccessMessage] = useState("")
	const [loading, setLoading] = useState(false)

	const [teams, setTeams] = useState([])
	const [teamCallLoading, setTeamCallLoading] = useState(true)
	const [teamCallError, setTeamCallError] = useState("")

	const navigate = useNavigate()
	const positions = ["Gardien de but", "Défenseur", "Milieu de terrain", "Attaquant"]
	const initialValues = playerToUpdate
		? {
				name: playerToUpdate.name,
				number: playerToUpdate.number,
				position: playerToUpdate.position,
				team: playerToUpdate.team.id,
		  }
		: { name: "", number: "", position: "", team: teamParamId || "" }

	const handleFormSubmit = useCallback(
		async ({ name, number, position, team }) => {
			try {
				!loading && setLoading(true)
				playerToUpdate
					? await axios.put(`${process.env.REACT_APP_API_BASE_URL}/players/${playerToUpdate.id}`, {
							name,
							number,
							position,
							team: { id: Number(team) },
					  })
					: await axios.post(`${process.env.REACT_APP_API_BASE_URL}/players`, {
							name,
							number,
							position,
							team: { id: Number(team) },
					  })
				errorMessage && setErrorMessage("")
				setSuccessMessage(
					playerToUpdate
						? "Le joueur a bien été mis à jour vous allez être redirigé vers la liste des joueurs"
						: "Le joueur a bien été créé vous allez être redirigé vers la liste des joueurs",
				)
				setTimeout(() => {
					navigate("/players")
				}, 2000)
			} catch (error) {
				setLoading(false)

				switch (error.response.status) {
					case 400:
						setErrorMessage("La requête est incorrecte")

						break

					case 404:
						setErrorMessage("Le joueur que vous souhaitez modifier n'existe pas")

						break

					default:
						setErrorMessage("Une erreur est survenue lors de la modification du joueur")

						break
				}
			}
		},
		[errorMessage, loading, playerToUpdate],
	)

	async function getTeams() {
		try {
			const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/teams`)
			setTeams(response.data)
		} catch (error) {
			switch (error.response.status) {
				case 400:
					setTeamCallError("La requête est incorrecte")

					break

				default:
					setTeamCallError("Une erreur est survenue lors de la récupération des équipes")

					break
			}
		}
	}

	useEffect(() => {
		getTeams().then(() => setTeamCallLoading(false))
	}, [])

	const RenderTeamsSelect = ({ errors, touched }) => {
		if (teamCallLoading) {
			return <Loader text="Chargement des équipes" />
		}

		if (teamCallError) {
			return <BoxMessage type="error" message={teamCallError} />
		}

		if (teams && teams.length) {
			return (
				<label className="form-control w-full mb-6">
					<div className="label">
						<span className="label-text text-lg font-bold">4️⃣ L'équipe du joueur</span>
					</div>

					<Field
						className={`input input-bordered w-full ${
							errors.team && touched.team && "border-2 input-error error-animation"
						}`}
						id="team"
						name="team"
						as="select"
						defaultValue=""
					>
						<option value="" hidden selected>
							Choisissez une équipe
						</option>
						{teams.map((team) => (
							<option key={team.id} value={team.id}>
								{team.name}
							</option>
						))}
					</Field>

					{errors.team && touched.team && (
						<div className="label">
							<span className="label-text"></span>
							<span className="label-text text-error font-bold text-right">{errors.team}</span>
						</div>
					)}
				</label>
			)
		}

		if (teams && !teams.length) {
			return <BoxMessage type="error" message="Vous devez créer une équipe avant de créer des joueurs" />
		}
	}

	return (
		<Formik initialValues={initialValues} onSubmit={handleFormSubmit} validationSchema={schema}>
			{({ errors, touched }) => (
				<Form className="w-2/4 bg-base-100 rounded shadow p-5">
					{errorMessage && (
						<div className="my-5">
							<BoxMessage type="error" message={errorMessage} />
						</div>
					)}
					{successMessage && (
						<div className="my-5">
							<BoxMessage type="success" message={successMessage} />
						</div>
					)}

					<label className="form-control w-full mb-6">
						<div className="label">
							<span className="label-text text-lg font-bold">1️⃣ Le nom du joueur</span>
						</div>
						<Field
							className={`input input-bordered w-full ${
								errors.name && touched.name && "border-2 input-error error-animation"
							}`}
							id="name"
							name="name"
							placeholder="John Doe"
						/>
						{errors.name && touched.name && (
							<div className="label">
								<span className="label-text"></span>
								<span className="label-text text-error font-bold text-right">{errors.name}</span>
							</div>
						)}
					</label>

					<label className="form-control w-full mb-6">
						<div className="label">
							<span className="label-text text-lg font-bold">2️⃣ Le numéro du joueur</span>
						</div>
						<Field
							className={`input input-bordered w-full ${
								errors.number && touched.number && "border-2 input-error error-animation"
							}`}
							id="number"
							name="number"
							placeholder="1 - 99"
						/>
						{errors.number && touched.number && (
							<div className="label">
								<span className="label-text"></span>
								<span className="label-text text-error font-bold text-right">{errors.number}</span>
							</div>
						)}
					</label>

					<label className="form-control w-full mb-6">
						<div className="label">
							<span className="label-text text-lg font-bold">3️⃣ La position du joueur</span>
						</div>
						<Field
							className={`input input-bordered w-full ${
								errors.position && touched.position && "border-2 input-error error-animation"
							}`}
							id="position"
							name="position"
							as="select"
							defaultValue=""
						>
							<option value="" selected hidden>
								Choisissez un poste
							</option>
							{positions.map((position, index) => (
								<option key={index} value={position}>
									{position}
								</option>
							))}
						</Field>

						{errors.position && touched.position && (
							<div className="label">
								<span className="label-text"></span>
								<span className="label-text text-error font-bold text-right">{errors.position}</span>
							</div>
						)}
					</label>

					<RenderTeamsSelect errors={errors} touched={touched} />

					{teams && teams.length ? (
						<div className="flex justify-center items-center">
							{loading ? (
								<button className="btn btn-primary btn-wide" disabled>
									<span className="loading loading-spinner"></span>
									Chargement...
								</button>
							) : playerToUpdate ? (
								<button type="submit" className="btn btn-primary btn-wide">
									Modifier le joueur
								</button>
							) : (
								<button type="submit" className="btn btn-primary btn-wide">
									Créer le joueur
								</button>
							)}
						</div>
					) : null}
				</Form>
			)}
		</Formik>
	)
}

export default PlayerForm
