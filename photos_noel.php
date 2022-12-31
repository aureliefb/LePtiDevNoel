<?php

$html = '<div class="pic-ctn">';
$i = 1;
foreach (glob("img/lumieres/*", GLOB_NOSORT) as $lights) {
    $html.= '<img src="'.$lights.'" data-id="'.$i.'" alt="" class="pic">';
    $i++;
}
$html.= '</div>';
echo $html;

