const TableNavigation = ({ currentPage, pages, setCurrentPage }) => {
	if (pages <= 1) {
		return (
			<div className="flex justify-center my-4">
				<div className="join shadow">
					<button className="btn btn-primary">1</button>
				</div>
			</div>
		)
	}

	return (
		<div className="flex justify-center my-4">
			<div className="join shadow">
				{Array.from({ length: pages }, (_, i) => i + 1).map((page) =>
					(page >= currentPage - 1 && page <= currentPage + 1) || page <= 1 || page >= pages ? (
						<button
							key={page}
							className={`join-item btn ${page === currentPage ? "btn-primary" : "bg-base-100"}`}
							onClick={() => {
								setCurrentPage(page)
							}}
						>
							{page}
						</button>
					) : (
						page >= currentPage - 2 &&
						page <= currentPage + 2 && (
							<button key={page} className="join-item btn bg-base-100 btn-disabled">
								...
							</button>
						)
					),
				)}
			</div>
		</div>
	)
}

export default TableNavigation
