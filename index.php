<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Aurélie Favre-Brun">
    <meta name="description" content="Concours de Noël du Petit Dév">
    <link rel="stylesheet" href="libs/bulma-0.9.4/bulma/css/bulma.min.css">
		<link rel="stylesheet" href="libs/bulma-tooltip-master/bulma-tooltip-master/dist/bulma-tooltip.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik+Dirt&family=Codystar&family=Cedarville+Cursive&family=Frijole&family=Parisienne">
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="img/gnome.png" type="favicon/ico" sizes="16x16">
    <script type="text/javascript" src="libs/jquery-3.6.2.min.js"></script>
    <script type="text/javascript" src="js/javascript.js"></script>
    <script type="text/javascript" src="js/snow.js-gh-pages/snow.js"></script>
    <title>Concours du Petit dév</title>
  </head>

  <body class="container">

  <?php include 'modale_noSanta.html'; ?>
	
	<div class="columns">

		<div class="column col-left">
			<div id="welcome" class="box has-text-centered">
				<figure class="image is-96x96">
					<img src="img/gnome.png" />
				</figure>
				Joyeux Noël
			</div>

			<section id="letter" class="hero">
				<div class="hero-body">

				<!-- <div class="column"> -->
					<figure id="mailbox" class="image is-256x256 has-tooltip-warning" data-tooltip="Hey ! Père Noël, t'as reçu une lettre...">
						<img class="is-rounded" src="img/mailBox.png"/>
					</figure>	

					<div id="modal-js-example" class="modal modal_letter">
					  <div class="modal-background"></div>
					  <div class="modal-content">
					    <div class="box">
					      <figure>
									<img src="img/lineStars.png"/>
								</figure>
					      <p class="SantaLetter">
					      Cher Père Noël,<br/>
								Cette année, j'ai été bien sage. J'arrive à peu près à l'heure au bureau, je suis sympa avec mes collègues et je fais bien mon travail.</br/>
								Mes tickets sont tous traités, mes projets en recette et je ne mets (presque) jamais en prod le vendredi ! <br/>
								S'il te plaît, sois gentil, j'espère que tu déposeras sous mon sapin quelques-uns des cadeaux que j'ai mis sur ma liste. Je te laisserai un en-cas et un coup à boire quand tu passeras le 24 ;)
								</p>
								<figure>
									<img src="img/lineStars.png"/>
								</figure>
					    </div>
					  </div>
					  <button class="modal-close is-large" aria-label="close"></button>
					</div>
				<!-- </div> -->

				</div>

			</section>
		</div>


		<div id="lights" class="tile is-parent col-right">
			<article class="tile is-child notification">
				<h1 id="lightChristmas" class="title">Noël en lumières</h1>
				<div class="content">
					<figure class="sapinGold image is-256x256">
					  <img src="img/sapin_gold.png">
					</figure>
					<p class="subtitle">Lumières, illuminations, animations, projections ou spectacles...  Noël est toujours synonyme de <span class="clignoter">lumières et de couleurs </span>!</p>
				</div>
				<div><?php include 'photos_noel.html' ?></div>
			</article>
		</div>

  	</div><!-- end of columns on the first "line" -->
		

  	<!-- second "line" -->
		<div id="secondLine" class="columns">
		  <div class="column">
		  	<div id="dinner" class="box">
					 <div class="content">
						<p class="title">Menu de Noël</p>
						<p>
						<span class="name">Apéritifs</span><br/>
						<span class="details">Coupe de champagne | Macvin</span><br/><br/>
						<span class="name">Entrées</span><br/>
						<span class="details">Escargots en beurre ail & persil<br/>
						Tranchette de foie gras et confit d'oignons<br/>
						Saumon fumé sur toasts</span><br/><br/>
						<span class="name">Plats</span><br/>
						<span class="details">Chapon servi en cocotte | Châtaignes, champignons & haricots verts<br/>
						Noix de St-Jacques sur lit de poireaux crêmeux</span><br/>
						<br/>
						<span class="name">Fromages & desserts</span><br/>
						<span class="details">Plateau de fromages du Jura & de Savoie<br/>
						Bûches pâtissières et glacées</span><br/><br/>
						<span class="name">Vins</span><br/>
						<span class="details">Pouilly Fumé | Saint-Estève</span>
						</p>
						</div>
				</div>		  
		  </div>

		  <div id="songs" class="column">
		    	<div class="box">
							<div class="title music_icons">
								<figure class="image is-48x48">
								  <img src="img/icon_music.png">
								</figure>
								<figure class="image is-48x48">
								  <img src="img/icon_lib_music.png">
								</figure>
								<figure class="image is-48x48">
								  <img src="img/icon_music.png">
								</figure>
							</div>
					  <div id="play_audio" class="content">
							<?php echo 'music.html' ?>
						</div>
					</div>
		  </div>
		</div> <!-- end of columns on the second "line" -->




		<section id ="christmasWorld" class="hero is-small">
		  <!-- Hero head: will stick at the top -->
		  <div class="hero-head">
		    <header class="tabs is-boxed is-fullwidth">
		      <div class="container">
		        	<?php echo 'aroundTheWorld.html' ?>
		      </div>
		    </header>
		  </div>

		  <div class="hero-body">
		    <div class="media-left">
		      <figure class="image is-256x256">
		        <img src="img/noel_monde_.jpg" alt="Image">
		      </figure>
		    </div>
	    	
	    	<div class="container ">
		      <div class="content">
		        <p class="title">Comment se fête Noël ailleurs dans le monde ?</p>
			      <p class="content">Découvrons une sélection de traditions et coutumes de Noël célébrées dans d'autres pays.</p>
			      <p class="wish"></p>
		      </div>
		    </div>
		  </div>

		  <div class="hero-foot">		    
		      <div class="container has-text-centered">
		        <p class="subtitle"><u>Source</u> : <a href="https://www.ef.com/cafr/blog/language/12-incroyables-traditions-de-noel/">https://www.ef.com/cafr/blog/language/12-incroyables-traditions-de-noel/</a></p>
		      </div>
		  </div>
		</section>
  </body>

	<footer class="footer">
		<div class="content has-text-centered">
		<p><small>Page créée par Aurélie FAVRE-BRUN en décembre 2022 pour le concours de Noël de <a href="https://lepetitdev.com/" target="_blank">Le Petit dév</a>.</small></p>			
		</div>
	</footer>
</html>

