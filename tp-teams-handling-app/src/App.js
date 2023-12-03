import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ThemeContextProvider } from "./components/context/ThemeContext"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import PlayerAddPage from "./pages/players/PlayerAddPage"
import PlayerEditPage from "./pages/players/PlayerEditPage"
import PlayersListPage from "./pages/players/PlayersListPage"
import TeamAddPage from "./pages/teams/TeamAddPage"
import TeamDetailPage from "./pages/teams/TeamDetailPage"
import TeamEditPage from "./pages/teams/TeamEditPage"
import TeamsListPage from "./pages/teams/TeamsListPage"

function App() {
	return (
		<ThemeContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/teams" element={<TeamsListPage />} />
					<Route path="/teams/:id" element={<TeamDetailPage />} />
					<Route path="/teams/add" element={<TeamAddPage />} />
					<Route path="/teams/:id/update" element={<TeamEditPage />} />
					<Route path="/players" element={<PlayersListPage />} />
					<Route path="/players/add" element={<PlayerAddPage />} />
					<Route path="/players/:id/update" element={<PlayerEditPage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</ThemeContextProvider>
	)
}

export default App
