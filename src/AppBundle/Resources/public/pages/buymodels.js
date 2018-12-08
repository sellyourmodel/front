function setBuyCount(price){
    var count = parseInt($(".js-buy-count").val());

    if(count <= 0 || isNaN(count)){
        ajaxBuyModelsError("Кол-во моделей должно быть число больше нуля");
        return;
    }

    if(count < 2){
        ajaxBuyModelsError("Минимальное кол-во моделей для покупки - 2 шт.");
        return;
    }

    $(".js-buy-count").html(count*price);

}

function buyModels(){

    var count = parseInt($(".js-buy-count").val());

    if(count <= 0 || isNaN(count)){
        ajaxBuyModelsError("Кол-во моделей должно быть число больше нуля");
        return;
    }

    if(count < 2){
        ajaxBuyModelsError("Минимальное кол-во моделей для покупки - 2 шт.");
        return;
    }

    if($("#buy-rules").prop('checked') == false){
        ajaxBuyModelsError("Примите пользовательское соглашение");
        return;
    }

    $.ajax({
        type: "POST",
        url: Routing.generate('cabinet_buy_write'),
        data: {count: count},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                ajaxBuyModelsError(data.error_text);
            }
            else {
                window.location.assign(data.url);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            ajaxBuyModelsError("Покупка моделей временно недоступна");
        }
    });
}

function ajaxBuyModelsError(text) {
    /*alert(text);
     return;*/
    $(".js-buy-models-result").html(text).removeClass('settings__success').addClass('settings__error').fadeIn();
    setTimeout(function () {
        $(".js-buy-models-result").html('').removeClass('settings__success').removeClass('settings__error').fadeOut();
    }, 5000);
}

function questionBuyModel(){
    $(".buy-block__confirm").fadeIn();
}

function buyThisModel(e, id){
    $.ajax({
        type: "POST",
        url: Routing.generate('product_buy_write'),
        data: {id: id},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                $(e).closest('.js-model-files').html(data.html);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Покупка моделей временно недоступна");
        }
    });
}


function likeProduct(id, e){

    var likesContainer = $(e).parent().parent().find('.js-product-likes');

    $.ajax({
        type: "POST",
        url: Routing.generate('product_like'),
        data: {id: id},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                likesContainer.html(data.likes);
                $(e).attr('disabled', 'disabled').html($(e).attr('data-change-name'));
                // if(data.active){
                //     $(e).addClass('active');
                // }
                // else{
                //     $(e).removeClass('active');
                // }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Данная функция временно недоступна");
        }
    });
}


function favoriteProduct(id, e){

    $.ajax({
        type: "POST",
        url: Routing.generate('product_favorite'),
        data: {id: id},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                if(data.active){
                    $(e).html('В избранном');
                }
                else{
                    $(e).html('В избранное');
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Данная функция временно недоступна");
        }
    });
}


function addModelComment(id, e){

    var textarea = $(".js-comments-textarea");

    textarea.removeClass('add-model__error-border');

    var text = textarea.val();
    text = $.trim(text);
    textarea.val(text);

    if(text == ''){
        textarea.addClass('add-model__error-border');
    }

    $.ajax({
        type: "POST",
        url: Routing.generate('product_comment_write'),
        data: {id: id, text:text},
        dataType: "json",
        success: function (data, status, object) {
            if (data.error) {
                alert(data.error_text);
            }
            else {
                $(".js-comments").html(data.html);
                textarea.val("");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Данная функция временно недоступна");
        }
    });
}