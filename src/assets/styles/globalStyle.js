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
		background-color: ${({ theme }) => theme.colors.lightGrey};
	}


.horizontal-scroll {
  overflow-x: auto;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  overflow-y: hidden;
	margin-bottom: 30px;
}

.horizontal-scroll__wrapper {
  width: 375px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
  overflow: auto;
}

	.popular-widget .horizontal-scroll {
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  padding: 0 16px;
}

.popular-widget .horizontal-scroll__wrapper {
  padding: 0;
}

.popular-widget__title {
  color: #666c79;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  font-size: 12px;
  margin-bottom: 24px;
  padding: 0 16px;
}

.popular-widget__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.popular-widget__item {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin-right: 15px;
  width: 115px;
	height: 115px;
  color: #666c79;
  font-weight: 500;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-weight: bold;
	font-size: 14px;
	color: #333;
	padding: 10px;
	text-align: center;

	img {
		width: 48px;
		height: 48px;
		display: block;
	}
}

`;

export default GlobalStyle;
