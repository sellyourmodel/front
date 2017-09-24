<?php

$menu = file_get_contents('menu.html');

$categories = [];

$a = explode('<h4 class="navigation__title">', $menu);

for($i=1;$i<count($a);$i++){
    $a2 = explode('</h4>',$a[$i], 2);

    $item = [];
    $item["name"] = $a2[0];
    $item["items"] = [];

    $a3 = explode('class="navigation-list__link">',$a2[1]);

    for($i2=1;$i2<count($a3);$i2++){
        $a4 = explode('</a>',$a3[$i2], 2);

        $item["items"][] = $a4[0];

    }

    $categories[] = $item;
}

$ind = 0;
$posLvl1 = 0;

foreach($categories as $e){
    $ind++;
    $posLvl1 = $posLvl1 + 10;

    echo "INSERT INTO catalog_categories SET id='{$ind}',parent_id=NULL, pos={$posLvl1}, name='{$e["name"]}', active=1;<br/>";

    $posLvl2 = 0;
    $parent = $ind;
    foreach($e["items"] as $e2){
        $ind++;
        $posLvl2 = $posLvl2 + 10;

        echo "INSERT INTO catalog_categories SET id='{$ind}',parent_id='{$parent}', pos={$posLvl2}, name='{$e2}', active=1;<br/>";
    }
}


