function showShare(){
    $(".js-share-btn").hide();
    $(".js-share-block").show();
    Ya.share2('share-block');
}

function showDeleteComment(e){
    $(e).closest('.comment').find('.delete-question').slideToggle();
}

function cancelDeleteComment(e){
    $(e).closest('.comment').find('.delete-question').slideUp();
}

function deleteComment(id, e){

    $.ajax({
        type: "POST",
        url: Routing.generate('product_comment_delete'),
        data: {id: id},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                $(e).closest('.comment').remove();
                //$(".js-comments").html(data.html);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Данная функция временно недоступна");
        }
    });
}

function toggleCollapsedText(){
    var wrapper = $(".product-info__text-wrapper");
    var link = $(".product-info__more-link a");
    if(wrapper.hasClass('collapsed')){
        wrapper.removeClass('collapsed');
        link.html(link.data('text-inactive'));
    }else{
        wrapper.addClass('collapsed');
        link.html(link.data('text-active'));
    }
}

$(function(){
    if($(".product-info__text-wrapper").length > 0){
        var wrapper = $(".product-info__text-wrapper");
        var text = $(".product-info__text");
        var linkWrepper = $(".product-info__more-link");
        var link = $(".product-info__more-link a");
        if(text.height() > 80){
            wrapper.addClass('collapsed');
            linkWrepper.show();
        }
    }
});