const Loader = ({ text }) => {
	return (
		<div className="loader flex items-center justify-center h-max w-max mx-auto">
			<span className="loading loading-dots loading-lg text-primary mr-2"></span> {text}
		</div>
	)
}

export default Loader
