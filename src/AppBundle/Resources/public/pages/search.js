var autoSearch_i = 0;

function autoSearch(e) {
    var val = $(e).val();

    autoSearch_i++;

    if (val.length > 1) {
        setTimeout('autoSearchStart(' + autoSearch_i + ');', 100);
    }
    else {
        $(".js-quick-search-results").hide().html('');
    }

}

function filtersCheckboxClick(){
    var count = $(".js-filters-block input[type=checkbox]:checked").length;
    $(".js-filter-styles-count").html("(" + count +")");
}

function autoSearchStart(i) {
    if (i != autoSearch_i) {
        return;
    }

    var val = $(".js-search-val").val();

    $.get(Routing.generate('search_quick'), {search: val}, function (response) {
        if (response.length > 0) {
            $(".js-quick-search-results").show().html(response);
        }
        else {
            $(".js-quick-search-results").hide().html('');
        }
    });

}

$(document).ready(function() {
    $(".js-filters-link").click(function(){
        $(".js-filters-block").slideToggle();
    });
    filtersCheckboxClick();
});