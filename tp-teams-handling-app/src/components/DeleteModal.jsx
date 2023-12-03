const DeleteModal = ({ idToDelete, deleteFunction }) => {
	return (
		<dialog id="delete-modal" className="modal modal-bottom sm:modal-middle">
			<div className="modal-box">
				<h3 className="font-bold text-xl">⚠️ Attention</h3>
				<p className="py-4 text-lg">Cette action est irréversible</p>
				<div className="modal-action">
					<form method="dialog">
						<button
							className="btn btn-error text-base-100 mr-4"
							onClick={(e) => {
								e.stopPropagation()
								deleteFunction(idToDelete)
							}}
						>
							Confirmer la suppression
						</button>
						<button className="btn btn-primary" onClick={(e) => e.stopPropagation()}>
							Annuler la suppression
						</button>
					</form>
				</div>
			</div>
		</dialog>
	)
}

export default DeleteModal
