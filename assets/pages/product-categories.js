function addProductCategory(){
    var category = $(".js-category-skeleton").html();
    $(".product-categories__list").append(category);
    $('.product-categories .styler-dinamic').styler();
}
function removeProductCategory(e){
    $(e).closest(".product-categories__category").remove();
}