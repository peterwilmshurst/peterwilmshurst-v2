<template>
  <div class="portfolio"> 
    <ul>
      <li><div class="overlay"><h2>The Dinner Table</h2><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi voluptate culpa quibusdam officiis, architecto at ad ducimus iure illum eum.</p><a href="https://www.thedinnertable.co.uk" target="_blank">Visit the website</a></div><img src="../assets/portfolio_the-dinner-table.jpg" alt="The Dinner Table"></li>
      <li><div class="overlay"><h2>Oxted Classic Cars</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae nostrum quaerat voluptates facere? Sapiente!</p><a href="https://www.oxtedclassiccars.co.uk" target="_blank">Visit the website</a></div><img src="../assets/portfolio_oxted-classic-cars.jpg" alt="Oxted Classic Cars"></li>
      <li><div class="overlay"><h2>Little Seeds</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maiores provident impedit aut consectetur eum, perspiciatis saepe sint alias culpa.</p><a href="https://www.little-seeds.co.uk" target="_blank">Visit the website</a></div><img src="../assets/portfolio_little-seeds.jpg" alt="Little Seeds"></li>
      <li><div class="overlay"><h2>Teepee Emporium</h2><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus natus animi adipisci repellat illo impedit assumenda delectus inventore architecto excepturi?</p><a href="https://www.teepee-emporium.co.uk" target="_blank">Visit the website</a></div><img src="../assets/portfolio_teepee-emporium.jpg" alt="Teepee Emporium"></li>

    </ul>
  </div>
</template>

<style lang="scss" scoped>

// variables
$white: #FFFFFF;
$black: #2A263D;
$green: #39b54a;
$grey: #38344d;

.portfolio {
	ul {
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;

		li {
			position: relative;
			list-style: none;

			@media only screen and (min-width: 768px) {
				flex: 1 0 50%;
			}

			.overlay {
				width: 100%;
				height: 100%;
        display: flex;
        flex-direction: column;

				position: absolute;
				background-color: transparentize($green, 0.1);
				color: $white;
				justify-content: center;
        align-items: center;
       
        visibility: hidden;
        opacity: 0;
		    transition: visibility 0s, opacity 0.25s linear;

        h2 {
          padding: 0;
          margin: 0;
        }

        p {
          padding-left:1rem;
          padding-right: 1rem;
        }

        a { color: $white;
        }

			}

			img {
				width: 100%;
        height: 100%;
			}

			&:hover {
				.overlay {
					visibility: visible;
          opacity: 1;
					cursor: pointer;
				}
			}
		}
	}
}


</style>
