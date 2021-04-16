<template>
  <div class="portfolio"> 
    <ul>
      <li><div class="overlay"><h2>The Dinner Table</h2><p class="summary-text">Beautiful gift box brownies with a purpose, delivered across the UK and straight to your door from Oxted, Surrey.</p><p class="services-text">Design | Development | Shopify</p><a href="https://www.thedinnertable.co.uk" target="_blank">Visit the website</a></div><img src="../assets/portfolio_the-dinner-table.jpg" alt="The Dinner Table"></li>
      <li><div class="overlay"><h2>Oxted Classic Cars</h2><p class="summary-text">Classic car hire for weddings, self-drive, TV and film, photoshoots and any other bespoke service you may require. Our diverse collection of true classics range from 1938 to 1969.</p><p class="services-text">Design | Development | Digital Marketing | Hosting</p><a href="https://www.oxtedclassiccars.co.uk" target="_blank">Visit the website</a></div><img src="../assets/portfolio_oxted-classic-cars.jpg" alt="Oxted Classic Cars"></li>
      <li><div class="overlay"><h2>Rafael Tome</h2><p class="summary-text">On a mission to help organisations deliver best in class customer experience through brands, services and products to therefore create meaningful human impact and eventually make people’s lives better.</p><p class="services-text">Development</p><a href="https://flamboyant-tereshkova-fbaf42.netlify.app/" target="_blank">Visit the website</a></div><img src="../assets/portfolio_rafael-tome.jpg" alt="Rafael Tome"></li>
      <li><div class="overlay"><h2>Teepee Emporium</h2><p class="summary-text">Luxury Teepee Sleepovers and Alfresco Events. Our fabulous Teepees make any event truly unique. Let us help you create your perfect celebration, whatever the weather.</p><p class="services-text">Design | Development</p><a href="https://www.teepee-emporium.co.uk" target="_blank">Visit the website</a></div><img src="../assets/portfolio_teepee-emporium.jpg" alt="Teepee Emporium"></li>
      <li><div class="overlay"><h2>Little Seeds</h2><p class="summary-text">The UK's Best Selling Swaddle Blankets and the softest most comfortable organic baby clothing with timeless and modern neutral designs.</p><p class="services-text">Design | Development | Shopify | Digital Marketing</p><a href="https://www.little-seeds.co.uk" target="_blank">Visit the website</a></div><img src="../assets/portfolio_little-seeds.jpg" alt="Little Seeds"></li>
      <li><div class="overlay"><h2>Stonerite Memorials</h2><p class="summary-text">Stonerite Memorials - Bespoke Memorials and Headstones using the finest natural stone.</p><p class="services-text">Development | Wordpress</p><a href="http://www.stonerite.co.uk/" target="_blank">Visit the website</a></div><img src="../assets/portfolio_stonerite-memorials.jpg" alt="Stonerite Memorials"></li>
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
					padding-left: 1rem;
					padding-right: 1rem;
					text-align: center;
				}

				.summary-text {
						display: none;
						visibility: hidden;
					}

				@media only screen and (min-width: 768px) {
				
				.summary-text {
						display: block;
						visibility: visible;
					}
					
				}

				.services-text {
					text-transform: uppercase;
					font-size: 0.875rem;
					font-weight: 600;
				}

				a {
					background-color: transparent;
					color: $white;
					margin-top: 2rem;
					text-decoration: none;
					padding: 10px 15px;
					border: 1px solid currentColor;
					display: inline-block;
					transition: all 0.3s ease;
					&:hover {
						background-color: $white;
						color: $green;
					}
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
