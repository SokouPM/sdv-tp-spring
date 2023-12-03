import React, { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
	const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDark")) || false)

	useEffect(() => {
		localStorage.setItem("isDark", JSON.stringify(isDark))
	}, [isDark])

	return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>
}
