import Footer from "./templateElements/Footer"
import Header from "./templateElements/Header"

const Template = ({ children, showHeader, showFooter }) => (
	<div className="min-h-screen flex flex-col">
		<Header showHeader={showHeader} />
		<main className="flex flex-1 bg-base-200 text-base-content">{children}</main>
		<Footer showFooter={showFooter} />
	</div>
)

export default Template
