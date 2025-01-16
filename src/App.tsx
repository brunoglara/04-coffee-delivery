import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyleComponent } from "./styles/themes/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>

			<GlobalStyleComponent />
		</ThemeProvider>
	);
}
