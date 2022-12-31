<?php

/*$menu = '<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
	<span aria-hidden="true"></span>
	<span aria-hidden="true"></span>
	<span aria-hidden="true"></span>
</a>';*/
$menu = '<aside class="menu">
	<a href="#"><figure class="image is-128x128">
		<img src="img/gnome.png" />
	</figure></a>
	<p>Joyeux Noël</p>
	<ul class="menu-list">
		<li>
			<a class="is-active">Entête</a>
			<ul>
				<li><a>Members</a></li>
				<li><a>Plugins</a></li>
				<li><a>Add a member</a></li>
			</ul>
		</li>
		<li><a>Invitations</a></li>
		<li><a>Authentication</a></li>
	</ul>
</aside>';

echo $menu;