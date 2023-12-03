import TeamForm from "../../components/forms/TeamForm"
import Template from "../../components/Template"

const TeamAddPage = () => {
	return (
		<Template showHeader={true} showFooter={true}>
			<div className="flex-1 flex flex-col items-center py-5">
				<h2 className="font-bold text-center text-3xl mb-5">Ajouter une équipe</h2>

				<TeamForm />
			</div>
		</Template>
	)
}

export default TeamAddPage
