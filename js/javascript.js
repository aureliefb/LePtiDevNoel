$(document).ready(function () {
	$(this).scrollTop(0);

	$('#letter .modal_letter').removeClass('is-active');
	$('.onglets a li').removeClass('is-active');
	$('#lights').removeClass('display');

	var confirm = window.confirm('As-tu été sage cette année ?');
	if(!confirm) {
		$('.modal_ko').addClass('is-active');
	} else {
		$('.modal_ok').addClass('is-active');

		setInterval(function(){
		    $('.modal_ok').fadeOut( 1500, function(){
		    	$('.modal_ok').removeClass('is-active');
		    });
		},3000);
	}

	$('.modal-close').click(function() {
		$('.modal').removeClass('is-active');
		window.location.reload();
	});



	

	$('#letter #mailbox img').mouseenter(function() {
		$(this).addClass('santa_letter');
	});
	$('#letter #mailbox img').click(function() {
		$('.modal_letter').addClass('is-active');
	});

	$('.modal_letter .modal-close').click(function() {
		$('.modal_letter').removeClass('is-active');
	});


	$('#lights').mouseenter(function() {
		$('html').addClass('cursor_sapin');
	});
	$('#lights').mouseleave(function() {
		$('html').removeClass('cursor_sapin');
	});

	$('#dinner').mouseenter(function() {
		$('html').addClass('cursor_champ');
	});
	$('#dinner').mouseleave(function() {
		$('html').removeClass('cursor_champ');
	});


	$('.onglets a').click(function() {
		$(this).closest('li').addClass('is-active');
		
		var country = $(this).data('where');
		
		var txt_fra = 'Plusieurs jours avant Noël, les villes et les villages de France prennent un air de fête. Les façades des mairies sont décorées, d’immenses sapins sont dressés sur les grandes places, les rues principales et les arbres sont recouverts de guirlandes lumineuses.<br/>'+
		'Chaque famille française dresse au cours du mois de décembre son sapin de Noël. Le calendrier de l’Avent est également très populaire en France. Il en existe de toutes sortes destinés principalement aux enfants.<br/>'+
		'Le réveillon de Noël est l’occasion de se réunir en famille autour d’un repas copieux. Selon les traditions familiales, le Père Noël vient déposer les cadeaux le soir du réveillon ou pendant la nuit et les enfants les découvrent le matin de Noël au pied du sapin.<br/>'+
		'Les croyants se rendent à l’église pour assister à la messe de minuit. Le 25 est un jour férié mais contrairement à d’autre pays européens, les Français travaillent le 26 décembre.';

		var txt_esp = 'Au cas où vous ne seriez pas fan des arbres de Noël, vous pourriez peut-être vous intéresser aux bûches de Noël ? Dans de nombreuses régions d’Espagne, les cadeaux sont déposés par Tió de Nadal, soit une bûche de Noël sous forme d’un morceau de bois souvent doté d’un visage et de petites jambes.<br/>'+
		'Toutefois, la bûche ne se contente pas d’apporter des cadeaux aux familles ; Tio de Nadal partage également le repas du soir et s’installe confortablement sous sa propre petite couverture. Adorable, n’est-ce pas ?<br/>'+
		'Eh bien, le côté adorable s’arrête ici : la veille de Noël, la pauvre petite bûche est jetée dans la cheminée où les familles la battent à l’aide de bâtons jusqu’à ce que des cadeaux et des bonbons en sortent. C’est probablement le moment opportun pour mentionner le surnom de Tió de Nadal : « Caga Tió », c’est-à-dire « la bûche à caca ».';
		var wish_esp = 'Feliz Navidad';
		
		var txt_norv = 'En Norvège, à Noël, il faut cacher ses serpillières et ses balais – non pas parce que les Norvégiens refusent de faire le ménage, mais parce qu’ils sont légèrement superstitieux et veulent empêcher les mauvais esprits, de retour sur Terre cette nuit-là, de voler les balais et s’envoler joyeusement vers les cieux de Noël.';
		var wish_norv = 'God Jul';

		var txt_ukr = 'Croyez-le ou non, rien ne vaut une araignée de Noël. En Ukraine, les arbres de Noël sont décorés de toiles d’araignée – pas de panique, il ne s’agit que d’ornements qui ressemblent à des toiles d’araignées et sont censés porter chance.<br/>'+
		'L’histoire remonte à une pauvre femme qui ne pouvait pas s’offrir de guirlandes pour décorer son sapin. Un jour, elle se réveilla et vit l’arbre couvert de toiles d’araignées qui semblaient resplendir dans la lumière du soleil. D’autres pays, comme la Pologne ou l’Allemagne, considèrent que trouver une araignée ou une toile d’araignée dans un arbre de Noël porte chance.';
		var wish_ukr = 'щасливого Різдва';

		var txt_japon = 'À Noël, il est toujours question de nourriture et au Japon, cette dernière est associée à trois lettres : KFC. '+
		'Les gens affluent vers la chaîne de restauration rapide américaine, KFC, pour manger – lancer de baguettes – « Kurisumasu ni wa kentakkii! », c’est-à-dire « du Kentucky Pour Noël ! » <br/>'+
		'Manger du poulet (frit) à Noël est une tradition qui remonte à une campagne de marketing de 1974 – et encore à ce jour, KFC enregistre son volume de ventes le plus élevé chaque année au réveillon de Noël. '+
		'Pour participer à ce repas de Noël atypique partez en séjour linguistique au Japon.';
		var wish_japon = 'メリークリスマス';

		var txt_isl = 'Noël, dans toute sa splendeur festive et joyeuse, semble aussi être la période des monstres qui rappellent aux enfants d’être sages et de bien se conduire pendant au moins un mois de l’année. Jólakötturinn, le chat de Noël islandais, est l’un des membres les plus surprenants de cette « police de Noël ».<br/>'+
		'Cela semble adorable, mais, tout comme pour une certaine bûche, les apparences sont trompeuses : Jólakötturinn mange les enfants – à savoir les enfants qui ne s’acquittent pas de leurs tâches et, par conséquent, ces derniers ne reçoivent pas de nouveaux vêtements à Noël. Miaouyeux Noël !';
		var wish_isl = 'Gleðileg jól';

		var txt_can = 'Je parie que nous avons tous écrit une lettre au père Noël à un moment de notre vie – mais saviez-vous qu’il avait vraiment une adresse ? Sa boîte aux lettres se trouve au Canada et si vous lui écrivez avant le 16 décembre – dans plus de 30 langues différentes, y compris le braille – il vous répondra.<br/>'+
		'Il suffit d’envoyer votre lettre à : Père Noël, Pôle Nord H0H 0H0, Canada. C’est gratuit ; vous n’avez donc pas besoin d’affranchir votre lettre, car le Père Noël est génial… tout comme le code postal du pôle Nord.';
		var wish_can = 'Merry Christmas!';

		var txt_sued = 'Le « Donald Duck Special » de Noël est une importante tradition suédoise. Cette émission de télévision, qui dure plusieurs heures, est diffusée la veille de Noël, à 15 heures, et toutes les festivités sont organisées en fonction d’elle, de sorte que les familles peuvent regarder le spectacle ensemble.';
		var wish_sued = 'God Jul';

		var txt_venez = 'Le prix du mode de transport le plus sympa à Noël est décerné à la capitale du Venezuela : Caracas. En effet, dans cette ville, les gens ne se rendent pas à la messe de Noël à pied, mais ils y vont en rollers. Certaines parties de la ville sont même fermées à la circulation afin que chacun puisse patiner jusqu’à l’église en toute sécurité.';
		var wish_venez = 'Feliz Navidad';

		var txt_pol = 'Dans certaines parties du monde, comme l’Ukraine et la Pologne, le bon moment pour ouvrir les cadeaux est inscrit dans les étoiles : le plus jeune des enfants doit regarder le ciel et attendre qu’apparaisse la première étoile – signe que l’on peut commencer à ouvrir les cadeaux (en cas de temps couvert, quelqu’un décidera du moment venu.)';
		var wish_pol = 'Wesołych Świąt';

		var txt_slov = 'Le pudding – de toutes saveurs et consistances – est un délice de Noël populaire. En Slovaquie et dans certaines régions d’Ukraine, le pudding ne réchauffe pas seulement le cœur, il peut aussi prédire l’avenir : l’homme le plus vieux de la famille prend une cuillerée de loksa et la jette au plafond. Plus le pudding collera, plus vous aurez de la chance. C’est aussi simple que cela.';
		var wish_slov = 'Veselé Vianoce';

		var sel_titre = $('#christmasWorld .hero-body p.title');
		var sel_texte = $('#christmasWorld .hero-body p.content');
		var sel_wish = $('#christmasWorld .hero-body p.wish');
		var sel_img = $('#christmasWorld .hero-body figure img');

		sel_titre.text('');
		sel_texte.html('');
		sel_wish.text('');
		sel_img.attr('src', '');

		if(country == 'france') {
			sel_img.attr('src', '../LePtitDevNoel/img/repas_noel.png');
			sel_titre.text('Traditions françaises');
			sel_texte.html(txt_fra);
			sel_wish.text('Joyeux Noël !');
		} else if(country == 'espagne') {
			sel_img.attr('src', '../LePtitDevNoel/img/caga_tio.jpg');
			sel_titre.text('La Bûche de Noël');
			sel_texte.html(txt_esp);
			sel_wish.text(wish_esp);
		} else if(country == 'norvege') {
			sel_img.attr('src', '../LePtitDevNoel/img/Balais.jpg');
			sel_titre.text('Les balais et les serpillières');
			sel_texte.html(txt_norv);
			sel_wish.text(wish_norv);
		} else if(country == 'ukraine') {
			sel_img.attr('src', '../LePtitDevNoel/img/araignee_ukraine.jpg');
			sel_titre.text('Les araignées de Noël');
			sel_texte.html(txt_ukr);
			sel_wish.text(wish_ukr);
		} else if(country == 'japon') {
			sel_img.attr('src', '../LePtitDevNoel/img/kfc_japon.jpg');
			sel_titre.text('Le poulet de Noël');
			sel_texte.html(txt_japon);
			sel_wish.text(wish_japon);
		} else if(country == 'islande') {
			sel_img.attr('src', '../LePtitDevNoel/img/chat_noel.jpg');
			sel_titre.text('Les monstres de Noël');
			sel_texte.html(txt_isl);
			sel_wish.text(wish_isl);
		} else if(country == 'canada') {
			sel_img.attr('src', '../LePtitDevNoel/img/adresse_perenoel.jpg');
			sel_titre.text('La boîte aux lettres du Père Noël');
			sel_texte.html(txt_can);
			sel_wish.text(wish_can);
		} else if(country == 'suede') {
			sel_img.attr('src', '../LePtitDevNoel/img/donald_duck_.png');
			sel_titre.text('Donald Duck');
			sel_texte.html(txt_sued);
			sel_wish.text(wish_sued);
		} else if(country == 'venezuela') {
			sel_img.attr('src', '../LePtitDevNoel/img/venezuela_roller.png');
			sel_titre.text('Se déplacer en rollers');
			sel_texte.html(txt_venez);
			sel_wish.text(wish_venez);
		} else if(country == 'pologne') {
			sel_img.attr('src', '../LePtitDevNoel/img/etoile.jpg');
			sel_titre.text('Suivre les étoiles');
			sel_texte.html(txt_pol);
			sel_wish.text(wish_pol);
		} else if(country == 'slovaquie') {
			sel_img.attr('src', '../LePtitDevNoel/img/pudding_.jpg');
			sel_titre.text('Le pudding de Noël');
			sel_texte.html(txt_slov);
			sel_wish.text(wish_slov);
		}
	});



});
