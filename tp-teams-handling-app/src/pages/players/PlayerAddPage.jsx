import { useLocation } from "react-router-dom"

import PlayerForm from "../../components/forms/PlayerForm"
import Template from "../../components/Template"

const PlayerAddPage = () => {
	const location = useLocation()
	const teamParamId = new URLSearchParams(location.search).get("team")

	return (
		<Template showHeader={true} showFooter={true}>
			<div className="flex-1 flex flex-col items-center py-5">
				<h2 className="font-bold text-center text-3xl mb-5">Ajouter un Joueur</h2>

				<PlayerForm teamParamId={teamParamId} />
			</div>
		</Template>
	)
}

export default PlayerAddPage
