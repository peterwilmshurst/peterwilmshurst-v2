<template>
  
  <div id="app">
    <div class="spotify">
      <div class="spotify--album-cover">
        <a href="https://open.spotify.com/album/1Mhn9VosyjtWn4dMPFlna6?si=ityhx10wT6CaD_KEOnBL-g" target="_blank" alt="Whats on the jukebox: Billy Joel: The Stranger">
          <img src="./assets/billy-joel-the-stranger.png" alt="Whats on the jukebox: Billy Joel: The Stranger" />
        </a>
      </div>
      
      <div class="spotify--album-details">
        <a href="https://open.spotify.com/album/1Mhn9VosyjtWn4dMPFlna6?si=ityhx10wT6CaD_KEOnBL-g" target="_blank" alt="Billy Joel: The Stranger">
          <h4>The Stranger</h4>
        </a>
        <a href="https://open.spotify.com/artist/6zFYqv1mOsgBRQbae3JJ9e?si=ZDaOVbAiTXuSu4Diz4j6SA" target="_blank" alt="Billy Joel">
          <h5>Billy Joel</h5>
        </a>
      </div>   
    </div>

     <nav class="navbar">
        <a href="#" class="navbar--link yes">Colour Scheme</a>
        <router-link to="/"><a href="#" class="navbar--link active">Blog</a></router-link>
        <router-link to="/about"><a href="#" class="navbar--link">About</a></router-link> 
        <router-link to="/portfolio"><a href="#" class="navbar--link">Portfolio</a></router-link>
        <a href="./docs/peter-wilmshurst.pdf" target="_blank" title="Peter Wilmshurst CV" class="navbar--link">CV</a>
    </nav>

     <h1 class="center">
      <img alt="Wilmshurst_" src="./assets/logo.svg">
    </h1>

  <router-view/>
  </div>

</template>

<style>
html, body {
  margin: 0px;
  padding: 0px;
}
</style>

<style lang="scss" scoped>

// variables
$white: #FFFFFF;
$black: #2A263D;
$green: #39b54a;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #38344d;
  margin: 0 auto;
}
.navbar {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: $white;
  padding: 1rem;
  &--link {
    display: flex;
    margin-left: 0.75rem;
    color: $green;
  }
}
.center {
  text-align: center;
}
h1 {
  img {
  display: block;
  margin: 0 auto;
  width: 150px;
  z-index: 10;
  position: relative;
  }
}
.wrap {
  max-width: 90vw;
  margin: 0 auto;
  margin-top: 4rem;
}

@media only screen and (min-width: 768px) {
  .wrap {
  max-width: 60vw;
}
}

// Whats on the jukebox?
.spotify {
	background-image: url("./assets/icon_spotify.png");
	background-size: contain;
	background-position: center right;
	background-repeat: no-repeat;
	display: flex;
	justify-content: flex-end;
	position: fixed;
	bottom: 50px;
	left: -270px;
	width: 250px;
	height: 50px;
	background-color: $green;
	padding: 1rem 80px 1rem 1rem;
	color: $white;
	transition: transform 250ms;
	box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.25);

	&:hover {
		transform: translateX(180px);
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
}

// dark mode
#app {
	&.dark {
		background-color: $black;
		color: $white;
	}
}

.dark {
	.navbar {
		background-color: $black;

		&--link {
			color: $white;
		}
	}
}

</style>
