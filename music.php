<?php

$html = '';
foreach (glob("media/songs/*") as $music) {
	$html.= '<figure class="music_song"><figcaption>'.pathinfo($music)['filename'].'</figcaption>
	<audio controls src="'.$music.'">
	<a href="'.$music.'">Download audio</a>
	</audio></figure>';  
}

echo $html;