<template>
  
  <div id="app">

    <header>
      <div class="wrap">

        <h1 id="logo">
          <router-link to="/">
            <svg class="logo" viewBox="0 0 445.5 401.06"><path class="cls-1" d="M376,471.26H441.9a3.38,3.38,0,0,1,3.49,3.49l.22,20.16a3.34,3.34,0,0,1-3.49,3.31H376.23a3.34,3.34,0,0,1-3.49-3.31l-.22-20.16A3.38,3.38,0,0,1,376,471.26Z" transform="translate(-0.11 -99)"/><path class="cls-2" d="M144.81,104a3.65,3.65,0,0,1,3.49-3.56h22a3.66,3.66,0,0,1,3.49,3.56v123.9a3.65,3.65,0,0,1-3.49,3.55h-22a3.64,3.64,0,0,1-3.49-3.55Z" transform="translate(-0.11 -99)"/><path class="cls-2" d="M183.17,104a3.53,3.53,0,0,1,3.49-3.56H208.5A3.65,3.65,0,0,1,212,104V204h43.68a3.53,3.53,0,0,1,3.49,3.56v20.4a3.52,3.52,0,0,1-3.49,3.55h-69a3.52,3.52,0,0,1-3.49-3.55Z" transform="translate(-0.11 -99)"/><path class="cls-2" d="M20.91,237.46a3.51,3.51,0,0,1,3.3-2.94h2.94a4.06,4.06,0,0,1,3.12,1.84l42.58,79.3h.37l42.58-79.3a4.07,4.07,0,0,1,3.13-1.84h2.93a3.52,3.52,0,0,1,3.31,2.94l20.74,123.35a3.37,3.37,0,0,1-3.49,4H120.76a3.75,3.75,0,0,1-3.49-2.94L109,305.19h-.37L77.81,364.66a4.29,4.29,0,0,1-3.12,2H71.38a4,4,0,0,1-3.12-2l-31-59.47h-.36L28.8,361.91a3.57,3.57,0,0,1-3.49,2.94H3.65a3.36,3.36,0,0,1-3.48-4Z" transform="translate(-0.11 -99)"/><path class="cls-2" d="M141.86,347.41l8.62-15.24c1.47-2.38,5-2,6.25-1.1.73.37,14,10.1,26.06,10.1,7.34,0,12.66-4.59,12.66-11,0-7.71-6.42-13.58-18.9-18.53-15.79-6.25-35.61-18.54-35.61-40.57,0-18.17,14.13-36.53,42.4-36.53,19.09,0,33.78,9.73,39.28,13.77,2.2,1.28,1.84,4.59,1.1,5.87l-9.36,14.14c-1.28,2-4.59,3.67-6.24,2.38-1.65-.91-15.05-11-26.25-11-6.61,0-11.56,4.41-11.56,9.36,0,6.79,5.5,11.93,20,17.81,14.31,5.69,37.07,16.88,37.07,41.85,0,18.9-16.33,38-43.32,38-23.86,0-37.07-9.91-41.3-14.13C140.94,350.71,140.39,350,141.86,347.41Z" transform="translate(-0.11 -99)"/><path class="cls-2" d="M226.06,239.85a3.61,3.61,0,0,1,3.49-3.49h21.84a3.49,3.49,0,0,1,3.49,3.49V286.1h52.49V239.85a3.49,3.49,0,0,1,3.49-3.49h21.85a3.61,3.61,0,0,1,3.48,3.49V361.36a3.61,3.61,0,0,1-3.48,3.49H310.86a3.49,3.49,0,0,1-3.49-3.49V313.08H254.88v48.28a3.49,3.49,0,0,1-3.49,3.49H229.55a3.61,3.61,0,0,1-3.49-3.49Z" transform="translate(-0.11 -99)"/><path class="cls-2" d="M.11,373.22a3.62,3.62,0,0,1,3.49-3.49H26.18a3.49,3.49,0,0,1,3.49,3.49v74.34c0,12.85,9.54,23.13,22.58,23.13,13.21,0,22.94-10.28,22.94-23.13V373.22a3.49,3.49,0,0,1,3.49-3.49h22.57a3.61,3.61,0,0,1,3.49,3.49V449c0,27.9-23.49,51-52.49,51C23.43,500.06.11,476.93.11,449Z" transform="translate(-0.11 -99)"/><path class="cls-2" d="M114.09,373.22a3.49,3.49,0,0,1,3.49-3.49h54.88c22,0,40,17.81,40,39.65,0,16.89-11.2,30.47-27.17,36.89l25.15,46.63a3.47,3.47,0,0,1-3.12,5.32H182.93a3.39,3.39,0,0,1-2.94-1.65l-24.42-48.64H142.91v46.8a3.61,3.61,0,0,1-3.49,3.49H117.58a3.49,3.49,0,0,1-3.49-3.49Zm56,51.39c7.52,0,13.95-7,13.95-14.68A14.07,14.07,0,0,0,170.08,396H142.91v28.63Z" transform="translate(-0.11 -99)"/><path class="cls-2" d="M209.53,480.78l8.63-15.23c1.47-2.39,5-2,6.24-1.1.74.36,13.95,10.09,26.07,10.09,7.34,0,12.66-4.59,12.66-11,0-7.71-6.42-13.59-18.91-18.54-15.78-6.24-35.61-18.54-35.61-40.57,0-18.17,14.14-36.52,42.41-36.52,19.09,0,33.77,9.72,39.28,13.76,2.2,1.29,1.83,4.59,1.1,5.88L282,401.67c-1.29,2-4.59,3.67-6.24,2.39-1.66-.92-15.05-11-26.25-11-6.61,0-11.57,4.41-11.57,9.36,0,6.8,5.51,11.94,20,17.81,14.32,5.69,37.08,16.89,37.08,41.85,0,18.91-16.34,38-43.32,38-23.86,0-37.08-9.92-41.3-14.14C208.61,484.09,208.06,483.35,209.53,480.78Z" transform="translate(-0.11 -99)"/><path class="cls-2" d="M313.78,396.72H287.54a3.49,3.49,0,0,1-3.49-3.49v-20a3.49,3.49,0,0,1,3.49-3.49H369a3.49,3.49,0,0,1,3.49,3.49v20a3.49,3.49,0,0,1-3.49,3.49H342.79v98a3.62,3.62,0,0,1-3.49,3.49h-22a3.62,3.62,0,0,1-3.49-3.49Z" transform="translate(-0.11 -99)"/><path class="cls-2" d="M125.17,228.22a3.52,3.52,0,0,1-3.31,2.94h-2.93a4,4,0,0,1-3.12-1.84L73.22,150h-.37L30.27,229.32a4,4,0,0,1-3.12,1.84H24.21a3.51,3.51,0,0,1-3.3-2.94L.17,104.87a3.36,3.36,0,0,1,3.48-4H25.31a3.73,3.73,0,0,1,3.49,2.93l8.26,56.72h.37L68.26,101a4.33,4.33,0,0,1,3.13-2h3.3a4,4,0,0,1,3.12,2l31,59.47h.37l8.07-56.72a3.58,3.58,0,0,1,3.49-2.93h21.66a3.36,3.36,0,0,1,3.49,4Z" transform="translate(-0.11 -99)"/></svg>
          </router-link>
        </h1>
    
<button class="theme">
   <span class="darkIcon">
      dark
    </span>
    <span class="lightIcon">
      light
    </span>
</button>

<button class="ham">
    <span class="menuIcon">
      menu
    </span>
    <span class="xIcon">
      close
    </span>
  </button>

  <ul class="menu">
    <li><router-link to="/about"><a href="#" class="menu--link">About</a></router-link></li>
    <li><router-link to="/portfolio"><a href="#" class="menu--link">Portfolio</a></router-link></li>
    <li><router-link to="/"><a href="#" class="menu--link">Blog</a></router-link></li> 
 	<li><router-link to="/life"><a href="#" class="menu--link">Life</a></router-link></li> 
    <li><a href="./docs/peter-wilmshurst.pdf" target="_blank" title="Peter Wilmshurst CV" class="menu--link">CV</a></li>
  </ul>

      </div>
    </header> 

    <div class="spotify">
      <div class="spotify--album-cover">
        <a href="https://open.spotify.com/album/748dZDqSZy6aPXKcI9H80u?si=VMh-P2-zTo24COAk5ZHxBQ" target="_blank" alt="Whats on the jukebox: Kendrick Lamar: Good Kid, M.A.A.d City">
          <img src="./assets/kendrick-lamar-good-kid-maad-city.png" alt="Whats on the jukebox: Kendrick Lamar: Good Kid, M.A.A.d City" />
        </a>
      </div>
      
      <div class="spotify--album-details">
        <a href="https://open.spotify.com/album/748dZDqSZy6aPXKcI9H80u?si=VMh-P2-zTo24COAk5ZHxBQ" target="_blank" alt="Kendrick Lamar: Good Kid, M.A.A.d City">
          <h4>good kid, m.A.A.d city</h4>
        </a>
        <a href="https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg?si=91tQcD2rQh-wFeUyCVZqWA" target="_blank" alt="Kendrick Lamar">
          <h5>Kendrick Lamar</h5>
        </a>
      </div>   
    </div>

  <router-view/>
  </div>

</template>

<style>
html, body {
  margin: 0px;
  padding: 0px;
  height: 100%;
  font-family: brandon-grotesque, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.0625rem;
}
a {
  color:#39b54a;
}
</style>

<style lang="scss" scoped>

@import url('https://use.typekit.net/ofx6cpe.css');

// variables
$white: #ffffff;
$black: #2a263d;
$green: #39b54a;
$grey: #38344d;

#app {
	font-family: brandon-grotesque, sans-serif;
	font-style: normal;
	font-weight: 400;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: $grey;
	margin: 0 auto;
	min-height: 100vh;
	padding-bottom: 3rem;
}

.logo {
	max-width: 150px;
	transition: all 0.3s ease-in-out;

	.cls-1 {
		fill: $green;
	}
	.cls-2 {
		fill: $black;
	}
}

.wrap {
	max-width: 90vw;
	margin: 0 auto;
	margin-top: 4rem;
	@media only screen and (min-width: 768px) {
		max-width: 60vw;
	}
}

// Whats on the jukebox?
.spotify {
	font-size: 1rem;
	background-image: url("./assets/icon_spotify.png");
	background-size: contain;
	background-position: center right;
	background-repeat: no-repeat;
	display: none;
	visibility: hidden;
	justify-content: flex-end;
	position: fixed;
	bottom: 50px;
	left: -325px;
	width: 305px;
	height: 50px;
	background-color: $green;
	padding: 1rem 80px 1rem 1rem;
	color: $white;
	transition: transform 250ms;
	box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.25);
	z-index: 100;

	&:hover {
		transform: translateX(235px);
		cursor: pointer;
	}

	img {
		width: auto;
		height: 50px;
	}

	&--album-details {
		align-self: center;

		a {
			text-decoration: none;
			color: $white;

			&:hover {
				text-decoration: underline;
			}
		}

		h4,
		h5 {
			margin: 0;
			padding: 0;
		}
	}

	&--album-cover {
		margin-right: 1rem;
	}

	@media only screen and (min-width: 768px) {
		display: flex;
		visibility: visible;
	}
}

#app {

	// dark mode
	&.dark {
		background-color: $black;
		color: $white;

		.logo {
			.cls-2 {
				fill: $white;
			}
		}

		header {
			background-color: $black;
		}

		.navbar {
			background-color: $black;

			&--link {
				color: $white;
			}
		}

    .theme {
  border: $white solid 1px;
	background: $white;
  color: $black;
    }
	}
}

header {
	position: sticky;
	top: 0;
	z-index: 1;
	background-color: $white;
	box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);

	background-color: $white;

	.wrap {
		align-items: center;
		display: flex;
		max-width: 90vw;
		margin: 0 auto;

		@media only screen and (min-width: 768px) {
			max-width: 60vw;
		}
	}

	h1 {
		margin: 0;
		padding: 0;
		line-height: 0;
		.logo {
			padding: 1rem 0;
		}
	}

	&.scrolled {
		.logo {
			max-width: 80px;
			padding: 0.5rem 0;
		}
	}
}

#logo {
	flex: 1;
}

.ham {
	z-index: 100;
	width: 3rem;
	height: 3rem;
	border: $green solid 1px;
	background: $green;
	color: $white;
	cursor: pointer;
}

.xIcon {
	display: none;
}

.theme {
	z-index: 100;
	width: 3rem;
	height: 3rem;
  margin-right: 1rem;
	border: $black solid 1px;
	background: $black;
	color: $white;
	cursor: pointer;
}

.lightIcon {
display: none;
}


li {
	padding: 1rem 0;
}

.menu {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: 0;
	width: 100%;
	height: 100vh;
	background-image: url("./assets/logo-bg.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparentize($black, 0.01);
	color: $white;
	transform: translateX(-100%);
	transition: transform 0.2s;
	list-style: none;
	padding: 4rem;

	&--link {
		display: inline;
		font-size: 3rem;
		color: white;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
      color: $green;
		}
	}

  .router-link-exact-active {

    a {
    color: $green;}
  }
}

.showMenu {
	transform: translateX(0);
}

</style>
