import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}

	html, body {
		padding: 0;
		margin: 0;
		overflow-x: hidden;
	}

	html {
		 font-size: 62.5%;
	}

	body {
		font-family: 'Montserrat', sans-serif;
		font-size: 12px; 
		font-size: 1.2rem; 
	}

	h2 {
		margin: 0;
		font-size: ${({ theme }) => theme.font.m}
	}

	#root {
		height: 100vh;
		background-color: ${({theme}) => theme.colors.lightGrey};
	}
`;

export default GlobalStyle;
