import axios from "axios"
import { Field, Form, Formik } from "formik"
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"

import BoxMessage from "../BoxMessage"

const schema = yup.object().shape({
	name: yup
		.string()
		.max(200, "Le nom de l'équipe ne doit pas dépasser 200 caractères")
		.required("Le nom de l'équipe est requis"),
	slogan: yup
		.string()
		.max(500, "Le slogan de l'équipe ne doit pas dépasser 500 caractères")
		.required("Le slogan de l'équipe est requis"),
})

const TeamForm = ({ teamToUpdate }) => {
	const [errorMessage, setErrorMessage] = useState("")
	const [successMessage, setSuccessMessage] = useState("")
	const [loading, setLoading] = useState(false)

	const navigate = useNavigate()
	const initialValues = teamToUpdate
		? { name: teamToUpdate.name, slogan: teamToUpdate.slogan }
		: { name: "", slogan: "" }

	const handleFormSubmit = useCallback(
		async ({ name, slogan }) => {
			try {
				!loading && setLoading(true)
				teamToUpdate
					? await axios.put(`${process.env.REACT_APP_API_BASE_URL}/teams/${teamToUpdate.id}`, { name, slogan })
					: await axios.post(`${process.env.REACT_APP_API_BASE_URL}/teams`, { name, slogan })
				errorMessage && setErrorMessage("")
				setSuccessMessage(
					teamToUpdate
						? "L'équipe a bien été mise à jour vous allez être redirigé vers la liste des équipes"
						: "L'équipe a bien été créée vous allez être redirigé vers la liste des équipes",
				)
				setTimeout(() => {
					navigate("/teams")
				}, 2000)
			} catch (error) {
				setLoading(false)

				switch (error.response.status) {
					case 400:
						setErrorMessage("La requête est incorrecte")

						break

					case 404:
						setErrorMessage("L'équipe que vous souhaitez modifier n'existe pas")

						break

					default:
						setErrorMessage("Une erreur est survenue lors de la modification de l'équipe")

						break
				}
			}
		},
		[errorMessage, loading, teamToUpdate],
	)

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
							<span className="label-text text-lg font-bold">1️⃣ Le nom de l'équipe</span>
						</div>
						<Field
							className={`input input-bordered w-full ${
								errors.name && touched.name && "border-2 input-error error-animation"
							}`}
							id="name"
							name="name"
							placeholder="Le bayern de Monique"
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
							<span className="label-text text-lg font-bold">2️⃣ Le slogan de l'équipe</span>
						</div>
						<Field
							className={`input input-bordered w-full ${
								errors.slogan && touched.slogan && "border-2 input-error error-animation"
							}`}
							id="slogan"
							name="slogan"
							placeholder="C'est pas plus mieux que si c'était pire"
						/>
						{errors.slogan && touched.slogan && (
							<div className="label">
								<span className="label-text"></span>
								<span className="label-text text-error font-bold text-right">{errors.slogan}</span>
							</div>
						)}
					</label>

					<div className="flex justify-center items-center">
						{loading ? (
							<button className="btn btn-primary btn-wide" disabled>
								<span className="loading loading-spinner"></span>
								Chargement...
							</button>
						) : teamToUpdate ? (
							<button type="submit" className="btn btn-primary btn-wide">
								Modifier l'équipe
							</button>
						) : (
							<button type="submit" className="btn btn-primary btn-wide">
								Créer l'équipe
							</button>
						)}
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default TeamForm
