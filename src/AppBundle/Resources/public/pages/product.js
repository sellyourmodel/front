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

function deleteComment(id){

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
                $(".js-comments").html(data.html);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Данная функция временно недоступна");
        }
    });
}