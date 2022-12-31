<?php 

$countries = array('France', 'Espagne', 'Norvège', 'Ukraine', 'Japon', 'Islande', 'Canada', 'Suède', 'Venezuela', 'Pologne', 'Slovaquie');

$html = '';
$html.= '<ul id="ChristmasWhere" class="onglets">';
foreach($countries as $where) {
	$name = enleveaccents(strtolower($where));
	$html.= '<li data-country="'.$name.'"><a href="#'.$name.'"data-where="'.$name.'">'.$where.'</a></li>';
}
$html.= '</ul>';

echo $html;




function enleveaccents($chaine) {
	$search  = array('À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'à', 'á', 'â', 'ã', 'ä', 'å', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ò', 'ó', 'ô', 'õ', 'ö', 'ù', 'ú', 'û', 'ü', 'ý', 'ÿ');
	$replace = array('A', 'A', 'A', 'A', 'A', 'A', 'C', 'E', 'E', 'E', 'E', 'I', 'I', 'I', 'I', 'O', 'O', 'O', 'O', 'O', 'U', 'U', 'U', 'U', 'Y', 'a', 'a', 'a', 'a', 'a', 'a', 'c', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i', 'o', 'o', 'o', 'o', 'o', 'o', 'u', 'u', 'u', 'u', 'y', 'y');
	$string = str_replace($search, $replace, $chaine);
	return $string;
};