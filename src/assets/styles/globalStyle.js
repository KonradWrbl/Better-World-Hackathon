import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}

	html, body {
		padding: 0;
		margin: 0;
	}

	html {
		 font-size: 62.5%;
	}

	body {
		font-family: 'Montserrat', sans-serif;
		font-size: 12px; 
		font-size: 1.2rem; 
	}
`;

export default GlobalStyle;
